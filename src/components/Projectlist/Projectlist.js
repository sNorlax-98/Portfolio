import React from "react";
import "../../pages/style.css";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from "react-bootstrap";
import todo_list from "../../Assets/Capture.PNG";
import search_pokemon from "../../Assets/search_pokemon.PNG";

function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todo_list}
                isBlog={false}
                title="todo-list"
                description="App created in react.js and MUI."
                ghLink="https://todo-list-0-01.netlify.app/"
              />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={search_pokemon}
                isBlog={false}
                title="Pokedex App"
                description="App created in react.js and Poki api."
                ghLink="https://todo-list-0-01.netlify.app/"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}
export default Projectlist;
