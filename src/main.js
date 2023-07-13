"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var react_router_dom_1 = require("react-router-dom");
var Buscador_tsx_1 = require("./pages/Buscador.tsx");
var Home_tsx_1 = require("./pages/Home.tsx");
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <react_router_dom_1.BrowserRouter>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path='/' element={<Home_tsx_1.default />}/>
        <react_router_dom_1.Route path='/buscador' element={<Buscador_tsx_1.default />}/>
      </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>



  </react_1.default.StrictMode>);
