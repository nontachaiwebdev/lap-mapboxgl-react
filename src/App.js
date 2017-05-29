import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

class App extends Component {
  constructor(props){
    super(props)
  }
  clickMap(map, event){
    console.log('!!!')
    console.log(map)
    console.log(event)
  }
  render() {
    const bounds = [
	[98.21264043965243, 7.730684939826489],
	[98.48870852324956, 8.222634324830736] 
    ]
    console.log(bounds)
    return (
      <div>
        <ReactMapboxGl
          style="mapbox://styles/mapbox/streets-v8"
          accessToken="pk.eyJ1Ijoibm9udGFjaGFpIiwiYSI6ImNqMzl3anA2ODAwYzIycXBjZ2VxODBsaXYifQ.bm_yUMwkH-TOeQxZVyOWdg"
          center= {[98.3981, 7.89059]}
          containerStyle={{
            height: "100vh",
            width: "100vw"
          }}
          movingMethod="jumpTo"
          onClick= {this.clickMap.bind(this)}
          zoom= {[12]}
          maxBounds= {bounds}
        >
        <Layer
	    type="symbol"
	    id="marker"
	    layout={{ "icon-image": "harbor-15" }}>
	    <Feature coordinates={[98.3981, 7.89059]}/>
	  </Layer> 
	</ReactMapboxGl>
      </div>
    );
  }
}

export default App;
