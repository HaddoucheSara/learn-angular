import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './models/home';
import { HomeCardComponent } from './components/home-card/home-card.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-homes';
  mockHome: Home = {
    id: 1,
    title: 'Modern Beachfront Villa',
    description:
      'Luxurious beachfront property with amazing ocean views and modern amenities. Perfect for family vacations or retreats.',
    city: 'Malibu',
    rooms: 4,
    bathrooms: 3,
    hasPool: true,
    picture: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914',
  };
}
