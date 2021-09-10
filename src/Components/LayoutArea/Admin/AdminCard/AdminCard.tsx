import { Component, useState } from "react";
import "./AdminCard.css";
import jwtAxios from "../../../../Services/JwtAxios";
import Vacation from "../../../../Models/Vacation";
import { Card, Button } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";


interface CardViewState {
    vacations: Vacation[]
    editcomponent:any
}
class AdminCard extends Component<{}, CardViewState> {
    constructor(props: {}) {
        super(props)
        this.state = { vacations: [],editcomponent:"" }
    }
    public componentDidMount = async () => {
        const response = await jwtAxios.get<Vacation[]>("http://localhost:4000/admin/vacations");
        this.setState({ vacations: response.data })

    }
    public componentWillUnmount = async () => {
        const response = await jwtAxios.get<Vacation[]>("http://localhost:4000/admin/vacations");
        this.setState({ vacations: response.data })

    }
    

    public render(): JSX.Element {
        return (
            <div className="AdminCard">
                {this.state.vacations.map(vacation => <Card key={vacation.id} style={{ width: '18rem' }}>
                    <Card.Body className="Card">
                        <Button className="editbutton" key={vacation.id} >✏️</Button>
                        <Button className="deletebutton" key={vacation.id}>❌</Button>
                        <Card.Title>
                            {vacation.description}-{vacation.destination}
                        </Card.Title>
                        <Card.Title>
                            {vacation.price}$
                        </Card.Title>
                        <Card.Text>
                            <Card.Img variant="top" src={vacation.image} />
                            <div>{vacation.date}</div>
                            <div>{vacation.followers}</div>
                        </Card.Text>
                    </Card.Body>
                </Card>)}
                <div></div>
            </div>
        );
    }
   
}

export default AdminCard;
