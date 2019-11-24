import { logBouncyBob } from "./logConfig";

class NotifierClass {
  private static get permissionGranted(): boolean {
    return Notification.permission === "granted";
  }

  private lastNotification: Notification;

  private initialized: boolean;

  private messages: string[] = [];

  constructor() {
    this.initialized = false;
    if (!NotifierClass.permissionGranted) {
      Notification.requestPermission().then(() => {
        this.initialized = true;
        this.flushMessages();
      });
    }
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
