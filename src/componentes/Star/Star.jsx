import { FaStar } from "react-icons/fa";

export default ({ selected = false, onSelect = (f) => f }) => {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
};
