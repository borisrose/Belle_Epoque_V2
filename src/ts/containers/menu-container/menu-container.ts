import list from "../../components/list/list";
import menuItem from "../../components/menu-item/menu-item";
import { onNavigateType } from "../../models/types/on-navigate.type";
import ProductsService from "../../services/products-service/products-service";

export default class MenuContainer {
  onNavigate: onNavigateType;

  constructor(onNavigate: onNavigateType) {
    this.onNavigate = onNavigate;

    ProductsService.getProducts().then(res => {
      console.log(res);
      const sectionMenuItems = document.getElementById("menu__items");
      sectionMenuItems.innerHTML += list(res.appetizers, menuItem);
      sectionMenuItems.innerHTML += list(res.desserts, menuItem);
    });
  }
}
