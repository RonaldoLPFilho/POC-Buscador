"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./Home.css");
var decolar_logo_2019_svg_1 = require("/home/ronis/Projects/POC-Buscador/src/assets/decolar-logo-2019.svg");
var react_router_dom_1 = require("react-router-dom");
function App() {
    return (<>
      <img className='logo' src={decolar_logo_2019_svg_1.default} alt="Logo da decolar"/>
      <h1>POC - Buscador</h1>
      <p>Bem-vindo 😀</p>
      <button><react_router_dom_1.Link to="/buscador">Acessar tela de busca</react_router_dom_1.Link></button>
    </>);
}
exports.default = App;
