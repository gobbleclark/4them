import React, {useEffect, useState} from 'react';
import {Header, Container } from 'semantic-ui-react'
import Globe from 'react-globe.gl';
const Home = () => {
  
  const [mapData, setMapData] =  useState([])
  
  useEffect(() => {

    setMapData(data)
    console.log(data)
  }, [])

  
  const data = [{
    name: "Test",
    lat: '40.7607793',
    lng: '-111.8910',
    color: "#FF0000",
    size: '.5',
  }
  ]
  return (
    <>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Globe
            globeImageUrl = 'https://unpkg.com/three-globe@2.18.0/example/img/earth-blue-marble.jpg'
            backgroundColor = 'black'
            // backgroundImageUrl = 'https://wallpaperaccess.com/full/202197.jpg'
            showAtmosphere
            atmosphereColor = 'white'
            atmosphereAltitude = {1.5}
            pointsData = {mapData}
            pointAltitude="size"
            pointColor="color"
         />
      </div>
    </>
  )
};

export default Home;
