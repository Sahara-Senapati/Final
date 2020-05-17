/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Treemap extends Component {
  render() {
    return (
      <div className="body">
      <h1>
      Treemap
      </h1>
      <Plot className="plot"
        data={[
            {
                  type: "treemap",
                  labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
                  parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ]
            }
        ]}
        layout={ {width: 750, height: 520, barmode:'relative'} }
      />
      <table id="data" >
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Treemap </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Use for hierarchial part-to-whole relationships ; can be difficult to read when there are many small segments </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> treemap </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> labels </th>
            <td> 
            <tr>  ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"] </tr> 
            </td>
          </tr>
          <tr>
            <th>  parents </th>
            <td> 
            <tr>  ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ] </tr> 
             </td>
          </tr>
          
          
        </tbody>
      </table>
      </div>
    );
  }
}

export default Treemap;
