import { NotificationService } from "./../../services/notification/notification.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "notification",
  templateUrl: "notification.component.html"
})
export class NotificationComponent implements OnInit {
  constructor(private notificationService: NotificationService) {}

  ngOnInit() {}

  public open_information(): void {
    this.notificationService.info({
      title: "Info Title",
      message: "Info Message"
    });
  }

  public open_success(): void {
    this.notificationService.success({
      title: "Success Title",
      message: "Success Message"
    });
  }

  public open_warning(): void {
    this.notificationService.warning({
      title: "Warning Title",
      message: "Warning Message"
    });
  }

  public open_error(): void {
    this.notificationService.error({
      title: "Error Title",
      message: "Error Message"
    });
  }

  public open_question(): void {
    this.notificationService.ask({
      message: "test",
      okCallback: () => {
        this.notificationService.success({
          message: "Ok"
        });

        this.notificationService.warning({
          message: "Ok"
        });

        this.notificationService.error({
          message: "Ok"
        });

        this.notificationService.info({
          message: "Ok"
        });
      },
      cancelCallback: () => {
        this.notificationService.success({
          message: "Cancel"
        });

        this.notificationService.warning({
          message: "Cancel"
        });

        this.notificationService.error({
          message: "Cancel"
        });

        this.notificationService.info({
          message: "Cancel"
        });
      },
      okButtonText: "Ok",
      cancelButtonText: "Cancel"
    });
  }
}
