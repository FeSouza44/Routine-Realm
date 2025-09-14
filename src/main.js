import renderHomePage
from "../pages/home";

const routes ={
    "/home":renderHomePage
}

function getPath(){
   //obtem o hash(ex"#/login"), remove o # e tira os espaços
   const url = (location.pathname || "").replace("/RoutineRealm/", "/").trim();
   return url && url.startsWith("/")? url : "/home";
}

function renderRoutes(){
   const url = getPath();
   const render = routes[url] || routes["/home"];
   render();
}
document.addEventListener('DOMContentLoaded', renderRoutes);