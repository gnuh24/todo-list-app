import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard.component';

const routes: Routes = [
    { path: '', component: AdminDashboardComponent }
];

@NgModule({
    declarations: [AdminDashboardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ]
})
export class AdminDashboardModule { }
