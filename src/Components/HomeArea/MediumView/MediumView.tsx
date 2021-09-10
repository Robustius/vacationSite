import axios from "axios";
import { Component } from "react";
import jwtAxios from "../../../Services/JwtAxios";
import CardView from "../../LayoutArea/User/CardView/CardView";
import "./MediumView.css";

interface MediumViewState {
    message: string;
}

class MediumView extends Component<{}, MediumViewState> {

    constructor(props: {}) {
        super(props);
        this.state = { message: "" }
    }

    componentDidMount = async () => {
        try {
            const response = await jwtAxios.get<string>("http://localhost:4000/medium");
            this.setState({ message: response.data });
        } catch (error) {
            alert("MediumView:" + error);
        }
    };

    public render(): JSX.Element {
        return (
            <div className="MediumView">
                <div>
                    <span>{this.state.message}</span>
                    <CardView></CardView>
                </div>
            </div>
        );
    } 
}

export default MediumView;
