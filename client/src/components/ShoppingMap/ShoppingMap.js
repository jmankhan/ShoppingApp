import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const ShoppingMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA2IZDEMAaC5vYrEG2MckjHbx54yWxgmOw",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh`, width: `70%`, float: `right` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={12}
    defaultCenter={{ lat: 40.2087954, lng: -76.7394235 }}>
        {props.isMarkerShown && <Marker position={{ lat: 40.2087954, lng: -76.7394235 }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

export default ShoppingMap;
