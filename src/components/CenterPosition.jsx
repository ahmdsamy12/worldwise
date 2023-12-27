import { useMap } from "react-leaflet";

function CenterPosition({ position }) {
  const map = useMap();

  map.setView(position);
  return null;
}

export default CenterPosition;
