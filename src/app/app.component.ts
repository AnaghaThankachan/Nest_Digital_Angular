import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './unit/navbar/navbar.component';
import { CardComponent } from './unit/card/card.component';
import { CarouselComponent } from './unit/carousel/carousel.component';
import { HomeComponent } from './pages/home/home.component';
import { DepartmentComponent } from './pages/department/department.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NeST_DIGITIAL';
}
