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
              <Card.Title>{legend.name}</Card.Title>
            </Card.Header>
            <ul className="m-auto">
              {legend.statistics.map((item) => (
                <li className="list-unstyled h5 text-start">
                  {" "}
                  🎮 {item}<br></br>
                  
                </li>
              ))}
            </ul>
            <span>{legend.official_career}</span>
          </>
        )}
      </Card>
    </Col>
}

export default LegendCard

