import HomeContainer from "./src/ts/containers/home-container/home-container";
import header from "./src/ts/layout/header/header";
import { onNavigateType } from "./src/ts/models/types/on-navigate.type";
import homeView from "./src/ts/views/home-view/home-view";



declare global {
    interface Window {
        onNavigate:onNavigateType
    }
}


window.onNavigate = (h:string) => {
    console.log('✅ you are using onNavigate')
    navigateToPage(h);
}



export const  navigateToPage:onNavigateType = (h: string) => {
    window.history.pushState({}, "", window.location.pathname + h)
    const app = document.getElementById('app') as HTMLElement
    app.innerHTML += ""
    app.innerHTML += header()
    switch(h){
        case "":
            console.log('✅ You are on home page')
            app.innerHTML += homeView()
            new HomeContainer(window.onNavigate)
            break;
        default:
            break;     
    }

} 

window.onpopstate = () => {
    console.log('✅ state is popping you are chanding the url address')
    navigateToPage(window.location.hash)
}


export default function(){
    console.log('✅ the export default function of router.ts has been called')
    navigateToPage(window.location.hash)
}
