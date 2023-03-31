import Menu from "./Menu";

const ItemsCategory = ({ itemCategory }) => {
  return (
    <>
      <div data-testid="items_list">
        {itemCategory.itemCards.map((item) => (
          <Menu item={item.card.info} />
        ))}
      </div>
    </>
  );
};

export default ItemsCategory;
