import { promises } from "fs";
import { Component } from "react";
import Vacation from "../../../../Models/Vacation";
import jwtAxios from "../../../../Services/JwtAxios";
import "./AddView.css";
interface addtool {
    vacation: Vacation[]
    errors: any
}
class AddView extends Component<{}, addtool> {
    constructor(props: {}) {
        super(props);
        this.state = { errors: {}, vacation: [] }
    }

    public render(): JSX.Element {
        return (
            <div className="AddView">
                <h2>Add Vacation</h2>

                <p>
                    Description:<br />
                    <input placeholder="Description" ref="description" />
                </p>
                <p>
                    Destination: <br />
                    <input placeholder="Destination" ref="destination" />
                </p>
                <p>

                    image: <span>Image name<input type="text" ref="imageName" /></span><br />
                    <input type="file" ref="image" />
                </p>
                <p>

                    <span>start Date <input type='date' placeholder="start date" ref="date" />End Date</span><span><input type='date' placeholder="end date" ref="endDate" /></span>
                </p>
                <p>
                    Price: <br />
                    <input placeholder="Price" ref="price" />
                </p>
                <p>
                    <button onClick={this.addVacation}>Add</button>
                </p>

            </div>
        );
    }
    public addVacation = async () => {
        const newVacation = new Vacation(
            null,
            String((this.refs.description as HTMLInputElement).value),
            String((this.refs.destination as HTMLInputElement).value),
            (this.refs.image as HTMLInputElement).files,
            String((this.refs.imageName as HTMLInputElement).value),
            String((this.refs.date as HTMLInputElement).value),
            String((this.refs.endDate as HTMLInputElement).value),
            String((this.refs.price as HTMLInputElement).value),
            null
        )

        try {

            console.log(newVacation.imageName);
            const vacation = new FormData();
            vacation.append("description", newVacation.description);
            vacation.append("destination", newVacation.destination);
            vacation.append("image", newVacation.image[0]);
            vacation.append("imageName", newVacation.imageName);
            vacation.append("date", newVacation.date);
            vacation.append("endDate", newVacation.endDate);
            vacation.append("price", newVacation.price);
            const response = await jwtAxios.post('http://localhost:4000/admin/addvacation',vacation)
            console.log(response.data);
            
            // const imageResponse = await jwtAxios.post('http://localhost:4000/admin/addvacations', imageData)
            // const response = await jwtAxios.post('http://localhost:4000/admin/addvacations', {
            //     reqImageData: imageData,
            //     reqNewVacation: newVacation
            // }, {
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'multipart/form-data'
            //     }
            // });



        } catch (error) {
            console.log(error);

        }
    }
    // public async addimage(newVacation) {
    //     try {
    //         const newImage = new FormData();
    //         newImage.append("name", newVacation.imageName);
    //         newImage.append("image", newVacation.image[0]);
    //         const response = await jwtAxios.post('http://localhost:4000/admin/addimage', newImage)
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
}

export default AddView;
