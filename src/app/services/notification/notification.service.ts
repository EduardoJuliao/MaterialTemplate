import { Injectable } from "@angular/core";
import { Ng2IzitoastService } from "ng2-izitoast";

@Injectable()
export class NotificationService {
  constructor(private iziToast: Ng2IzitoastService) {}

  public success(model: INotificationModel): void {
      this.iziToast.success({
          title: model.title || "",
          message: model.message || "",
      });
  }

  public warning(model: INotificationModel): void {
    this.iziToast.warning({
        title: model.title || "",
        message: model.message || "",
    });
  }

  public error(model: INotificationModel): void {
    this.iziToast.error({
        title: model.title || "",
        message: model.message || "",
    });
  }

  public info(model: INotificationModel): void {
    this.iziToast.info({
        title: model.title || "",
        message: model.message || "",
    });
  }

  public ask(model: INotificationAskModel): void {
    let hide = (instance, toast) => {
      instance.hide(
        {
          transitionOut: "fadeOutUp"
        },
        toast
      );
    };

    this.iziToast.question({
      title: model.title || "",
      message: model.message || "",
      timeout: 0,
      buttons: [
        [
          `<button>${model.okButtonText || "Ok"}</button>`,
          function(instance, toast) {
            if (typeof model.okCallback === "function") {
              model.okCallback();
            }
            hide(instance, toast);
          },
          true
        ],
        [
          `<button>${model.cancelButtonText || "Cancel"}</button>`,
          function(instance, toast) {
            if (typeof model.cancelCallback === "function") {
              model.cancelCallback();
            }
            hide(instance, toast);
          },
          false
        ]
      ]
    });
  }
}

interface INotificationModel {
  title?: string;
  message: string;
}

interface INotificationAskModel extends INotificationModel {
  okButtonText: string;
  cancelButtonText: string;
  okCallback?: () => void;
  cancelCallback?: () => void;
}
