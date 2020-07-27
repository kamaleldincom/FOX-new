import React, { Component } from 'react';
import { render } from "react-dom";
import { CBadge } from "@coreui/react";
import "./style.scss";

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
            <div>
                <p>SSH check</p>
                <ul>
                    {this.state.data.map(contact => {
                        return (
                            <li key={contact.id}>
                                {contact.name} - {contact.email}
                                <CBadge color="primary"> Primary color badge</CBadge>
                            </li>
                        );
                    })}
                </ul>
            </div>

        );
    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);