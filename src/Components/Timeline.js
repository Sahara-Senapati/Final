/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Timeline extends Component {
  render() {
    return (
      <div className="body">
      <h1>
      Circle Timeline
      </h1>
      <Plot className="plot"
        data={[
            {
              x: [1.5, 2, 3,3.7, 4.2,4.7,5.3],
              y: [0.5, 0.5, 0.5, 0.5,0.5,0.5,0.5],
              mode: 'markers',
              marker: {
              size: [60, 40, 80, 30, 40,30, 50]
              }},
              {
              x: [0.5, 1, 2,2.8, 3.4,4],
              y: [1, 1, 1, 1 , 1,1],
              mode: 'markers',
              marker: {
                size: [30, 30, 70, 50, 60,40]
              }},
              {
              x: [1, 1.6, 3,3.4, 3.9,4.6,5.4],
              y: [1.5, 1.5, 1.5, 1.5 , 1.5,1.5,1.5],
              mode: 'markers',
              marker: {
                size: [30, 60, 30, 40, 50,60,80]
              }},
              {
              x: [1, 1.6, 2.2,3.4, 3.9,4.6],
              y: [2, 2, 2, 2 , 2,2],
              mode: 'markers',
              marker: {
                size: [60, 40, 60, 40, 20,50]
              }}
                    ]}
        layout={ {
              
              xaxis: {
                range: [0, 6]
              },
              yaxis: {
                range: [0, 2.5]
              },
              width: 720,
              height: 550,
              shapes: [

    

    //Line Horizontal

            {
              type: 'line',
              x0: 0,
              y0: 2,
              x1: 6,
              y1: 2,
              line: {
                color: 'rgb(208, 85, 110)',
                width: 4,
                
              }
            },
            {
              type: 'line',
              x0: 0,
              y0: 1.5,
              x1: 6,
              y1: 1.5,
              line: {
                color: 'rgb(50, 171, 96)',
                width: 4,
                
              }
            },
            {
              type: 'line',
              x0: 0,
              y0: 1,
              x1: 6,
              y1: 1,
              line: {
                color: 'rgb(255, 153, 51)',
                width: 4,
        
              }
            },
            {
              type: 'line',
              x0: 0,
              y0: 0.5,
              x1: 6,
              y1: 0.5,
              line: {
                color: 'rgb(81, 85, 198)',
                width: 4,
                
              }
            }
            ]
           } }
      />
      <table id="data" >
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Circle Timeline </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> Good for showing discrete values of varying size across multiple categories (eg earthquakes by continent)</td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Markers and Line </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>

          <tr>
            <th> Line Width  </th>
            <td> 4</td>
          </tr>
          
          
        </tbody>
      </table>
      </div>
    );
  }
}
export default Timeline;