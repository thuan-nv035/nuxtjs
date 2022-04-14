import HomgRepo from "./HomgRepo";
import CategoryRepo from "./CategoryRepo";

export default ($axios) => ({
  home: HomgRepo($axios),
  category: CategoryRepo($axios)
})
