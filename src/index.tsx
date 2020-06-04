/**
 *  @version 1.0.0
 *  @author Rony cb - @Mrvalem
 *  @description Punto de Entrada de React
 * 	@process 1
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import WebFont from "webfontloader";
import * as serviceWorker from "./serviceWorker";

/**
 * @description Cargar la hoja de estilos, requiere SASS
 */
import "./sass/style.scss";

/**
 * @description WebFontLoader nos permite cargar la fuente de Google de manera asíncrona.
 * @url https://github.com/typekit/webfontloader
 */

WebFont.load({
  google: {
    families: ["IBM Plex Sans:400,500,600,700", "sans-serif"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
