import CargarMaterial from "./components/CargarMaterial.js";
import HomeScreen from "./screens/HomeScreen.js";
import MaterialList from "./screens/MaterialList.js";
import MatsScreen from "./screens/MatsScreen.js";
import { parseRequestUrl } from "./utils.js";
import Header from "./components/Header.js"

const routes = {
    "/matsScreen": MatsScreen,
    "/": HomeScreen,
    "/materiales": MaterialList,
}
const router = async () => {
    const request = parseRequestUrl();
    const parseUrl =
    (request.resource ? `/${request.resource}` : '/') +
    (request.id ? '/:id' : '') +
    (request.verb ? `/${request.verb}` : '');
    const screen = routes[parseUrl] ? routes[parseUrl] : Error404Screen;
    const header = document.getElementById('header-container');
    header.innerHTML = await Header.render();
    await Header.after_render();
    const main = document.getElementById('main-container');
    main.innerHTML = await screen.render();
    if(screen.after_render) await screen.after_render();

};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);