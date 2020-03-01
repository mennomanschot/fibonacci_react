import React, { Component  } from 'react';
import classes from './Cell.module.scss';


class Cell extends Component {
   
  render() {   
    if (this.props.changed) {
      this.cellClass.push(classes.changed);
      this.styleUpdated = true;
    } 
    else if (this.props.reset) {
      this.cellClass.push(classes.reset);
      this.styleUpdated = true;
    } else 
      this.cellClass = [classes.cell]
    
    this.assignedClasses = this.cellClass.join(' ');

    return (
      <div
        id={this.props.cellId}
        className={this.assignedClasses}
        onClick={this.props.clicked.bind(this)}
      >
        <p>{this.props.value}</p>
      </div>
    )
  }
}

export default Cell; 