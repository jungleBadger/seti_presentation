import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/night.css";
import "reveal.js/plugin/highlight/monokai.css";

import "./components/App.scss";

import {render} from "preact";
import App from "./components/App.jsx";


if (document.readyState !== "loading") {
    const rootElement = document.getElementById("app");
    if (rootElement) {
        render(<App />, rootElement);
    }
}

