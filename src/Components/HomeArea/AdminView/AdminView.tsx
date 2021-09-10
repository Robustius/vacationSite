import { Component } from "react";
import jwtAxios from "../../../Services/JwtAxios";
import AddView from "../../LayoutArea/Admin/AddView/AddView";
import AdminCard from "../../LayoutArea/Admin/AdminCard/AdminCard";
import "./AdminView.css";
enum adminTools{
    none,edit,remove,add
}
interface AdminViewState {
    message: string;
}

class AdminView extends Component<{}, AdminViewState,adminTools> {
    constructor(props:{}) {
        super(props);
        this.state={message:""}
    }

    componentDidMount = async () => {
        try {
            const response = await jwtAxios.get<string>("http://localhost:4000/admin");
            this.setState({ message: response.data });
        } catch (error) {
            alert("AdminView: " + error);
        }
    };
    // componentDidUpdate = async () => {
    //     try {
    //         const response = await jwtAxios.get<string>("http://localhost:4000/admin");
    //         this.setState({ message: response.data });
    //     } catch (error) {
    //         alert("AdminView: " + error);
    //     }
    // };

    public render(): JSX.Element {
        return (
            <div className="AdminView">
				<div>
                    <span>{this.state.message}</span>
                    <AdminCard/>
                    <AddView></AddView>
                </div>
            </div>
        );
    }
}

export default AdminView;
