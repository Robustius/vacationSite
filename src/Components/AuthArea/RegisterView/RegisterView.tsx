import axios from "axios";
import { Component, SyntheticEvent } from "react";
import "./RegisterView.css";

interface RegisterViewState {
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    errors: any;
    usererror:any;
}

class RegisterView extends Component<{}, RegisterViewState> {

    constructor(props: {}) {
        super(props);
        this.state = { username: "", password: "", firstName:"", lastName:"", errors: {},usererror:"" };
    }

    public render(): JSX.Element {
        return (
            <div className="RegisterView">
                <p>
                    <input placeholder="Username" onChange={this.usernameChanged} value={this.state.username} />
                    {this.state.errors.username && <span>{this.state.errors.username}</span>}{<span>{this.state.usererror}</span>}
                </p>
                <p>
                    <input type='password'placeholder="Password" onChange={this.passwordChanged} value={this.state.password} />
                    {this.state.errors.password && <span>{this.state.errors.password}</span>}
                </p>
                <p>
                    <input placeholder="First Name" onChange={this.fnameChanged} value={this.state.firstName} />
                    {this.state.errors.firstName && <span>{this.state.errors.firstName}</span>}
                </p>
                <p>
                    <input placeholder="Last Name" onChange={this.lnameChanged} value={this.state.lastName} />
                    {this.state.errors.lastName && <span>{this.state.errors.lastName}</span>}
                </p>
                <p>
                    <button onClick={this.register}>Register</button>
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

    private fnameChanged = (e: SyntheticEvent) => {
        const firstName = (e.target as HTMLInputElement).value;
        this.setState({firstName})
    };
    private lnameChanged = (e: SyntheticEvent) => {
        const lastName = (e.target as HTMLInputElement).value;
        this.setState({ lastName });
    };

    private register = async (e: SyntheticEvent) => {
        try {
            const response = await axios.post<any>("http://localhost:4000/auth/register", { username: this.state.username, password: this.state.password, firstName: this.state.firstName, lastName: this.state.lastName })
            this.setState({ errors: {},usererror:"" });
            
           if(response.data.length>=1){
           this.setState({usererror:JSON.stringify(response.data)})
        }
        } catch (error) {
            this.setState({ errors: error.response.data });
        }
    }
}

export default RegisterView;
