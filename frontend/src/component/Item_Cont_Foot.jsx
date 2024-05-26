import Item_foot from "./Item_foot";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus.js";

const Item_Cont_Foot = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <Item_foot Links={PRODUCTS} title="PRODUCTS" />
      <Item_foot Links={RESOURCES} title="RESOURCES" />
      <Item_foot Links={COMPANY} title="COMPANY" />
      <Item_foot Links={SUPPORT} title="SUPPORT" />
    </div>
  );
};

export default Item_Cont_Foot;
