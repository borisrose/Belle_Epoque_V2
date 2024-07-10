import sealed from "../../utils/decorators/class/sealed";

@sealed
export default class CustomLocalStorageService {
  constructor() {}

  getSpecificItem(itemName: string) {
    const localStorageItem = localStorage.getItem(itemName);
    if (localStorageItem) {
      return JSON.parse(localStorageItem);
    } else {
      return "error";
    }
  }

  removeSpecificItem(itemName: string) {
    const localStorageItem = this.getSpecificItem(itemName);
    if (localStorageItem !== "error") {
      localStorage.removeItem(itemName);
      return "done";
    } else {
      return localStorageItem;
    }
  }

  setSpecificItem(itemName: string, data: any) {
    localStorage.setItem(itemName, JSON.stringify(data));
    return "done";
  }
}
