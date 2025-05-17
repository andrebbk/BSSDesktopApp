import { Component, HostListener, NgZone, OnInit, signal } from '@angular/core';
import { WindowRefServiceService } from './services/window-ref-service.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    standalone: false
})
export class AppComponent implements OnInit{
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);

  tests: Array<any> = [];
  
  private _window:any;

  constructor(zone: NgZone, windowRef: WindowRefServiceService){
      this._window = windowRef.nativeWindow;    
      
      this._window?.api?.receive("result_SendTests", (args: any[]) => {
        zone.run(() => {
          this.tests = args;
          console.log(args);
        });
        
      });
  }    
  
  ngOnInit(): void {
    console.log("Getting tests list");
    this._window?.api?.send("getTests");   
    
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  

  @HostListener('window:resize')
  onResize() {
    this.screenWidth.set(window.innerWidth);
    if (this.screenWidth() < 768) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }  
}
