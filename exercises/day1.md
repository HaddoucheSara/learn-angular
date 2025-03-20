# Angular Homes App - Day 1 Tutorial

## Description

This is the take-home exercise for Day 1. In this first task, you’ll clone the project, install dependencies, and add your first component, just as we did this morning.

### Objectives:

- Set up your Angular development environment
- Understand how to work with a mock API using JSON Server
- Create your first Angular component
- Learn about Angular's component architecture
- Implement data binding with @Input
- Apply Tailwind CSS for modern, responsive styling

### What You'll Build:

By the end of this tutorial, you'll have created a functional home card component that displays property information. This component will form the foundation of our housing application that we'll expand throughout the course.

Let's get started!

## Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-repo/angular-homes.git
cd angular-homes
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the JSON Server

```bash
npm run server
```

This will start a mock REST API server on http://localhost:3000

### 4. Test the JSON Server

Open your browser and navigate to:

```
http://localhost:3000/homes
```

You should see a JSON response with a list of homes.

## Creating Your First Component

### 1. Generate the Home Card Component

```bash
ng generate component components/home-card 
```

This creates:

- `src/app/components/home-card/home-card.component.ts`
- `src/app/components/home-card/home-card.component.html`
- `src/app/components/home-card/home-card.component.css`

### 2. Create a Home Model

Create a new file `src/app/models/home.ts`:

```typescript
/**
 * Interface representing a home listing
 * This defines the structure of a home object in our application
 */
export interface Home {
  id?: number; // Optional as it will be auto-generated for new homes
  title: string; // Title of the home listing
  description: string; // Detailed description of the property
  city: string; // City where the property is located
  rooms: number; // Number of rooms in the property
  bathrooms: number; // Number of bathrooms in the property
  hasPool: boolean; // Whether the property has a pool
  picture: string; // URL to the picture of the property
}
```

### 3. Update the Home Card Component

#### Update home-card.component.ts

```typescript
import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { LucideAngularModule, WavesLadder, Bed, Bath, MapPin } from "lucide-angular";

import { Home } from "../../models/home";

/**
 * Component for displaying a single home card
 * This is a presentational component that receives a Home object via @Input
 */
@Component({
  selector: "app-home-card",
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule],
  templateUrl: "./home-card.component.html",
  styleUrls: ["./home-card.component.css"],
})
export class HomeCardComponent {
  @Input() home!: Home;
  readonly wavesLadderIcon = WavesLadder;
  readonly bedIcon = Bed;
  readonly bathIcon = Bath;
  readonly mapPinIcon = MapPin;
}
```

#### Update home-card.component.html

```html
<!-- Home card -->
<div class="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
  <!-- Home image -->
  <div class="h-48 overflow-hidden">
    <img [src]="home.picture" [alt]="home.title" class="w-full h-full object-cover" />
  </div>

  <!-- Home details -->
  <div class="p-6">
    <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ home.title }}</h3>
    <p class="text-gray-600 mb-4 flex items-center gap-2">
      <lucide-icon [img]="mapPinIcon" class="my-icon" color="gray"></lucide-icon>
      {{ home.city }}
    </p>

    <!-- Property features in a row -->
    <div class="flex justify-between text-sm text-gray-500 mb-4">
      <div class="flex items-center gap-2">
        <lucide-icon [img]="bedIcon" class="my-icon" color="indigo"></lucide-icon>
        <span class="text-indigo-900 font-medium">{{ home.rooms }} Bedrooms</span>
      </div>
      <div class="flex items-center gap-2">
        <lucide-icon [img]="bathIcon" class="my-icon" color="indigo"></lucide-icon>
        <span class="text-indigo-900 font-medium">{{ home.bathrooms }} Bathrooms</span>
      </div>
      <div class="flex items-center gap-2">
        <lucide-icon [img]="wavesLadderIcon" class="my-icon" [color]="home.hasPool ? 'blue' : 'gray'"></lucide-icon>
      </div>
    </div>

    <!-- Description with truncation -->
    <p class="text-gray-700 mb-4 line-clamp-2">{{ home.description }}</p>

    <!-- Edit button -->
    <button [routerLink]="['/edit', home.id]" class="cursor-pointer w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition duration-300">Edit Listing</button>
  </div>
</div>
```

#### Add Tailwind Classes to home-card.component.css

The CSS file will be empty because we're using Tailwind classes directly in the HTML:

```css
/* No custom CSS needed - using Tailwind classes */
```

### 4. Use the Home Card in App Component

#### Update app.component.ts

```typescript
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HomeCardComponent } from "./components/home-card/home-card.component";
import { Home } from "./models/home";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, HomeCardComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "angular-homes";

  // Sample home data for testing
  mockHome: Home = {
    id: 1,
    title: "Modern Beachfront Villa",
    description: "Luxurious beachfront property with amazing ocean views and modern amenities. Perfect for family vacations or retreats.",
    city: "Malibu",
    rooms: 4,
    bathrooms: 3,
    hasPool: true,
    picture: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  };
}
```

#### Update app.component.html

```html
<main class="container mx-auto p-4">
  <h1 class="text-3xl font-bold mb-6">Angular Homes</h1>
  <app-home-card [home]="mockHome"></app-home-card>
</main>
```

### 5. Start the Application

```bash
npm run start
```

Navigate to http://localhost:4300 to see your application.

## Tailwind CSS in Angular

### Using Tailwind Classes

- Tailwind provides utility classes that you apply directly in your HTML
- Examples:
  - `bg-white`: white background
  - `text-xl`: extra large text
  - `flex`: display flex
  - `p-6`: padding of 1.5rem (24px)
  - `rounded-lg`: large border radius
  - `shadow-md`: medium shadow effect
  - `hover:shadow-lg`: larger shadow on hover
  - `transition duration-300`: smooth transitions

### Tailwind Layout Classes

- `container`: responsive container
- `mx-auto`: horizontal auto margin
- `flex justify-between`: flex with space between items
- `gap-2`: gap of 0.5rem between flex items
- `w-full`: full width
- `h-48`: height of 12rem (192px)
- `line-clamp-2`: truncate text at 2 lines

### Text and Color Classes

- `text-gray-800`: dark gray text
- `text-indigo-900`: indigo text
- `font-semibold`: semi-bold font weight
- `font-medium`: medium font weight
- `bg-indigo-600`: indigo background
- `hover:bg-indigo-700`: darker indigo on hover

### Additional Resources

- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Angular Documentation](https://angular.dev/overview)
- [JSON Server Documentation](https://github.com/typicode/json-server)
