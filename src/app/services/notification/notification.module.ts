import { NotificationService } from './notification.service';
import { NgModule } from "@angular/core";
import { Ng2IziToastModule } from "ng2-izitoast";

@NgModule({
  imports: [Ng2IziToastModule],
  exports: [],
  declarations: [],
  providers: [NotificationService]
})
export class NotificationModule {}
