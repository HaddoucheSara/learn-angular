import { Component, Input } from '@angular/core';
import {
  LucideAngularModule,
  MapPin,
  WavesLadder,
  Bed,
  Bath,
} from 'lucide-angular';
import { Home } from '../models/home.type';

@Component({
  selector: 'app-home-card',
  imports: [LucideAngularModule],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css',
})
export class HomeCardComponent {
  @Input() home!: Home;
  // Icons list
  readonly MapPin = MapPin;
  readonly WavesLadderIcon = WavesLadder;
  readonly BedIcon = Bed;
  readonly BathIcon = Bath;
}
