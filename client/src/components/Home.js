import React, {useEffect, useState} from 'react';
import {Header, Container } from 'semantic-ui-react'
import Globe from 'react-globe.gl';
const Home = () => {
  
  const [mapData, setMapData] =  useState([])
  const [popUpOpen, setPopUpOpen] =  useState(false)
  const [markerSize, setMarkerSize] = useState(0)
  
  useEffect(() => {
      getRandomSize()
  }, [])

  useEffect(() => {
    setMapData(data)
  }, [markerSize])

  const getRandomSize = () => {
    var array = [1.25, 1, 1.5, 1.75, 2]
    var item = array[Math.floor(Math.random() * array.length)];
    setMarkerSize(item)
  }
  const data = [{
    name: "Salt Lake City",
    lat: '40.7607793',
    lng: '-111.8910',
    color: "#ffffff",
    size: markerSize,
    radiusSize: markerSize,
    link: 'https://www.google.com/'
  }
  ]

  const openVideo = (link) => {
   window.open(link, '_blank')
  }

  const defaultView = {

  }

const shrinkMapMarkers = () => {
  setMarkerSize(.2)
}

  return (
    <>
      <div style={{
                display: 'flex', 
                justifyContent: 'center',
                // width: window.innerWidth,
                height: window.innerHeight
                }}>
        <Globe
          // globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
          globeImageUrl = 'https://unpkg.com/three-globe@2.18.0/example/img/earth-blue-marble.jpg'
            // backgroundColor = 'black'
            // backgroundImageUrl = 'https://wallpaperaccess.com/full/202197.jpg'
            showAtmosphere
            atmosphereColor = 'white'
            atmosphereAltitude = {.5}
            labelsData={mapData}
            labelLat={d => d.lat}
            labelLng={d => d.lng}
            labelText={d => d.name}
            labelSize={d => d.size}
            labelDotRadius={d => d.radiusSize}
            labelColor={() => 'white'}
            labelResolution={2}
            onLabelClick={(d) => openVideo(d.link)}
            animateIn={true}
            onZoom={() => shrinkMapMarkers}
         />
      </div>
    </>
  )
};

export default Home;
