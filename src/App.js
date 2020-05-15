
import Diverge from "./Components/Diverging-Bar";
import Spine from "./Components/Spine";
import Scatter from "./Components/Scatter";
import Connected from "./Components/Connected-Scatter";
import Heatmap from "./Components/XY-Heatmap";
import Ordered from "./Components/Ordered-Column";
import Dot from "./Components/Dot-Strip";
import Lollipop from "./Components/Lollipop";
import Histogram from "./Components/Histogram";
import BoxPlot from "./Components/Box-Plot";
import Pyramid from "./Components/Pyramid";
import Frequency from "./Components/Frequency-Polygon";
import Line from "./Components/Line";
import ColumnLine from "./Components/Column-Line";
import Area from "./Components/Area-Chart";
import Calendar from "./Components/Calendar-Heatmap";
import Timeline from "./Components/Timeline";



import "./App.css";

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";


class App extends Component {
  render() {
  return (
    <Router>
      <div>

       <h1>
         Plotly Charts
       </h1>
       <ol>
       <li>
         <Link to="/Diverging-Bar-Chart">Diverging Bar Chart </Link>
       </li>
       <li>
         <Link to="/Spine">Spine </Link>
       </li>
       <li>
         <Link to="/Scatter-Plot">Scatter Plot </Link>
       </li>
       <li>
         <Link to="/Connected-Scatter-Plot"> Connected Scatter Plot </Link>
       </li>
       <li>
         <Link to="/XY-Heatmap"> XY Heatmap </Link>
       </li>
       <li>
         <Link to="/Ordered-Column"> Ordered Column</Link>
       </li>
       <li>
         <Link to="/Dot-Strip-Plot"> Dot Strip Plot</Link>
       </li>
       <li>
         <Link to="/Lollipop"> Lollipop </Link>
       </li>
       <li>
         <Link to="/Histogram"> Histogram </Link>
       </li>
       <li>
         <Link to="/Box-Plot"> Box Plot </Link>
       </li>
       <li>
         <Link to="/Pyramid"> Pyramid </Link>
       </li>
       <li>
         <Link to="/Frequency"> Frequency Polygons </Link>
       </li>
       <li>
         <Link to="/Line"> Line </Link>
       </li>
       <li>
         <Link to="/Column+Line"> Column + Line </Link>
       </li>
       <li>
         <Link to="/Area"> Area Chart </Link>
       </li>
       <li>
         <Link to="/Calendar"> Calendar Heatmap </Link>
       </li>
       <li>
         <Link to="/Timeline"> Timeline </Link>
       </li>
      
       </ol>
      
       <Route path="/Diverging-Bar-Chart">
          <Diverge />
       </Route>
       <Route path="/Spine">
          <Spine />
       </Route>
       <Route path="/Scatter-Plot">
          <Scatter />
       </Route>
       <Route path="/Connected-Scatter-Plot">
          <Connected />
       </Route>
       <Route path="/XY-Heatmap">
          <Heatmap />
       </Route>
       <Route path="/Ordered-Column">
          <Ordered />
       </Route>
       <Route path="/Dot-Strip-Plot">
          <Dot />
       </Route>
       <Route path="/Lollipop">
          <Lollipop />
       </Route>
       <Route path="/Histogram">
          <Histogram />
       </Route>
       <Route path="/Box-Plot">
          <BoxPlot />
       </Route>
       <Route path="/Pyramid">
          <Pyramid />
       </Route>
       <Route path="/Frequency">
          <Frequency />
       </Route>
       <Route path="/Line">
          <Line />
       </Route>
       <Route path="/Column+Line">
          <ColumnLine />
       </Route>
       
       <Route path="/Area">
          <Area />
       </Route>
       <Route path="/Calendar">
          <Calendar />
       </Route>
       <Route path="/Timeline">
          <Timeline />
       </Route>
       
       
                 
      </div>
    </Router>
  );
}
}

export default App;