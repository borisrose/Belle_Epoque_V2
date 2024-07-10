import sealed from "../../utils/decorators/class/sealed";
import sealDecorator from "../../utils/decorators/class/sealed";
import { onNavigateType } from "../../models/types/on-navigate.type";

@sealed
export default class DashboardContainer {
  onNavigate: onNavigateType;
  constructor(onNavigate: onNavigateType) {
    this.onNavigate = onNavigate;
  }
}
