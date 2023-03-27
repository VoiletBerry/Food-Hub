import ItemsCategory from "./ItemsCategory";

const NestedItemCategory = ({ nestedItemCategory }) => {
  return (
    <>
      <div>
        {nestedItemCategory.categories.map((item) => (
          <ItemsCategory itemCategory={item} />
        ))}
      </div>
    </>
  );
};

export default NestedItemCategory;
