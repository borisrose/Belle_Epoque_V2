import configurable from "../../utils/decorators/accessor-and-method/configurable";

export default class NotificationService {
  _content: string;

  @configurable(false)
  get content() {
    return this._content;
  }

  set content(data: any) {
    this.content = data.content;
  }
}
