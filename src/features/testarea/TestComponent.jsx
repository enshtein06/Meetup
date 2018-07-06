import React, { Component } from 'react'
import {connect} from 'react-redux';
import {incrementCounter, decrementCounter} from './testActions';
import { Button } from 'semantic-ui-react';

class TestComponent extends Component {
  render() {
    const {incrementCounter, decrementCounter, data} = this.props
    return (
      <div>
        <h1>Test areaa</h1>
        <h3>The answer is {data}</h3>
        <Button onClick={incrementCounter} color="green" content="Increment" />
        <Button onClick={decrementCounter} color="red" content="Decrement" />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    data: state.test.data
});

const mapStateToActions = {
  incrementCounter,
  decrementCounter
}

export default connect(mapStateToProps, mapStateToActions)(TestComponent);