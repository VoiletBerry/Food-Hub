import Menu from "./Menu";

const ItemsCategory = ({ itemCategory }) => {
  return (
    <>
      <div>
        {itemCategory.itemCards.map((item) => (
          <Menu item={item.card.info} />
        ))}
      </div>
    </>
  );
};

export default ItemsCategory;
