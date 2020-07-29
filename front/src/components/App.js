import React, { Component, Suspense } from 'react';
import { render } from "react-dom";
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import FoxLoginCard from "./cards/FoxLoginCard";
import FoxHeader from "./layout/FoxHeader";
import store from './store';
import "./style.scss";
import { CContainer } from '@coreui/react';
import { FoxSidebar } from './layout';
import { icons } from './assets/icons'

React.icons = icons

const loading = (
    <div className="pt-3 text-center">
        <div className="sk-spinner sk-spinner-pulse"></div>
    </div>
)

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    componentDidMount() {
        fetch("api/back")
            .then(response => {
                if (response.status > 400) {
                    return this.setState(() => {
                        return { placeholder: "Something went wrong!" };
                    });
                }
                return response.json();
            })
            .then(data => {
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }

    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <Suspense fallback={loading}>
                        <div className="c-app c-default-layout">
                            <FoxSidebar />
                            <div className="c-wrapper">
                                <FoxHeader />
                                <div className="c-body">
                                    <FoxLoginCard />
                                </div>
                            </div>
                        </div>
                    </Suspense>
                </HashRouter>

            </Provider>
        );
    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);