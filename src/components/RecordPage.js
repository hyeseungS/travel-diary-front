import React from 'react';
import Buttons from "./Buttons.js";
import { Button, Grid } from "semantic-ui-react";

function App() {
  return (
    <div style={{backgroundColor:"grey"}}>
      <h1 style={{ color: "black", textAlign: "center", paddingTop: "15px" }}>
          여행 기록하기
      </h1>
      <Grid centered>
        <Grid.Row>
          <h2 style={{ color: "black", textAlign: "left", paddingTop: "5px" }}>
            제목
          </h2>
          <Container text>
            <Header as='h2'>제목</Header>
            <p>text</p>
            <Button>button</Button>
          </Container>
        </Grid.Row>
        <Grid.Row>
          <h2 style={{ color: "black", textAlign: "left", paddingTop: "5px" }}>
            날짜
          </h2>
        </Grid.Row>
        <Grid.Row>
          <h2 style={{ color: "black", textAlign: "left", paddingTop: "5px" }}>
            내용
          </h2>
        </Grid.Row>
        <Grid.Row>
          <h2 style={{ color: "black", textAlign: "left", paddingTop: "5px" }}>
            첨부 사진
          </h2>
        </Grid.Row>
        <Grid.Row>
          <Buttons />
        </Grid.Row>
        <Grid.Row>
          <div class="ui menu">
            <div class="item">
              <div class="ui primary button">menu1</div>
            </div>
            <div class="item">
              <div class="ui button">menu2</div>
            </div>
            <div class="item">
              <div class="ui button">menu3</div>
            </div>
            <div class="item">
              <div class="ui button">menu4</div>
            </div>
          </div>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default App;