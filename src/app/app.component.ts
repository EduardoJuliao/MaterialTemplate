import { Component } from '@angular/core';
import { SidenavService } from './core/sidenav/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private opened: boolean = false;
  private event;

  constructor(private sidenavService:SidenavService){
    
  }

  ngOnInit() {
      this.event = this.sidenavService.toogle().subscribe(isOpen => {
        this.opened = isOpen;
      })
  }

  ngOnDestroy(){
    this.event.unsubscribe();
  }
}
