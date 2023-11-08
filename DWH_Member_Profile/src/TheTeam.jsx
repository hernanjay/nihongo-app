import React from "react";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import Cards from "./Cards";
import Carousels from "./Carousels";
import Members from "../members.json";
import "./TheTeam.css";

const TheTeam = () => {
    let len = 8;
    return (
        <Container className="text-center min-vh-100 p-5" id="theTeam" fluid>
            <Row className="mb-3">
                <h2>THE TEAM</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Platea dictumst vestibulum rhoncus est. Elementum
                    sagittis vitae et leo duis ut. Facilisis gravida neque
                    convallis a cras semper auctor neque vitae. Felis eget nunc
                    lobortis mattis aliquam faucibus purus. Sit amet tellus cras
                    adipiscing enim eu turpis egestas.
                </p>
                <h2>Profile</h2>
                <DropdownButton
                    id="dropdown-basic-button"
                    title="Dropdown button"
                >
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                        Another action
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                        Something else
                    </Dropdown.Item>
                </DropdownButton>
            </Row>
            <div className="media-scroller snaps-inline">
                {/* <Carousels /> */}

                {Members.map((mem) => {
                    return (
                        <div class="media-element">
                            <Cards props={mem} key={mem.id} />
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};

export default TheTeam;
