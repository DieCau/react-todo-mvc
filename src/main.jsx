import React from "react";
import { render } from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";

import "todomvc-app-css/index.css";
import "todomvc-common/base.css";
import { App } from "./todo/app";

render(
    <HashRouter>
        <Routes>
            <Route path="*" element={<App />} />
        </Routes>
    </HashRouter>,
    document.getElementById("root")
);