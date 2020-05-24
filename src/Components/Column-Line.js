/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class ColumnLine extends Component {
 constructor(props) {
        super(props);
        this.state = {size: 12};
      }
  render() {
       
    return (    
      <div className="body">
      <h1>
      Column + Line 
      </h1>
      <Plot className="plot"
        data={[
        {
          x: [1, 2, 3, 4, 5, 6],
          y: [2.8, 3.3, 4.7, 1.7, 2.5, 0.7],
          type: 'lines+scatter',
          line: {
              width:4
          },
          marker:{
              size:{this.state.size}
          }
        },

         {
          x: [1, 2, 3, 4, 5, 6],
          y: [6, 5.2, 4.3, 3.9, 3.3, 1.4],
          type: "bar"
        }]}
        layout={ {width: 750, height: 520} }
      />
     <table id="data" >
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Column + line timeline </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> A good way of showing the relationship over time between an amount (columns) and a rate (line) </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Lines + Markers and Bar </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Trace 1 (Lines+Markers)</th>
            <td> 
            <tr> 
            x: [1, 2, 3, 4, 5, 6]                         
            </tr> 
             <tr>  y: [2.8, 3.3, 4.7, 1.7, 2.5, 0.7]
              </tr>
             </td>
          </tr>
          <tr>
            <th> Trace 2 (Bar)</th>
            <td> 
            <tr>   x: [1, 2, 3, 4, 5, 6]                    
              </tr> 
             <tr>   y: [6, 5.2, 4.3, 3.9, 3.3, 1.4]
              </tr>
             </td>
          </tr>
          <tr>
            <th> Line width </th>
            <td> 4 </td>
          </tr>
          <tr>
            <th> Marker size </th>
            <td> 10 </td>
          </tr>        
          </tbody>
      </table> 
      </div>
    );
  }
}
export default ColumnLine;
