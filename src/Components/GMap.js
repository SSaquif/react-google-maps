import { useState } from "react";
import styled from "styled-components";
import { useLoadScript, GoogleMap } from "@react-google-maps/api";

import vintageGoldenBrownMap from "../Styles/MapStyles/vintageGoldenBrownMap";

// Styled Components
const MapLoadingError = styled.div``;

const LoadingSpinner = styled.span``;

const ZoomButton = styled.button`
  text-align: center;
  z-index: 100;
  background: red;
  border: 5px solid gold;
  border-radius: 50%;
  color: gold;
  width: 55px;
  height: 55px;
  opacity: 0.45;
  z-index: 10;
  margin: 0.25em 0.5em;

  &:hover {
    opacity: 1;
  }
`;

// Putting following properties outside of
// GoolgeMap and useLoadScript
// To avoid too many renders

// Any valid CSS properties can go here
const mapContainerStyle = {
  position: "relative",
  border: "3px solid red",
  marginTop: "var(--nav-height)",
  height: "100%",
  width: "100vw",
  zIndex: "1",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
};

const center = {
  lat: 45.5048,
  lng: -73.5772,
};

const libraries = ["places"];

const options = {
  styles: vintageGoldenBrownMap,
  disableDefaultUI: true,
  // zoomControl: true,
};

// Functional React Component
function GMap() {
  const [map, setMap] = useState(null);
  const [zoom, setZoom] = useState(15);

  // Docs: https://react-google-maps-api-docs.netlify.app/#useloadscript
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const zoomIn = (ev) => {
    ev.stopPropagation();
    setZoom((zoom) => {
      if (zoom < 22) {
        return zoom + 1;
      }
      return zoom;
    });
  };

  const zoomOut = (ev) => {
    ev.stopPropagation();
    setZoom((zoom) => {
      if (zoom > 1) {
        return zoom - 1;
      }
      return zoom;
    });
  };

  return (
    <>
      {loadError ? (
        <MapLoadingError />
      ) : !isLoaded ? (
        <LoadingSpinner>Loading</LoadingSpinner>
      ) : (
        // Docs: https://react-google-maps-api-docs.netlify.app/#googlemap
        <GoogleMap
          onLoad={(map) => {
            setMap(map);
          }}
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          options={options}
          onZoomChanged={() => {
            if (map && zoom !== map.getZoom()) {
              setZoom(map.getZoom());
            }
          }}
        >
          <ZoomButton
            onClick={(ev) => {
              zoomIn(ev);
            }}
          >
            +
          </ZoomButton>
          <ZoomButton
            onClick={(ev) => {
              zoomOut(ev);
            }}
          >
            -
          </ZoomButton>
        </GoogleMap>
      )}
    </>
  );
}

export default GMap;
