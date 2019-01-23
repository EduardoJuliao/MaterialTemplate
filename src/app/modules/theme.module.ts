import {
  MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatIconModule,
  MatCardModule
} from "@angular/material";
import { NgModule } from "@angular/core";

var modules = [MatButtonModule, MatCheckboxModule, MatSidenavModule,MatToolbarModule,MatListModule,MatIconModule,MatCardModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class ThemeModule {}
