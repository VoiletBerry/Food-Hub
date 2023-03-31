import { useDispatch } from "react-redux";
import { additem } from "../ReduxStore/cartSlice";

const Menu = ({ item }) => {
  const dispatch = useDispatch();

  const HandleAddItems = () => {
    dispatch(additem(item));
  };

  return (
    <>
      <div>
        <div>
          <h3>{item?.name}</h3>
          <button
            data-testid="addItemBtn"
            className="p-2 m-2 bg-green-100"
            onClick={(item) => HandleAddItems()}
          >
            Add Item
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
