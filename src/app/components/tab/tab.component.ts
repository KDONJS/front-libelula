import { Component, Input, TemplateRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [],
  template: "<ng-template><ng-content></ng-content></ng-template>",
  styleUrl: './tab.component.css'
})
export class TabComponent {
  @Input() title!: string;
  @Input() active = false;
  @ContentChild(TemplateRef, { static: true }) content!: TemplateRef<any>;
}
