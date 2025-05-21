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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SharedComponentsModule } from './shared-components/shared-components.module';

import { provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';

import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
const BssPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#012a5b',
            100: '#012a5b',
            200: '#012a5b',
            300: '#012a5b',
            400: '#012a5b',
            500: '#012a5b',
            600: '#012a5b',
            700: '#012a5b',
            800: '#012a5b',
            900: '#012a5b',
            950: '#012a5b'
        }
    }
});

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
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    SharedComponentsModule,
  ],
  providers: [
    { 
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService 
    }, 
    WindowRefServiceService,
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: BssPreset,
        options: {
          prefix: 'bss',
          darkModeSelector: '.bss-dark-mode'
        }
      },
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
