import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class App extends Component {
  static defaultProps = {
    name: 'Toño',
  };

  static propTypes = {
    name: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  componentDidMount() {
    console.log('Fuí creado');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(prevState, this.state);
    if (prevState.contador !== this.state.contador)
      this.setState({
        updatedAt: new Date(),
      });
    console.log('Fui actualizado');
  }

  componentWillUnmount() {}

  getSnapshotBeforeUpdate() {
    console.log('Antes del DOM');
  }

  updateCounter = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    console.log(this.props);
    return (
      <>
        <p>Hola, componente de clase</p>
        <p>
          <span>Contador: {this.state.contador}</span>
        </p>
        <button onClick={this.updateCounter}>Sumar</button>
      </>
    );
  }
}

render(<App name={3} />, document.getElementById('root'));
