import axios from "axios";
import { Component, SyntheticEvent } from "react";
import "./LoginView.css";

interface LoginViewState {
    username:string;
    password:string;
}

class LoginView extends Component<{}, LoginViewState> {

    constructor(props:{}) {
        super(props);
        this.state={username:"", password:""};
    }

    public render(): JSX.Element {
        return (
            <div className="LoginView">
                <p>
                    <input placeholder="Username" onChange={this.usernameChanged} />
                </p>
                <p>
                    <input placeholder="Password" onChange={this.passwordChanged} />
                </p>
                <p>
                    <button onClick={this.login}>Login</button>
                </p>
            </div>
        );
    }

    private usernameChanged = (e: SyntheticEvent) => {
        const username = (e.target as HTMLInputElement).value;
        this.setState({ username });
    };

    private passwordChanged = (e: SyntheticEvent) => {
        const password = (e.target as HTMLInputElement).value;
        this.setState({ password });
    };

    private login = async (e: SyntheticEvent) => {
        try {
            const response = await axios.post("http://localhost:4000/auth/login", { username: this.state.username, password: this.state.password })    
            // console.log(response.data);
            localStorage["loginData"]= JSON.stringify(response.data);
            console.log(localStorage["loginData"]);
        } catch (error) {
            alert(error);
        }
        

    }
}

export default LoginView;
