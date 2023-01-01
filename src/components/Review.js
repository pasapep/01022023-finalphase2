import React, {useEffect, useState} from "react";
import { Container,  Field, Segment, Grid } from "semantic-ui-react";
import {Col, Form, Button, InputGroup, Row} from "react-bootstrap"
import './Styles.css';

function Review ({game, addNewGame}) {

    const [gameName, setGameName] = useState("")
    const [gameReview, setGameReview] = useState("")
    const [gameLike, setGameLike] = useState(false)
    const [gameType, setGameType] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault() ;

        const newGames = {
            gamename : gameName,
            gamereview : gameReview,
            gamelike : gameLike,
            gametype : gameType,
        }

        fetch ("http://localhost:6001/games", {
            method: "POST",
            headers : {
                "Content-Type" : "application/JSON",
            }, 
            body: JSON.stringify(newGames)
        })
            .then (resp => resp.json())
            .then (myGame => addNewGame(myGame) )
    }



    return (
        <div> 
        <Grid centered>
        <Container fluid>
        <Form onSubmit = {handleSubmit} >
        <InputGroup >
            <Form.Check 
             type="switch"
             id="custom-switch"
             label="Check if you like the game"
             value = {gameLike}
             onChange = {(e) => setGameLike(e.target.checked)}
            /><br />
            {/* <Form.Control aria-label = "Checkbox" /> */}
        </InputGroup>
        <Form.Group>
            <Form.Label> Select Game </Form.Label>
            <Form.Control
            as="select"
            value={gameName}
            onChange={(e) => setGameName(e.target.value)}
            className="w-50"
            >
            <option value = ""> Select Game </option>
            <option value ="snakegame"> Snakegame</option>
            <option value ="breakout"> Breakout</option>
            </Form.Control> <br />
        </Form.Group>
        <Form.Group> 
            <Form.Label> Add Review </Form.Label>
            <Form.Control 
            type = "text"
            placeholder = "Add a Game Review" 
            value = {gameReview}
            onChange = {(e) => setGameReview(e.target.value)}
            className="w-50"
            /> <br />
        </Form.Group>
            <Button variant = "primary" type = "submit"> 
            submit
            </Button>
        </Form>
        </Container>
        </Grid>
    </div>
 
    )
}

export default Review
