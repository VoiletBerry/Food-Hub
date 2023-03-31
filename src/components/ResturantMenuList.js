import ItemsCategory from "./ItemsCategory";
import NestedItemCategory from "./NestedItemsCategory";

const ResturantMenuList = ({ menu }) => {
  console.log(menu);

  return (
    <>
      <h1 data-testid="menu_list">MENU</h1>
      <div>
        {menu.map((item, index) => {
          return (
            <div key={index}>
              {item.categories ? (
                <NestedItemCategory nestedItemCategory={item} />
              ) : (
                <ItemsCategory itemCategory={item} />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ResturantMenuList;
