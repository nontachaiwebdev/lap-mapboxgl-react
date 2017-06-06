import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, Marker, Popup, GeoJSONLayer, Source, Cluster } from "react-mapbox-gl";
import pin from './bed.png'
import marker from './park.png'
import style from './index.css'
import post from './post.png'

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
    const box = {
      position: 'relative'
    }
    const popup = {
      position: 'absolute',
      'text-align': 'center',
      background: '#fff',
      margin: '0px',
      padding: '2px 5px',
      'border-radius': '2px',
      'font-size': '1.2em'
    }
    const image = {
      width: '30px',
      height: '30px'
    }
    const bounds = [
	[98.21264043965243, 7.730684939826489],
	[98.48870852324956, 8.222634324830736] 
    ]
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
          zoom= {[13]}
          maxBounds= {bounds}
        >
      {/*<Layer
	  type="symbol"
	  id="marker"
	  layout={{ "icon-image": "marker-15" }}>
	  <Feature coordinates={[98.34073603045908, 7.952391285598864]}/>
	</Layer>*/}
        <Cluster ClusterMarkerFactory={this.clusterMarker} clusterThreshold={8}>
            <Marker
	      coordinates={[98.34073603045908, 7.952391285598864]}
	      anchor="bottom">
              <div style={box}>
                <p className='popup'>21:00</p>
                <img style={image} src={pin} />
              </div>
	    </Marker>
	    <Marker
		coordinates={[98.31276113132395, 8.125716936541309]}
		anchor="bottom">
	      <div style={box}>
		<p className='popup'>21:00</p>
		<img style={image} src={marker} />
	      </div>
	    </Marker>
	    <Marker
		coordinates={[98.39006019462784, 8.049915585699637]}
		anchor="bottom">
	      <div style={box}>
		<p className='popup'>21:00</p>
		<img style={image} src={post} />
	      </div>
	    </Marker>
          </Cluster>
        {/* <Marker
	    coordinates={[98.34073603045908, 7.952391285598864]}
	    anchor="bottom">
            <img src={pin} />
	</Marker>
        <Marker
	    coordinates={[98.31276113132395, 8.125716936541309]}
	    anchor="bottom">
          <div style={box}>
            <p className='popup'>21:00</p>
            <img style={image} src={marker} />
          </div>
	</Marker>
        <Marker
	    coordinates={[98.39006019462784, 8.049915585699637]}
	    anchor="bottom">
          <div style={box}>
            <p className='popup'>21:00</p>
            <img style={image} src={post} />
          </div>
	</Marker>*/}
	</ReactMapboxGl>
      </div>
    );
  }
}

export default App;
