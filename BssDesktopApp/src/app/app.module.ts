import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WindowRefServiceService } from './services/window-ref-service.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StudentsComponent } from './components/students/students.component';
import { ClassesComponent } from './components/classes/classes.component';
import { BssSettingsComponent } from './components/bss-settings/bss-settings.component';
import { GlobalErrorHandlerService } from './services/global-error-handler.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftSidebarComponent,
    MainComponent,
    DashboardComponent,
    StudentsComponent,
    ClassesComponent,
    BssSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { 
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService 
    }, 
    WindowRefServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
