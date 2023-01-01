import React, {useEffect, useState} from "react";
// import Review from "./Review"
// import Enterscores from "./Enterscores"
import { Button, Form, Grid, Header, Image, Message, Segment, Icon, Container, Divider } from 'semantic-ui-react'
import Review from "./Review"
import Enterscores from "./Enterscores"

function Breakout ({games, addNewGame, score, addNewScore}) {

    let sgamelike = 0;
    const snakegamelike = games.map(game => {
        if (game.gamename === "snakegame" && game.gamelike === true) {
            sgamelike ++;
        }
    })

    return (
        <div> 
            <div class = "ui grid centered">
                <h1 class = "ui header" ><br /> Breakout</h1>
                <div class = "row"> 
                    {/* Add Game */}
                    <Divider horizontal> Enter Score </Divider>
                    <Enterscores score = {score} addNewScore = {addNewScore} />

                    <Divider horizontal> Breakout Game Likes </Divider>
                    <div class = "ui statistic"> 
                        <div class = "label"> 
                        <Header.Content as = "h3">
                        <div class = "value"><Icon name='thumbs up outline' /> {sgamelike} </div>
                        </Header.Content>
                        </div>
                    </div>
                    <Review games = {games} addNewGame = {addNewGame} />
                </div>
            </div>
        </div>
    )
}

export default Breakout
