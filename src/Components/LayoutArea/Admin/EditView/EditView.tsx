import { Component } from "react";
import "./EditView.css";
import Vacation from "../../../../Models/Vacation";
interface editprops{
    vacation:Vacation[]
}
class EditView extends Component {

    public render(): JSX.Element {
        return (
            <div className="EditView">
				
            </div>
        );
    }
}

export default EditView;
