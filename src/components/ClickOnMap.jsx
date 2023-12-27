import { useMapEvents } from "react-leaflet";
import { useNavigate } from "react-router-dom";

function ClickOnMap() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default ClickOnMap;
