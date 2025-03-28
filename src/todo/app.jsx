import { useReducer } from "react";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";

import { todoReducer } from "./reducer";

import "./app.css";

export function App() {
    const [todos, dispatch] = useReducer(todoReducer, []);

    return (
        <>
            <Header dispatch={dispatch} />
            <Main todos={todos} dispatch={dispatch} />
            <Footer todos={todos} dispatch={dispatch} />
        </>
    );
}