import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { WindowRefServiceService } from './window-ref-service.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandlerService implements ErrorHandler {
  private _window: any;

  constructor(private injector: Injector, private windowRef: WindowRefServiceService) {
    this._window = windowRef.nativeWindow;
  }  

  handleError(error: any): void {
    const router = this.injector.get(Router); // Lazy-load to avoid circular dependency

    let message = '';
    let stackTrace = '';

    if (error instanceof HttpErrorResponse) {
      // Handle HTTP errors
      message = `HTTP Error: ${error.status} - ${error.message}`;
    } else {
      // Handle Client Error (Angular Error, ReferenceError...)
      message = error.message ? error.message : error.toString();
      stackTrace = error.stack ? error.stack : '';
    }

    // Log to console or send to remote server
    console.error('Global Error Handler:', { message, stackTrace });

    this._window?.bssLogger?.logError(message);

    // Optionally navigate to an error page
    // router.navigate(['/error']);

    // Optionally re-throw if needed
    // throw error;
  }
}
