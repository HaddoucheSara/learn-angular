import { Component, inject, OnInit } from '@angular/core';
import { HomeCardComponent } from '../home-card/home-card.component';
import { HomeService } from '../services/home.service';
import { PaginationComponent } from '../pagination/pagination.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-homes-grid',
  imports: [HomeCardComponent, PaginationComponent, FormsModule],
  templateUrl: './homes-grid.component.html',
  styleUrl: './homes-grid.component.css',
})
export class HomesGridComponent implements OnInit {
  homeService = inject(HomeService);
  homes = this.homeService.paginatedHomes;
  isLoading = this.homeService.isLoading;
  error = this.homeService.error;
  cityFilter: string = '';
  roomsFilter: number | null = null;
  // searchTerm: string = '';
  // filteredHomes = this.homes();

  ngOnInit(): void {
    this.homeService.fetchHomes();
  }

  applyFilters(): void {
    this.homeService.fetchHomes(
      1,
      6,
      this.cityFilter,
      this.roomsFilter || undefined
    );
  }
  // applySearch(): void {
  //   const term = this.searchTerm.toLowerCase();
  //   this.filteredHomes = this.homes().filter(
  //     (home) =>
  //       home.title.toLowerCase().includes(term) ||
  //       home.city.toLowerCase().includes(term)
  //   );
  // }
}
