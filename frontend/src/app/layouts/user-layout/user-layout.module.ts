import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UserFooterComponent } from './components/user-footer/user-footer.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';
import { UserSidebarComponent } from './components/user-sidebar/user-sidebar.component';
import { UserLayoutComponent } from './user-layout.component';

@NgModule({
    declarations: [
        UserLayoutComponent,
        UserHeaderComponent,
        UserSidebarComponent,
        UserFooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule   // 👈 cần cho router-outlet
    ],
    exports: [
        UserLayoutComponent
    ]
})
export class UserLayoutModule { }
