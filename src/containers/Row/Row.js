import React, { Component } from 'react';

import Aux from '../../hocs/Aux/Aux';
import Cell from '../../components/Cell/Cell';
import classes from './Row.module.scss';


class Row extends Component {


  // 1. create tableArray of 50 rowArrays of 50 cells in State here.
  // >> row [] = [{cellId: index, row: row + 1, col: index, value: 0}]
  // >> const tableArray = [ [], [], [], [] ]
  // 2. insert array in this.setState({ table: tableArray })
  // 3. update state elements when cell is clicked
  // >> state.row[].cellId[].val EN if state.row[].cellId[].col = X val + 1
    
  // OR: state.cell[].val >> slice (indexOf, 50) >> rowArray 
  


  componentDidUpdate() {
    // console.log('[Row.js] of row '+ this.props.id + ' componentDidUpdate has run');
  }

  clickEventHandler = (index) => {
    const cellid = index
    const cellid2 = 'hi'
    this.props.clicked(cellid, cellid2);
  }


  incrementCellValueHandler = (index) => {
    const cellIndex = this.state.cells.findIndex(cell => { //identify clicked cell
      return cell.cellId === index;                         // in stead > A skip this step
    });
    
    const cell = { ...this.state.cells[cellIndex] }; //extract cell state items
    cell.val = cell.val + 1;                          // update cell state items
    cell.changed = true;                               // > B update state items for each cell. foreach loop.
    
    const updatedCells = [...this.state.cells];       // mutate state copy with updated state items > C idem
    updatedCells[cellIndex] = cell;  

    this.setState({ cells: updatedCells });           // set new state > D idem.

    setTimeout(() => {                                // after 1 sec change cell.changed back to false and update.
      const updatedCells = [...this.state.cells]; 
      updatedCells[cellIndex].changed = false;   
      this.setState({ cells: updatedCells }); 
    }, 1000);
  }

  incrementRowCellValueHandler = () => {    
    const rowCells = [...this.state.cells];       //extract cell state items
    const increaseVal = (cell) => {
      cell.val = cell.val + 1;                         
      cell.changed = true;    
    };
    rowCells.forEach(increaseVal);                  // update cell state items

    let updatedCells = [...this.state.cells];     // mutate state copy with updated state items
    updatedCells = rowCells;  

    this.setState({ cells: updatedCells });           // set new state > D idem.

    setTimeout(() => {                                
      const updatedCells = [...this.state.cells]; 
      const toFalse = (cell) => {             // after 1 sec change cell.changed back to false
        cell.changed = false;    
      }
      updatedCells.forEach(toFalse);
      
      this.setState({ cells: updatedCells });        
    }, 1000);
  }




  render() {
    let row = null;
    row = this.props.cells.map((cell, index) => {
      return <Cell
        key={cell.cellId}
        cellId={cell.cellId}
        value={cell.val}
        clicked={this.clickEventHandler.bind(this, index)}
        // clicked={this.incrementCellValueHandler.bind(this, index)}
        // clicked={this.incrementRowCellValueHandler}
        changed={cell.changed} />
      
      }
    )

    return (
      <Aux>
        <div
          id={this.props.id}
          className={classes.row}>
          {row}
        </div>
      </Aux>
    )
  }
}

export default Row;