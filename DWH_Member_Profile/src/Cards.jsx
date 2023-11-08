import React from "react";
import { Button, Card } from "react-bootstrap";

const Cards = ({ props }) => {
    return (
        <Card style={{ width: "18rem", height: "27rem" }}>
            <Card.Img
                variant="top"
                src={"https://robohash.org/" + props.name}
                style={{
                    height: "8rem",
                    width: "12rem",
                    margin: "auto",
                }}
            />
            <Card.Body>
                <Card.Title className="fw-bold">{props.name}</Card.Title>
                <Card.Subtitle className="mb-3">{props.position}</Card.Subtitle>
                <Card.Text className="p-10">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default Cards;
