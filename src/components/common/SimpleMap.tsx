import { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useUsers from "../../hooks/useUsers";
import { Avatar, Box, Text } from "@chakra-ui/react";
import { ServerUrl } from "../../constants";
import { Icon } from "leaflet";
import { marker } from "../../assets";
const SimpleMap = () => {
  let { data } = useUsers();
  const mapRef = useRef(null);
  const latitude = 9.0531759;
  const longitude = 7.4973459;
  const skater = new Icon({
    iconUrl: marker,
    iconSize: [30, 30],
  });
  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <MapContainer
      center={[latitude, longitude]}
      zoom={9}
      ref={mapRef}
      style={{ height: "85%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {data &&
        data.length > 0 &&
        data.map(
          (user) =>
            user.latitude &&
            user.longitude && (
              <Marker
                key={user.userId}
                position={[user.latitude, user.longitude]}
                icon={skater}
                //icon={icon()}

                // onClick={() => {
                //   setActivePark(park);
                // }}
                //icon={Icon}
              >
                <Popup>
                  <Box>
                    <Avatar
                      name={user.firstName + " " + user.lastName}
                      src={ServerUrl + user.avatarUrl}
                    />
                    <Text fontWeight={600}>
                      {user.firstName + " " + user.lastName}
                    </Text>
                  </Box>
                </Popup>
              </Marker>
            )
        )}
      {/* Additional map layers or components can be added here */}
    </MapContainer>
  );
};

export default SimpleMap;
