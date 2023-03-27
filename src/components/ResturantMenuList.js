import ItemsCategory from "./ItemsCategory";
import NestedItemCategory from "./NestedItemsCategory";

const ResturantMenuList = ({ menu }) => {
  console.log(menu);

  return (
    <>
      <h1>MENU</h1>
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
    </>
  );
};

export default ResturantMenuList;
