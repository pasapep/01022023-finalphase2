import React, {useEffect, useState} from "react";
import { Form, Button, InputGroup } from "react-bootstrap";

//Need to complete this section, db json not working properly

function Enterscores({addNewScore, score}) {

    const [scoreName, setScoreName] = useState("");
    const [playerName, setPlayerName] = useState("");
    const [scorePoints, setScorePoints] = useState(0)

    const handleGame = (e) => {
        e.preventDefault();

        const newScores = {
            scoreName : scoreName,
            playerName : playerName,
            scorePoints : scorePoints
        }

        fetch ("http://localhost:6001/newscores", {
            method: "POST",
            headers : {
                "Content-Type" : "application/JSON",
            },
            body : JSON.stringify(newScores)
        })
            .then (resp => resp.json())
            .then (myScore =>addNewScore(myScore) )
    }

    return (
        <div> 
            <h2> Enter Your Game Score <br /> <br /> <br /></h2>
            <div>
        <Form onSubmit = {handleGame} className = "w-50">
       
        <Form.Group>
           <Form.Label> Select Game </Form.Label>
           <Form.Control
           as="select"
           value={scoreName}
           onChange={(e) => setScoreName(e.target.value)}
           >
           <option value = ""> Select Game </option>
           <option value ="snakegame"> Snakegame</option>
           <option value ="breakout"> Breakout</option>
           </Form.Control> <br />
       </Form.Group>
       <Form.Group> 
           <Form.Label> Enter Score </Form.Label>
           <Form.Control 
           type = "value"
           placeholder = "Add a Game Review" 
           value = {scorePoints}
           onChange = {(e) => setScorePoints(e.target.value)}
           /> <br />
            </Form.Group>
           <Button variant = "primary" type = "submit"> 
           submit
           </Button>
            </Form>
            </div>
        </div>

    )
}

export default Enterscores;