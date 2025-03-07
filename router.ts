import HomeContainer from "./src/ts/containers/home-container/home-container";
import LogContainer from "./src/ts/containers/log-container/log-container";
import MenuContainer from "./src/ts/containers/menu-container/menu-container";
import header from "./src/ts/layout/header/header";
import { onNavigateType } from "./src/ts/models/types/on-navigate.type";
import homeView from "./src/ts/views/home-view/home-view";
import contactView from "./src/ts/views/contact-view/contact-view";
import menuView from "./src/ts/views/menu-view/menu-view";
import notFoundView from "./src/ts/views/not-found-view/not-found-view";
import logView from "./src/ts/views/log-view/log-view";

declare global {
  interface Window {
    onNavigate: onNavigateType;
  }
}

window.onNavigate = (h: string) => {
  console.log("✅ you are using onNavigate");
  navigateToPage(h);
};

export const navigateToPage: onNavigateType = (h: string) => {
  // j'écris manuellement l'historique de navigation du navigateur
  window.history.pushState({}, "", window.location.pathname + h);

  const app = document.getElementById("app") as HTMLElement;

  app.innerHTML = "";
  app.innerHTML += header();

  // une façon d'opération un contrôle de flux de code
  switch (h) {
    case "":
      console.log("✅ You are on home page");
      app.innerHTML += homeView();
      new HomeContainer(window.onNavigate);
      break;
    case "#contact":
      console.log("✅ You are on contact page");
      app.innerHTML += contactView();
      break;
    case "#menu":
      app.innerHTML += menuView();
      new MenuContainer(window.onNavigate);
      break;
    case "#login":
      app.innerHTML += logView(true);
      new LogContainer(window.onNavigate, true);
      break;
    case "#register":
      app.innerHTML += logView(false);
      new LogContainer(window.onNavigate, false);
      break;
    default:
      app.innerHTML = "";
      app.innerHTML += notFoundView();
      break;
  }
};

window.onpopstate = () => {
  console.log("✅ state is popping you are changing the url address");
  navigateToPage(window.location.hash);
};

export default function () {
  console.log("✅ the export default function of router.ts has been called");
  navigateToPage(window.location.hash);
}
