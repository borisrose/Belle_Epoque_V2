import sealed from "../../utils/decorators/class/sealed";
import { onNavigateType } from "../../models/types/on-navigate.type";
import required from "../../utils/decorators/property/required";

@sealed
export default class HomeContainer {
  onNavigate: onNavigateType;

  homeMenuButton: HTMLButtonElement;

  constructor(@required onNavigate: onNavigateType) {
    this.onNavigate = onNavigate;

    this.homeMenuButton = document.getElementById(
      "home-menu-button"
    ) as HTMLButtonElement;

    this.homeMenuButton.addEventListener("click", this.onClick.bind(this));
  }

  onClick() {
    this.onNavigate("#menu");
  }
}
