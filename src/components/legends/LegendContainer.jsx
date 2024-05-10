import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { data } from "../../helpers/data";
import LegendCard from "./LegendCard";

const LegendContainer = () => {
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    
    setSearch(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.trim().toLowerCase())
  );
  console.log(filteredData);
  return (
    <div>
      <Form.Control
        type="search"
        placeholder="Search league of legends characters 🔍"
        onChange={handleChange}
        className="w-50 mx-auto my-2 dark:bg-gray-900"
      />
      <Container className="p-3 rounded-4 card-container my-3 dark:bg-gray-900">
        <Row xs={1} md={2} lg={3} className="justify-content-center g-3">
          {filteredData.map((characters) => (
            <LegendCard key={characters.id} characters={characters} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default LegendContainer;
