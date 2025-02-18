// import ProductCard from "../../components/product-card/product-card.component";
// import Products from "../../shop-data.json";
import "./shop.styles.scss";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      {/* <Route path=':category' element={<Category />}/> */}
    </Routes>
    // <div className="products-container">
    //   {Products.map((product) => (
    //     <ProductCard key={product.id} product={product} />
    //   ))}
    // </div>
  );
}
