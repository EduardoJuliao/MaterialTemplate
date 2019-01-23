import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class SidenavService {
  public isOpen: boolean = true;

  constructor() {}

  public toogle(): Observable<boolean> {
    this.isOpen = !this.isOpen;
    return of(this.isOpen);
  }
}
