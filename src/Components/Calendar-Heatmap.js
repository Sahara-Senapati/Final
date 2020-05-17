/* global Plotly:true */

import React, { Component } from 'react';


import createPlotlyComponent from 'react-plotly.js/factory';
import "./Pages.css";


/* JSON Editor styling */


import 'react-select/dist/react-select.css';

const Plot = createPlotlyComponent(Plotly);




class  Calendar extends Component {
  render() {
    return (
      <div className="body">
      <h1>
      Calendar Heatmap
      </h1>

      <Plot className="plot"
        data={[
            {
              z: [[77.9, 68.4, 69.7, 70.6, 71.3, 76.9, 69.1 ], [66.7, 67.4, 60, 72.5, 68.8, 66.6, 67.3], [39.5, 40, 35.2, 24.6, 31.4, 34.6, 33.38],[33.7, 34.6, 42.3, 29.4, 35.3, 33 , 37.2 ], [36.4, 33.4, 24.8, 31, 33.2, 45.3, 38]],
              x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
              y: ['Aug', 'Sept', 'Oct', 'Nov','Dec'],
              type: 'heatmap',
              hoverongaps: false
            }
        ]}
        layout={ {width:750, height: 520} }
      />
      <table id="data" >
        
        <tbody>
        <tr>
            <th> Title </th>
            <td> Calendar Heatmap </td>
          </tr>
          <tr>
            <th> Description</th>  
            <td> A great way of showing temporal patterns (daily, weekly, monthly) - at the expense of showing precision in quantity </td>
          </tr>
          <tr>
            <th> Type </th>
            <td> Heatmap </td>
          </tr>
          <tr>
            <th> Data Format </th>
            <td> Array </td>
          </tr>
          <tr>
            <th> Data </th>
            <td> 
            <tr>x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday']
            </tr> 
             <tr> y: ['Aug', 'Sept', 'Oct','Nov','Dec']
              </tr>
              <tr> z: [[77.9, 68.4, 69.7, 70.6, 71.3, 76.9, 69.1 ],
               [66.7, 67.4, 60, 72.5, 68.8, 66.6, 67.3], 
               [39.5, 40, 35.2, 24.6, 31.4, 34.6, 33.38],
               [33.7, 34.6, 42.3, 29.4, 35.3, 33 , 37.2 ],
                [36.4, 33.4, 24.8, 31, 33.2, 45.3, 38]]
              </tr>
             </td>
          </tr>
          <tr>
            <th> hoverongaps </th>
            <td>  false </td>
          </tr>
          
          
        </tbody>
      </table>
      </div>
    );
  }
}

export default Calendar;
