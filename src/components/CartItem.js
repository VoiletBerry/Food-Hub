import { IMG_CDN_URL } from "../Utils/Constants";

const CartItem = ({ items }) => {
  console.log(items);
  return (
    <>
      <div className="w-56 h-80 p-2 m-2 shadow-md bg-pink-50">
        <img src={IMG_CDN_URL + items?.imageId}></img>
        <h2 className="font-bold text-xl">{items?.name}</h2>
      </div>
    </>
  );
};

export default CartItem;
