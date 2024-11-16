"use client";
import { useMap } from "react-leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { useEffect } from "react";
import "leaflet-geosearch/dist/geosearch.css";

export default function SearchControll() {
  const map = useMap();
  useEffect(() => {
    const provider = new OpenStreetMapProvider();
    const searchControll = new GeoSearchControl({
      provider: provider,
      style: "bar",
      showMarker: true,
      marker: {
        draggable: true,
      },
      autoClose: true,
      retainZoomLevel: false,
    });
    map.addControl(searchControll);
    return () => map.removeControl(searchControll);
  }, []);
}
