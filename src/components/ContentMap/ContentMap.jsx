import React from "react";
import { YMaps, Map } from "react-yandex-maps";
import manner from "../ContentMap/ContentMap.module.scss";

const ContentMap = () => {
  return (
    <YMaps className={manner.contentMap}>
      <div>
        {/* <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} /> */}
        <Map
          className={manner.mapBox}
          defaultState={{ center: [55.75, 37.57], zoom: 9 }}
        ></Map>
      </div>
    </YMaps>
  );
};

export default ContentMap;

// <div className={manner.contentMap}>
//   <YMaps>
//     {/* <Map
//       onAPIAvailable={function () {
//         console.log("API loaded");
//       }}
//       center={[55.754734, 37.583314]}
//       zoom={10}
//     >
//       <Marker lat={this.props.lat} lon={this.props.lon} />
//     </Map> */}
//     <Map
//       defaultState={{
//         center: [55.75, 37.57],
//         zoom: 9,
//         controls: ["zoomControl", "fullscreenControl"],
//       }}
//       modules={["control.ZoomControl", "control.FullscreenControl"]}
//     >
//       <Placemark
//         modules={["geoObject.addon.balloon"]}
//         defaultGeometry={[55.75, 37.57]}
//         properties={{
//           balloonContentBody:
//             "This is balloon loaded by the Yandex.Maps API module system",
//         }}
//       />
//     </Map>
//   </YMaps>
// </div>
