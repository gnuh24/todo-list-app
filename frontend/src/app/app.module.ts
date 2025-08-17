import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Layouts
import { UserLayoutModule } from './layouts/user-layout/user-layout.module';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutingModule,
        AdminLayoutModule,     // 👈 Import nguyên module thay vì chỉ 1 component
        UserLayoutModule   // 👈 Import nguyên module thay vì chỉ 1 component
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
