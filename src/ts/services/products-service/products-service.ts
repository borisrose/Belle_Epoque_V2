import sealed from "../../utils/decorators/class/sealed";

@sealed
export default class ProductsService {
  static async getProducts() {
    const result = await fetch("/data/products.json");
    const products = await result.json();
    return products;
  }
}
