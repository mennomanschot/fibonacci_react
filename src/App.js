import React, { Component } from 'react';

import Aux from './hocs/Aux/Aux';
import logo from './favicon.ico';
import './App.css';
import Cell from './components/Cell/Cell';


// design the size of grid table
const totalRows = 50
const totalCols = totalRows;
const n = totalCols * totalRows;
const cellArray = [];


// populate cells array with cell elements
// format: { cellid: nr, row: nr, col: nr, val: nr, changed: bl, reset: bl }
for (var i = 0; i < n; i++) cellArray.push(
  {
    cellId: i,
    row: Math.floor(i/totalRows), 
    col:  i - Math.floor(i/totalRows)*totalCols,
    val: 0,
    changed: false,
    reset: false,
  });
 
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cells: cellArray,
    }
  }


  componentDidUpdate() {
    console.log('[app.js] updated ' + Math.random())
    this.checkFibHandler();
  }



  clickCellHandler(index) {
    this.RowCellsIncrement(index);
    setTimeout(() => { this.ColCellsIncrement(index) }, 0);  
    setTimeout(() => {this.StylingHandler()}, 2000);  // after 2 sec reset styling
    
  }


  StylingHandler() {                                  // reset styling state elements for all cells.
    const updatedCells = [...this.state.cells]; 
    
    for (var i = 0; i < updatedCells.length; i++) {   
      updatedCells[i].changed = false;   
      updatedCells[i].reset = false;
    }
    this.setState({ cells: updatedCells });
    console.log('stylingHandler has run');
  }


// to increment all cells in same row
RowCellsIncrement = (index) => {
  const cellArray = [...this.state.cells];
  const row = this.state.cells[index].row;        // = selected rownr.
  let rowIndexArray = [];

  const findRowIndex = (cell, index) => {
    if (cell.row === row) {
      rowIndexArray.push(index)
    }; 
  };

  cellArray.forEach(findRowIndex);              // create array of indexes of cells with the same rownr.

  const arrLength = rowIndexArray.length - 1;   // forloop length

  for (var i = rowIndexArray[0]; i <= rowIndexArray[arrLength]; i++) {
    const cell = { ...this.state.cells[i] };     //extract cell state items at i to rowIndexArray[last]
    cell.val = this.state.cells[i].val + 1;      // update cell elements
    cell.changed = true;
    cellArray[i] = cell;                
  }

  this.setState({ cells: cellArray }) 
  console.log('here are the row cell ids');
  console.log(rowIndexArray);                     // expected output: [0 to 49] or [50 to 99] etc.
}

  
  

// to increment all cells in same col
ColCellsIncrement = (index) => {
  const cellArray = [...this.state.cells];
  const col = this.state.cells[index].col;        // = selected colnr..
  const clickedCell = index;                      // = selected cellId.
  let colIndexArray = [];

  const findColIndexes = (cell, index) => {
    if (cell.cellId !== clickedCell) {            // exclude clicked cell to avoid double (row & col) increment
      if (cell.col === col) {
        colIndexArray.push(index)
      }; 
    };
  };

  cellArray.forEach(findColIndexes);              // create array of indexes of cells with the same colnr.

  for (var i = 0; i < colIndexArray.length; i++) {
    let col = colIndexArray[i];
    const cell = { ...this.state.cells[col] };     //extract cell state items at i to rowIndexArray[last]
    cell.val = this.state.cells[col].val + 1;      // update cell elements
    cell.changed = true;
    cellArray[col] = cell;                
  }
  this.setState({ cells: cellArray });
  console.log('and here are the col cell ids');
  console.log(colIndexArray);                      // expected output: [0 9 19...] or [51 61 71...] etc.
}

  
  /// do a fibonacci check in the rows ///
  // step 1 : create a forloop through cells array
  // step 2 : create vars of cell.val from cell i to i+5 
  // step 3 : compare sum of var 1 and var 2 to var 3 -- if TRUE >> else next forloop
  // step 4 : compare sum of var 2 and var 3 to var 4 -- if TRUE >> else next forloop
  // step 5 : compare sum of var 3 and var 4 to var 5 -- if TRUE >> else next forloop
  // step 6 : reset cells.val of cell i tp i+5 to 0

    
  // to reset value of 5 consecutive cells starting at j
  resetCells = (j) => {
    const updatedCells = [...this.state.cells];
    for (var i = j; i < j + 5; i++) {
      const cell = { ...this.state.cells[i] };       //extract cell state items at i to i+4
      cell.val = 0;                                 // update indexed cell state items
      cell.changed = false;
      cell.reset = true;
      updatedCells[i] = cell;                
    }
    this.setState({ cells: updatedCells }) 
  }

  // to check for fibonacci(5) series in the state.cells array.
  checkFibHandler = () => {
    const cellArray = this.state.cells;
    for (var i = 0; i < cellArray.length-4; i++) {
      const fib1 = cellArray[i].val;                   // select 5 consecutive values out of cellArray
      const fib2 = cellArray[i + 1].val;
      const fib3 = cellArray[i + 2].val;
      const fib4 = cellArray[i + 3].val;
      const fib5 = cellArray[i + 4].val;
      
      if ((fib1 + fib2) === fib3 && fib2 !== 0) {      // 1st fibonacci check: true > do 2nd check | false: go to next cell in forloop.
        if (fib2 + fib3 === fib4) {
          if (fib3 + fib4 === fib5) {
            console.log('fib 5! reset these cells!');
            this.resetCells(i)                          // if fibonacci 5 series is true > do resetCells() starting at cell i 
          }
        }
      }
    }
  }




  render() {
    let table = null;
    table = this.state.cells.map((cell, index) => {
      return (
        <Cell
          key={cell.cellId}
          id={cell.cellId}
          value={cell.val}
          changed={cell.changed}
          reset={cell.reset}
          clicked={this.clickCellHandler.bind(this, index)}
          />
        )
      }
    )

    return (
      <Aux>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>A fibonacci finder</h2>
        </div>

        <div className="App-content">
          <div>rumber of rows: {totalRows}</div>
          <div>rumber of columns: {totalCols}</div>
          <div>rumber of cells: {n}</div>
          {/* <button
          onClick={() => this.StylingHandler(this)} >reset styling</button> */}
          <div className="App-table">
            {table}
          </div>
        </div>        
     </Aux>
    );
  }
}

export default App;