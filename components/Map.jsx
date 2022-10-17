import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  //   Transform the searchResults into
  //   {latitude: 10.2342, longitude: 54.8954}
  //    object
  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));

  //   The latitude and longitude of the center of location coordinates
  const center = getCenter(coordinates);

  const [viewPort, setViewPort] = useState({
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
    height: "100%",
    width: "100%",
  });

  return (
    <ReactMapGL
      mapStyle={"mapbox://styles/asejnr/cl9cnqm3w000714ofug2awd1a"}
      mapboxAccessToken={process.env.mapbox_key}
      {...viewPort}
      onMove={(nextViewport) => setViewPort(nextViewport.viewPort)}>
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}>
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl z-50 animate-pulse"
              aria-label="push-pin"
              role="img">
              📌
            </p>
          </Marker>

          {/* Pop-up */}
          {selectedLocation.lat === result.lat ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}>
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};

export default Map;
