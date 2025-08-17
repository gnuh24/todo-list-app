import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: false,
    template: `
    <div class="home-container">
      <h1>Welcome to User Home</h1>
      <p>This is a sample Home page inside User Layout.</p>
    </div>
  `,
    styleUrls: ['./home.component.scss']
})
export class HomeComponent { }
