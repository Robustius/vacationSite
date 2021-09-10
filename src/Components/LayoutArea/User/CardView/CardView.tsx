import jwtAxios from "../../../../Services/JwtAxios";
import { Component } from "react";
import Vacation from "../../../../Models/Vacation";
import "./CardView.css";
import { Card, Button } from "react-bootstrap";
import CardHeader from "react-bootstrap/esm/CardHeader";
interface CardViewState {
    vacations: Vacation[]
}
class CardView extends Component<{}, CardViewState> {
    constructor(props: {}) {
        super(props);
        this.state = { vacations: [] }
    }
    public componentDidMount = async () => {
        const response = await jwtAxios.get<Vacation[]>("http://localhost:4000/medium/vacations");
        this.setState({ vacations: response.data })

    }
    public componentWillUnmount = async () => {
        const response = await jwtAxios.get<Vacation[]>("http://localhost:4000/medium/vacations");
        this.setState({ vacations: response.data })

    }

    public render(): JSX.Element {
        return (
            <div className="CardView">
                {this.state.vacations.map(vacation => <Card key={vacation.id} style={{ width: '18rem' }}>
                    <Card.Body className="Card">
                        <Button className="fbutton">f</Button>
                        <Card.Title>
                            {vacation.description}-{vacation.destination}
                        </Card.Title>
                        <Card.Title>
                            {vacation.image}
                            {vacation.price}$
                        </Card.Title>
                        <Card.Text>
                            <img src={'http://localhost:4000/medium/upload/'+vacation.image} alt="vacation picture" />  
                            <Card.Img variant="top" src={`/medium/upload/${vacation.image}`}/>
                            <div>{vacation.date}</div>
                            <div>{vacation.followers}</div>
                        </Card.Text>
                    </Card.Body>
                </Card>)}
            </div>
        );
    }
    
    }




export default CardView;
