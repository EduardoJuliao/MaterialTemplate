import { SidenavService } from './../sidenav/sidenav.service';
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'toolbar',
   templateUrl: 'toolbar.component.html'
})

export class ToolBarComponent implements OnInit {
   constructor(private sidenavService:SidenavService) { }

   ngOnInit() { }

   public toogle (){
      this.sidenavService.toogle();
   }
}