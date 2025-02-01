import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;
  activeTab?: TabComponent;

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter(tab => tab.active);
    this.activeTab = activeTabs.length > 0 ? activeTabs[0] : this.tabs.first;
  }

  selectTab(index: number) {
    this.tabs.toArray().forEach((tab, i) => tab.active = i === index);
    this.activeTab = this.tabs.toArray()[index];
  }
}
