import React, { Component } from 'react';
import classes from './Cell.module.scss';

class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      show: true
    };
  }

  IncrementValue = () => {
    this.setState({ value: this.state.value + 1 });
    console.log('cell clicked');
  }
  // DecreaseItem = () => {
  //   this.setState({ clicks: this.state.clicks - 1 });
  // }
  // ToggleClick = () => {
  //   this.setState({ show: !this.state.show });
  // }

  render() {
    console.log(this.state.value);
    return (
      <div
        className={classes.Cell}
        onClick={this.IncrementValue}>
        col: {this.props.colNr} - val: {this.state.value}
      </div>
    ); 
  }
}

export default Cell;