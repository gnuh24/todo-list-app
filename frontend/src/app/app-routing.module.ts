import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

const routes: Routes = [
    {
        path: '',
        component: UserLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./features/user/home/home.module').then(m => m.HomeModule),
            },
        ],
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('./features/admin/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardModule),
            },
        ],
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
