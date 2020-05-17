/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Sankey extends Component {
  render() {
    return (
      <div className="body">
      <h1>
      Sankey
      </h1>
      <Plot className="plot"
        data={[
            {
              type: "sankey",
              orientation: "h",
              node: {
                pad: 15,
                thickness: 30,
                line: {
                  color: "black",
                  width: 0.5
                },
               label: ["A1", "A2", "B1", "B2", "C1", "C2"],
               color: ["blue", "blue", "blue", "blue", "blue", "blue"]
                  },

              link: {
                source: [0,1,0,2,3,3],
                target: [2,3,3,4,4,5],
                value:  [8,4,2,8,4,2]
              }
            }
        ]}
        layout={ {width: 750, height: 520, font:{ size:10}} }
      />
      <table id="data" >
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Sankey </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Shows changes in flows from one condition to at least one other; good for tracing the eventual outcome of a conplex process </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> sankey </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> label </th>
            <td> 
            <tr>  ["A1", "A2", "B1", "B2", "C1", "C2"] </tr> 
             </td>
          </tr>
          <tr>
            <th> link </th>
            <td> 
            <tr> source: [0,1,0,2,3,3]</tr> 
             <tr> target: [2,3,3,4,4,5] </tr>
             <tr> value:  [8,4,2,8,4,2] </tr>
             </td>
          </tr>
          <tr>
            <th> Orientation </th>
            <td>h</td>
          </tr>
          
        </tbody>
      </table>
      </div>
    );
  }
}

export default Sankey;
