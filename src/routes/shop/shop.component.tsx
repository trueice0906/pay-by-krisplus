import ProductCard from "../../components/product-card/product-card.component";
import Products from "../../shop-data.json";
import "./shop.styles.scss";

export default function Shop() {
  return (
    <div className="products-container">
      {Products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
