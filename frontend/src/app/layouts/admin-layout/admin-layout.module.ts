import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';

@NgModule({
    declarations: [
        AdminLayoutComponent,
        AdminHeaderComponent,
        AdminSidebarComponent,
        AdminFooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule   // 👈 cần cho router-outlet
    ],
    exports: [
        AdminLayoutComponent
    ]
})
export class AdminLayoutModule { }
