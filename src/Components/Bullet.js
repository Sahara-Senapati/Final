/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Bullet extends Component {
  render() {
    return (
      <div className="body"> 
      <h1>
        Bullet Chart
      </h1>
      <Plot className="plot"
        data={[
            {
    type: "indicator",
    mode: "number+gauge+delta",
    value: 180,
    delta: { reference: 200 },
    domain: { x: [0.25, 1], y: [0.08, 0.25] },
    title: { text: "Revenue" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 300] },
      threshold: {
        line: { color: "black", width: 2 },
        thickness: 0.75,
        value: 170
      },
      steps: [
        { range: [0, 150], color: "gray" },
        {
          range: [150, 250],
          color: "lightgray"
        }
      ],
      bar: { color: "black" }
    }
  },
  {
    type: "indicator",
    mode: "number+gauge+delta",
    value: 35,
    delta: { reference: 200 },
    domain: { x: [0.25, 1], y: [0.4, 0.6] },
    title: { text: "Profit" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 100] },
      threshold: {
        line: { color: "black", width: 2 },
        thickness: 0.75,
        value: 50
      },
      steps: [
        { range: [0, 25], color: "gray" },
        { range: [25, 75], color: "lightgray" }
      ],
      bar: { color: "black" }
    }
  },
  {
    type: "indicator",
    mode: "number+gauge+delta",
    value: 220,
    delta: { reference: 200 },
    domain: { x: [0.25, 1], y: [0.7, 0.9] },
    title: { text: "Satisfaction" },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 300] },
      threshold: {
        line: { color: "black", width: 2 },
        thickness: 0.75,
        value: 210
      },
      steps: [
        { range: [0, 150], color: "gray" },
        { range: [150, 250], color: "lightgray" }
      ],
      bar: { color: "black" }
    }
  }


        ]}
        layout={ {width: 750, height: 520} }
      />
      <table id="data" >
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Bullet </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Good for showing a measurement against the context of a target or performance range </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Indicator </td>
          </tr>
          <tr>
            <th> Mode </th>
            <td> number+gauge+delta </td>
          </tr>
          <tr>
            <th> Value </th>
            <td> 
            <tr> 
            180, 35, 220                            
            </tr> 
             
             </td>
          </tr>
          
          <tr>
            <th> Delta </th>
            <td> reference : 200</td>
          </tr>
                
          </tbody>
      </table> 
      </div>
    );
  }
}
export default Bullet;