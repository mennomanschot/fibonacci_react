(this.webpackJsonpfibonacci=this.webpackJsonpfibonacci||[]).push([[0],[,function(e,l,t){e.exports={cell:"Cell_cell__2Y63x",changed:"Cell_changed__2cCb7",reset:"Cell_reset__PZxY8",incremented:"Cell_incremented__3Xipy"}},,,,,,,,,,function(e,l,t){e.exports=t.p+"static/media/favicon.c28024f7.ico"},function(e,l,t){e.exports=t(19)},,,,,function(e,l,t){},function(e,l,t){},function(e,l,t){"use strict";t.r(l);for(var a=t(0),c=t.n(a),n=t(10),s=t.n(n),r=t(8),o=t(2),i=t(3),h=t(4),u=t(6),d=t(5),p=t(7),f=function(e){return e.children},v=t(11),m=t.n(v),b=(t(17),t(1)),g=t.n(b),C=function(e){function l(){return Object(i.a)(this,l),Object(u.a)(this,Object(d.a)(l).apply(this,arguments))}return Object(p.a)(l,e),Object(h.a)(l,[{key:"render",value:function(){return this.props.changed?this.cellClass.push(g.a.changed):this.props.reset?(this.cellClass=[g.a.cell],this.cellClass.push(g.a.reset)):this.props.value>0?this.cellClass.push(g.a.incremented):this.cellClass=[g.a.cell],this.assignedClasses=this.cellClass.join(" "),c.a.createElement("div",{id:this.props.cellId,className:this.assignedClasses,onClick:this.props.clicked.bind(this)},c.a.createElement("p",null,this.props.value))}}]),l}(a.Component),j=[],E=0;E<2500;E++)j.push({cellId:E,row:Math.floor(E/50),col:E-50*Math.floor(E/50),val:0,changed:!1,reset:!1});var O=function(e){function l(e){var t;return Object(i.a)(this,l),(t=Object(u.a)(this,Object(d.a)(l).call(this,e))).RowCellsIncrement=function(e){var l=Object(o.a)(t.state.cells),a=t.state.cells[e].row,c=[];l.forEach((function(e,l){e.row===a&&c.push(l)}));for(var n=c.length-1,s=c[0];s<=c[n];s++){var i=Object(r.a)({},t.state.cells[s]);i.val=t.state.cells[s].val+1,i.changed=!0,l[s]=i}t.setState({cells:l}),console.log("here are the row cell ids"),console.log(c)},t.ColCellsIncrement=function(e){var l=Object(o.a)(t.state.cells),a=t.state.cells[e].col,c=e,n=[];l.forEach((function(e,l){e.cellId!==c&&e.col===a&&n.push(l)}));for(var s=0;s<n.length;s++){var i=n[s],h=Object(r.a)({},t.state.cells[i]);h.val=t.state.cells[i].val+1,h.changed=!0,l[i]=h}t.setState({cells:l}),console.log("and here are the col cell ids"),console.log(n)},t.resetCells=function(e){for(var l=Object(o.a)(t.state.cells),a=e;a<e+5;a++){var c=Object(r.a)({},t.state.cells[a]);c.val=0,c.changed=!1,c.reset=!0,l[a]=c}t.setState({cells:l})},t.checkFibHandler=function(){for(var e=t.state.cells,l=0;l<e.length-4;l++){var a=e[l].val,c=e[l+1].val,n=e[l+2].val,s=e[l+3].val,r=e[l+4].val;a+c===n&&0!==c&&c+n===s&&n+s===r&&(console.log("fib 5! reset these cells!"),t.resetCells(l))}},t.state={cells:j},t}return Object(p.a)(l,e),Object(h.a)(l,[{key:"componentDidUpdate",value:function(){console.log("[app.js] updated "+Math.random()),this.checkFibHandler()}},{key:"clickCellHandler",value:function(e){var l=this;this.RowCellsIncrement(e),setTimeout((function(){l.ColCellsIncrement(e)}),0),setTimeout((function(){l.StylingHandler()}),2e3)}},{key:"StylingHandler",value:function(){for(var e=Object(o.a)(this.state.cells),l=0;l<e.length;l++)e[l].changed=!1,e[l].reset=!1;this.setState({cells:e}),console.log("stylingHandler has run")}},{key:"render",value:function(){var e,l=this;return e=this.state.cells.map((function(e,t){return c.a.createElement(C,{key:e.cellId,id:e.cellId,value:e.val,changed:e.changed,reset:e.reset,clicked:l.clickCellHandler.bind(l,t)})})),c.a.createElement(f,null,c.a.createElement("div",{className:"App-header"},c.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),c.a.createElement("h2",null,"A fibonacci finder")),c.a.createElement("div",{className:"App-content"},c.a.createElement("div",null,"rumber of rows: ",50),c.a.createElement("div",null,"rumber of columns: ",50),c.a.createElement("div",null,"rumber of cells: ",2500),c.a.createElement("div",{className:"App-table-container"},c.a.createElement("div",{className:"App-table"},e))))}}]),l}(a.Component);t(18);s.a.render(c.a.createElement(O,null),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.87d341bd.chunk.js.map