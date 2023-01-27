import { React, useState } from "react";
import ReactDOM from "react-dom";
import { home, reports} from "/";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
    const [reports, setReports] = useState([])

    return (
        <div>
            <BrowserRouter>
            <Nav>
                <Route exact path = "/">
                    <Home/>
                </Route>
                <Route path="/reports">
                    <Reports/>
                </Route>
            </Nav>
            </BrowserRouter>
        </div>
    )
}




ReactDOM.render(<App />, document.getElementById("app"));