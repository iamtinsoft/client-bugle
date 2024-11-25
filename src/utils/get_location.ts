import { SetGeolocation } from "../features/auth/services/authorizationService";
import { GetCurrentUser } from "../services/authService";

export async function GetGeoLocation() {
  let user = GetCurrentUser();
  let latitude: any = null;
  let longitude: any = null;
  let response: any = null;
  let error: any = null;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position: any) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        let data = {
          userId: user?.userId,
          latitude,
          longitude,
        };
        let { error: serverError, response: serverResponse } =
          await SetGeolocation(data);
        response = serverResponse;
        error = serverError;
        console.log(response);
      },
      () => {
        alert("cannot get location");
      }
    );
  } else {
    console.log("Geolocation not supported");
  }
  return { latitude, longitude, response, error };
}

// export async function ShowGeoLocation() {
//   const [latitude, setLatitude] = useState<any>(null);
//   const [longitude, setLongitude] = useState<any>(null);
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       async (position: any) => {
//         setLatitude(position.coords.latitude);
//         setLongitude(position.coords.longitude);
//       },
//       () => {
//         alert("cannot get location");
//       }
//     );
//   } else {
//     console.log("Geolocation not supported");
//   }
//   return { latitude, longitude };
// }
