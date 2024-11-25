import { useState } from "react";

const useGeoLocation = () => {
  const [latitude, setLatitude] = useState<any>(null);
  const [longitude, setLongitude] = useState<any>(null);
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position: any) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      () => {
        alert("cannot get location");
      }
    );
  } else {
    console.log("Geolocation not supported");
  }
  return { latitude, longitude };
};

export default useGeoLocation;
