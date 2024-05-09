import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
const LegendCard = ({ characters }) => {
  const [show, setShow] = useState(false);
  return (
    <Col>
      <Card
        className="player-card"
        role="button"
        onClick={() => setShow(!show)}
      >
        {!show ? (
          <Card.Img
            variant="top"
            src={characters.img}
            title={characters.name}
            alt={characters.name}
          />
        ) : (
          <>
            <Card.Header>
              <Card.Title className="h2">
                {" "}
                <span className="name">{characters.name}</span>
              </Card.Title>
              <span className="h4" style={{ color: "red" }}>
                {characters.role}
              </span>
            </Card.Header>
            <ul className="m-auto card">
              {characters.statistics.map((item) => (
                <li className="list-unstyled h5 text-start">
                  {" "}
                  📈 {item}
                  <br></br>
                </li>
              ))}
            </ul>
          </>
        )}
      </Card>
    </Col>
  );
};

export default LegendCard;
