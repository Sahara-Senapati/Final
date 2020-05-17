/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class Paired extends Component {
  render() {
    return (
      <div className="body">
      <h1>
      Paired Column
      </h1>
      <Plot className="plot"
        data={[
            {
              x: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
              y: [80, 54, 50, 35, 24, 10, 3],
              type: 'bar',
              marker: {
             color: ['rgb(255, 144, 14)','rgb(255, 144, 14)','rgb(255, 144, 14)','rgb(255, 144, 14)','rgb(255, 144, 14)','rgb(255, 144, 14)','rgb(255, 144, 14)']
              }
            },
            {
              x: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
              y: [53, 24, 47, 73, 8, 32, 60],
              type: 'bar',
              marker: {
             color: ['rgb(180, 50, 70)','rgb(180, 50, 70)','rgb(180, 50, 70)','rgb(180, 50, 70)','rgb(180, 50, 70)','rgb(180, 50, 70)','rgb(180, 50, 70)']
              }
            }
        ]}
        layout={ {width: 750, height: 520} }
      />
      <table id="data" >
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Paired Column </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> As per standard column but allows for multiple series. Can become tricky to read with more than 2 series </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Bar </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Data 1 </th>
            <td> 
            <tr> x: [2014, 2015, 2016, 2017, 2018, 2019, 2020]
             </tr> 
             <tr>  y: [80, 54, 50, 35, 24, 10, 3] </tr>
             </td>
          </tr>
          <tr>
            <th> Data 2 </th>
            <td> 
            <tr> x: [2014, 2015, 2016, 2017, 2018, 2019, 2020]
             </tr> 
             <tr>  y: [53, 24, 47, 73, 8, 32, 60]</tr>
             </td>
          </tr>
          
          

          
        </tbody>
      </table>
      </div>
    );
  }
}

export default Paired;
