import { onNavigateType } from "../../models/types/on-navigate.type";

export default class HomeContainer {
  onNavigate: onNavigateType;

  constructor(onNavigate: onNavigateType) {
    this.onNavigate = onNavigate;

    const homeMenuButton = document.getElementById(
      "home-menu-button"
    ) as HTMLButtonElement;

    homeMenuButton.addEventListener("click", e => this.onClick());
  }

  onClick() {
    this.onNavigate("#menu");
  }
}
