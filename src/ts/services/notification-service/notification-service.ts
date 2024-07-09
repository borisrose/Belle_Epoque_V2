export default class NotificationService {
  _content: string;
  get content() {
    return this._content;
  }

  set content(data: any) {
    this.content = data.content;
  }
}
