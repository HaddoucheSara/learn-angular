import { Component, Input } from '@angular/core';
import { Home } from '../../models/home';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule,
  WavesLadder,
  Bed,
  Bath,
  MapPin,
} from 'lucide-angular';
@Component({
  selector: 'app-home-card',
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css',
})
export class HomeCardComponent {
  @Input() home!: Home;
  readonly wavesLadderIcon = WavesLadder;
  readonly bedIcon = Bed;
  readonly bathIcon = Bath;
  readonly mapPinIcon = MapPin;
}
