import { appContainerElement } from "../appGlobals";
import { logBouncyBob } from "./logConfig";
import STYLE from "./Notifier.m.scss";

class NotifierClass {
  private static get permissionGranted(): boolean {
    return Notification.permission === "granted";
  }

  private lastNotification: Notification;

  private initialized: boolean;

  private messages: string[] = [];

  private grantPermissionButton: JQuery;

  constructor() {
    this.initialized = false;
    // MacOs doesn't enable "automatic" notifications => I use a button
    this.grantPermissionButton = $(`<button class="${STYLE.grantPermissionButton}">Show Notifications</button>`);
    this.grantPermissionButton.on("click", () =>
      Notification.requestPermission().then(() => {
        this.initialized = true;
        this.flushMessages();
        this.grantPermissionButton.remove();
        this.grantPermissionButton = undefined;
      }),
    );
    appContainerElement.append(this.grantPermissionButton);
  }

  public Notify(msg: string) {
    this.messages.push(msg);
    this.flushMessages();
  }

  private flushMessages(): void {
    if (!this.initialized) {
      return;
    }
    for (let msg: string = this.messages.shift(); msg; msg = this.messages.shift()) {
      if (NotifierClass.permissionGranted) {
        this.lastNotification = new Notification(msg, {
          vibrate: [2, 3, 5],
        });
      } else {
        // Fall back to log
        logBouncyBob.info(msg);
      }
    }
  }
}

export const Notifier: NotifierClass = new NotifierClass();
