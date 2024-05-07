import {useState} from "react"
import { Col, Container, Row } from "react-bootstrap"; 
import Card from "react-bootstrap/Card";
const LegendCard = ({legend}) => {
    const [show,setShow] = useState(false);
    return   <Col>
      <Card className="player-card" role="button" onClick={() => setShow(!show)}>
        {!show ? (
          <Card.Img
            variant="top"
            src={legend.img}
            title={legend.name}
            alt={legend.name}
          />
        ) : (
          <>
            <Card.Header>
              <Card.Title className="h4">{legend.name}</Card.Title>
              <span className="h4" style={{color : 'red'}}>{legend.role}</span>
            </Card.Header>
            <ul className="m-auto">
              {legend.statistics.map((item) => (
                <li className="list-unstyled h5 text-start">
                  {" "}
                  🎮 {item}<br></br>
                  
                </li>
              ))}
            </ul>
           
          </>
        )}
      </Card>
    </Col>
}

export default LegendCard

