import { Component } from '@angular/core';
import { HeroComponent } from "../utils/hero/hero.component";
import { MatTabsModule } from '@angular/material/tabs';
import { TabsComponent } from '../tabs/tabs.component';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    MatTabsModule,
    TabsComponent,
    TabComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  hero = {
    "mensaje": "Reserva tu estancia y disfruta del lujo redefinido a las tarifas más asequibles.",
    "titulo": "Bienvenidos"
  }
}
