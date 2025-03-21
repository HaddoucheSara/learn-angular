import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  LucideAngularModule,
  MapPin,
  WavesLadder,
  Bed,
  Bath,
  Heart,
} from 'lucide-angular';
import { Home } from '../models/home.type';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-home-card',
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: './home-card.component.html',
  styleUrl: './home-card.component.css',
})
export class HomeCardComponent {
  @Input() home!: Home;
  @Output() toggleFavorite = new EventEmitter<number>();
  // Icons list
  readonly MapPin = MapPin;
  readonly WavesLadderIcon = WavesLadder;
  readonly BedIcon = Bed;
  readonly BathIcon = Bath;
  readonly Heart = Heart;
  onFavoriteClick(): void {
    if (this.home.id) {
      this.toggleFavorite.emit(this.home.id);
    }
  }
}
