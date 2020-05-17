
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
import Column from "./Components/Column";
import Paired from "./Components/Paired-Column";
import Radar from "./Components/Radar";
import Bullet from "./Components/Bullet";
import Stacked from "./Components/Stacked-Column";
import Pie from "./Components/Pie-Chart";
import Treemap from "./Components/Treemap";
import Sankey from "./Components/Sankey";
import Venn from "./Components/Venn-Diagram";
import {Navigation} from "./Components/Navigation"


import "./App.css";

import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";


class App extends Component {
  render() {
  return (
    <Router>
      <div>
      <Navigation/>
       
      <Switch>
      
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
       <Route path="/Column">
          <Column />
       </Route>
       <Route path="/Paired-Column">
          <Paired />
       </Route>
       <Route path="/Radar">
          <Radar />
       </Route>
       <Route path="/Bullet">
          <Bullet />
       </Route>
       <Route path="/Stacked">
          <Stacked />
       </Route>
       <Route path="/Pie">
          <Pie />
       </Route>
       <Route path="/Treemap">
          <Treemap />
       </Route>
       <Route path="/Sankey">
          <Sankey />
       </Route>
       <Route path="/Venn">
          <Venn />
       </Route>
       
      
      
       
        </Switch>
       
       
                 
      </div>
    </Router>
  );
}
}

export default App;