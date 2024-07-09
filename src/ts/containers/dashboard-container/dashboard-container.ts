import { onNavigateType } from "../../models/types/on-navigate.type";

export default class DashboardContainer {
    onNavigate:onNavigateType
    constructor(onNavigate: onNavigateType){
        this.onNavigate = onNavigate
    }
}
