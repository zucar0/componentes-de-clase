import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    console.log(this.props);
    return <p>Hola, componente de clase</p>;
  }
}

render(<App />, document.getElementById('root'));
