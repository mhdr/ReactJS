import React, { Component } from 'react';
import {Header} from "./components/Header"
import {Content} from "./components/Content"


export default class App extends Component {
  render() {
    return (
      <div>
        <Header isBold={true} />
        <Content size={"large"}>
          Hello <i>World</i>
        </Content>
      </div>
    );
  }
}
