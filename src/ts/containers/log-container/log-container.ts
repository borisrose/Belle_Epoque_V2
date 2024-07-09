import { onNavigateType } from "../../models/types/on-navigate.type";

export default class LogContainer {
  onNavigate: onNavigateType;
  constructor(onNavigate: onNavigateType) {
    this.onNavigate = onNavigate;
  }
}
