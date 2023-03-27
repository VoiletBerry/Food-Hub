import { useParams } from "react-router-dom";
import useResturant from "../Hooks/useResturant";
import ResturantMenu from "./ResturantMenu";
import ResturantMenuList from "./ResturantMenuList";
import Shimmer from "./Shimmer";

const ResturantDetails = () => {
  const { id } = useParams();

  const resturant = useResturant(id);

  return !resturant ? (
    <Shimmer />
  ) : (
    <div>
      <ResturantMenu resturantInfo={resturant.info} />
      <ResturantMenuList menu={resturant.menu} />
    </div>
  );
};

export default ResturantDetails;
