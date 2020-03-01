

// TODO NEXT
//  >> format cellArray into grid view (create Row component to insert 50 cell components into?)
//  >> format cellArray into grid view (loop trough cellarray in App.js, insert new div every totalRows cells?)
//  >> performance improvement : 1) create table array of rowarrays of cellarrays > state.update only selected row
//  >> performance improvement : 2) make Cell component stateful and manage styling in cell component






// populate rows array with row elements
{ rowid: nr,  }
const m = 50;
const rowArray = [];
for (var j = 0; j < m; j++) rowArray.push({ rowId: j, cellArray });
const rowArray = [{ cellId: i, col: i, val: 0, changed: false }];    
    
    
const cellIndex = this.state.rows[index].cells.findIndex(cell => { //identify clicked cell
      return cell.cellId === cellid;                         // in stead > A skip this step
    });
    console.log(cellIndex);

    // NOT WORKING
    const updatedCell = { ...this.state.rows[index].cells[cellid] }; //extract cell state items
    updatedCell.val = cells[cellid].val + 1;                          // update cell state items
    updatedCell.changed = true;   
    console.log(updatedCell);

    this.setState(prevState => ({
      ...prevState,
      rows: [{
        ...prevState.rows,
        cells: [{
          ...prevState.cells,
          cell: updatedCell
        }]
      }]
    })
    );




// hier moet een nested spread functie tussen... hoe? 
    // slice the array > change value > make new array?
    
    // }) // this doesn't work
    
    const newRow = { ...this.state.rows[index] }; //extract cell state items
    newRow.cells.forEach(cell => { // cells is an array of objects
      cell.val = cell.val + 1;
      cell.changed = true
    });
    newRow.rowId = 'newRowId';
    const updatedRows =  [...this.state.rows] ;       
    updatedRows[index] = newRow;                      
    this.setState({ rows: updatedRows }); 




    // EXAMPLES
    // redux syntax.
   updateVeryNestedField = (state, action) => {
    return {
      ...state,
      first: {
        ...state.first,
        second: {
          ...state.first.second,
          [action.someId]: {
            ...state.first.second[action.someId],
            fourth: action.someValue
          }
        }
      }
    }
   }
  
  // no-redux syntax
  this.state = {
    someProperty: {
       someOtherProperty: [{
           anotherProperty: {
              flag: true
           }
           ...
       }]
       ...
    }
    ...
 }

 this.setState(prevState => ({
  ...prevState,
  someProperty: {
      ...prevState.someProperty,
      someOtherProperty: {
          ...prevState.someProperty.someOtherProperty, 
          anotherProperty: {
             ...prevState.someProperty.someOtherProperty.anotherProperty,
             flag: false
          }
      }
  }
 })
 )


 // something lik this... 
 this.setState(prevState => ({
  ...prevState,
  rows: [
      ...prevState.rows,
      cells: [
          ...prevState.rows.cells, 
          cell.val: {
             ...prevState.someProperty.someOtherProperty.anotherProperty,
             flag: false
          }
      ]
  ]
 })
 )


// OR 
this.setState({ someProperty: { ...this.state.someProperty, otherProp: false } });


// RowCellsIncrement
// bind row = this.state.cells[index].row // row = nr. 
RowCellsIncrement = (row) => {
  const cellArray = [...this.state.cells];
  // const selectedRow = row;
  const rowIndexArray = []
  cellArray.forEach(cell => {
    cellArray.row.findIndex(row);  // make array of cell indexes with the same row value
    rowIndexArray.push(cell.index);
  });
  console.log(rowIndexArray); // expected output: [0 to 49] or [50 to 99] etc.

  const updatedCells = [...this.state.cells];
  for (var i = rowIndexArray[0]; i < rowIndexArray[last]; i++ ) {
    const cell = { ...this.state.cells[i] };       //extract cell state items at i to rowIndexArray[last]
    cell.val = this.state.cells[i].val + 1;        // increment cellvalue
    cell.changed = true;
    // cell.reset = false;
    updatedCells[i] = cell;                
  }
  this.setState({ cells: updatedCells }) 
}

                         
  
 