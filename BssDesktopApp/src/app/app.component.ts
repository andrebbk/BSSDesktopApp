import { Component, NgZone, OnInit } from '@angular/core';
import { WindowRefServiceService } from './services/window-ref-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'BssDesktopApp';

  tests: Array<any> = [];

  private _window:any;

  constructor(zone: NgZone, windowRef: WindowRefServiceService){
      this._window = windowRef.nativeWindow;    
      
      this._window.api.receive("result_SendTests", (args: any[]) => {
        zone.run(() => {
          this.tests = args;
          console.log(args);
        });
        
      });
  }    
  
  ngOnInit(): void {
    console.log("Getting tests list");
    this._window.api.send("getTests");    
  }
}
