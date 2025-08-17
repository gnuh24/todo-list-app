import { Component } from '@angular/core';

@Component({
    selector: 'app-admin-dashboard',
    standalone: false,
    template: `
    <div class="dashboard-container">
      <h1>Admin Dashboard</h1>
      <p>Welcome back, Admin!</p>
    </div>
  `,
    styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent { }
