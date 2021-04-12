import { useState, useRef, useCallback } from "react";
import styled from "styled-components";
import { useLoadScript, GoogleMap } from "@react-google-maps/api";
import vintageGoldenBrownMap from "../Styles/MapStyles/vintageGoldenBrownMap";

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

  &:focus {
    outline: none;
  }
`;

// ------------------------------------------------------------ //
// Putting following properties outside of
// functional component
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
// ------------------------------------------------------------ //

function GMap() {
  // Using ref instead of state for map instance to prevent re-render
  const mapRef = useRef();
  const [zoom, setZoom] = useState(15);

  const handleMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

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
      if (zoom > 0) {
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
          onLoad={handleMapLoad}
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={zoom}
          options={options}
          onZoomChanged={() => {
            if (mapRef.current && zoom !== mapRef.current.getZoom()) {
              setZoom(mapRef.current.getZoom());
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
