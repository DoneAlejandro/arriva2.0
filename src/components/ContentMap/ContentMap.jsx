import React from "react";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import manner from "../ContentMap/ContentMap.module.scss";

const ContentMap = () => {
  const center = [55.75, 37.57];
  const images = [...Array(26)].map((n, i) => {
    const letter = String.fromCharCode(i + 97);
    return `https://img.icons8.com/ios-filled/2x/marker-${letter}.png`;
  });
  return (
    <YMaps className={manner.contentMap}>
      <div>
        {/* <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} /> */}
        <Map
          className={manner.mapBox}
          defaultState={{ center, zoom: 9, controls: [] }}
        >
          {images.map((n) => (
            <Placemark
              geometry={center.map((c) => c + (Math.random() - 0.5))}
              options={{
                iconLayout: "default#image",
                iconImageSize: [50, 50],
                iconImageHref: n,
              }}
            />
          ))}
        </Map>
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
