import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"

import List from "./components/List"
import Detail from "./components/Detail"

import './index.css';

function App() {
    return (
        <Router className="App">
            <Route exact path="/" component={List} />
            <Route path="/:id" component={Detail} />
        </Router>
    )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)