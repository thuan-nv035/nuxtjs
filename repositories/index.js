import HomgRepo from "./HomgRepo";
import CategoryRepo from "./CategoryRepo";
import ProductRepo from "./ProductRepo";
export default ($axios) => ({
  home: HomgRepo($axios),
  category: CategoryRepo($axios),
  product: ProductRepo($axios)
})
