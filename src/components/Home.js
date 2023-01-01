import React from "react";
import styled from 'styled-components';
import './Styles.css';
import { Button, Container, Divider, Grid, Header, Image, Menu, Segment } from "semantic-ui-react";
import { Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

function Home({games}) {

    const allGames = games.map (game => {
      return game
    })
  
    console.log("allGames", allGames)
  
    const selectedArrays = games.sort(() => Math.random() - 0.5).slice(0,5);
  
    return (
  
      <Grid textAlign = 'center'  verticalAlign = 'middle'>
        <Header as='h2' color = 'teal'  textAlign = 'center'><br /> Home </Header>
        <Grid columns = 'equal'>
          <Grid.Row columns = 'equal'>
            <Grid.Column>
              <div className = "center">
              <div class = "ui card">
                <div class = "image">
                    <img src = "https://www.educative.io/v2api/editorpage/6684016653631488/image/5929780181467136" />                
                </div>
                <div class = "content"> 
                    <a class = "header"> Snake Game </a>
                </div>
                <div class = "description" textAlign = "center"> Top Snakegame Reviews</div>
                <div class = "ui list">
                    {selectedArrays.map((game) => {
                        if (game.gamename === "snakegame") {
                            return <div class = "item" key = {game.id}>{game.gamereview} </div>
                        }
                    })}
                </div>

              </div>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div className = "center">
              <div class = "ui card">
                <div class = "image">
                    <img src = "https://www.educative.io/v2api/editorpage/6684016653631488/image/5929780181467136" />                
                </div>
                <div class = "content"> 
                    <a class = "header"> Breakout Game </a>
                </div>
                <div class = "description" textAlign = "center"> Top Breakout Reviews</div>
                <div class = "ui list">
                    {selectedArrays.map((game) => {
                        if (game.gamename === "Breakout") {
                            return <div class = "item" key = {game.id}>{game.gamereview} </div>
                        }
                    })}
                </div>

              </div>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Grid>
    )
  }
  
  export default Home;
  