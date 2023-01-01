import React, {useState, useEffect} from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";// import Header from "./Header";
import NavBar from "./NavBar"
import { Icon } from 'semantic-ui-react'
import Snakegame from "./Snakegame"
import Breakout from "./Breakout"
import Home from "./Home"
// import Hiscores from "./Hiscores"
// import './Styles.css'
// import Login from "./Login"
import 'semantic-ui-css/semantic.min.css'
// import PlantPage from "./PlantPage";

function App() {

  const [games, setGames] = useState([])
  const [scores, setScores] = useState([])

  useEffect (() => {
    fetch ("http://localhost:6001/games")
    .then (resp => resp.json())
    .then (setGames)
  }, [])

  const addNewGame = (myGame) => {
    setGames([...games, myGame])
  }

  const addNewScore = (myScore) => {
    setScores([...scores,myScore])
  }


return (
  <BrowserRouter> 
    <div> 
      <h3> Games </h3>
      <NavBar  /> 
    </div>
    <div> 
      <Switch> 
        <Route path = "/snakegame">
          <Snakegame games = {games} addNewGame = {addNewGame} scores = {scores} addNewScore = {addNewScore} />
        </Route>
        <Route path = "/snakegame">
          <Snakegame games = {games} addNewGame = {addNewGame} scores = {scores} addNewScore = {addNewScore} />
        </Route>
        <Route path = "/"> 
          <Home games = {games} />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
)
}

export default App;
