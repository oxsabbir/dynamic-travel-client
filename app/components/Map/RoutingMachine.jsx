import L from "leaflet";
import { useEffect, useRef } from "react";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

export default function RoutingMachine({ locations }) {
  //   console.log(locations);
  let routingRef = useRef(null);
  const map = useMap();

  useEffect(() => {
    // creating new waypoints
    const waypoints = locations?.map((item) =>
      L.latLng(item.coordinates[1], item.coordinates[0])
    );

    if (!map || !waypoints || waypoints.length === 0) return;

    const initializeRoutingInstance = function () {
      // removing the existing routing control
      if (routingRef.current) {
        map.removeControl(routingRef.current);
        routingRef.current = null; // Reset ref
      }

      routingRef.current = L.Routing.control({
        waypoints,
        draggableWaypoints: false,
        createMarker: () => null,
        lineOptions: {
          styles: [
            { color: "rgba(41, 154, 250, 0.74)", weight: 8, opacity: 0.6 },
          ],
        },
        show: false,
        showAlternatives: false,
        addWaypoints: false,
        routeWhileDragging: false,
      }).addTo(map);

      routingRef.current?.on("routesfound", () => {
        map.closePopup();
      });
    };
    // delaying for map instance to create

    const delayingTimer = setTimeout(() => {
      if (map) initializeRoutingInstance();
    }, 150);

    // cleaning up
    return () => {
      if (routingRef.current) {
        map.removeControl(routingRef.current);
        routingRef.current = null;
      }
      // clearing the timeOut to not create more that once
      clearTimeout(delayingTimer);
    };
  }, [map, locations]);
  console.log(routingRef.current);
  return null;
}
