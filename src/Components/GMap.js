import styled from "styled-components";
import {
  useLoadScript,
  GoogleMap,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

import vintageGoldenBrownMap from "../Styles/MapStyles/vintageGoldenBrownMap";

// Styled Components
const MapLoadingError = styled.div``;

const LoadingSpinner = styled.span``;

// Functional React Component
function GMap() {
  // Putting following properties outside of
  // GoolgeMap and useLoadScript
  // To avoid too many renders
  const libraries = ["places"];

  // Any valid CSS properties
  const mapContainerStyle = {
    position: "relative",
    border: "3px solid red",
    "margin-top": "var(--nav-height)",
    height: "100%",
    width: "100vw",
  };

  const center = {
    lat: 45.5048,
    lng: -73.5772,
  };

  const options = {
    styles: vintageGoldenBrownMap,
    disableDefaultUI: true,
    zoomControl: true,
  };

  // Docs: https://react-google-maps-api-docs.netlify.app/#useloadscript
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  const renderMap = () => {
    const onLoad = (mapInstance) => {
      //do something with map instnace
    };

    // Docs: https://react-google-maps-api-docs.netlify.app/#googlemap
    return (
      <>
        {loadError ? (
          <MapLoadingError />
        ) : !isLoaded ? (
          <LoadingSpinner>Loading</LoadingSpinner>
        ) : (
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={15}
            options={options}
          />
        )}
      </>
    );
  };

  return <>{renderMap()}</>;
}

export default GMap;
