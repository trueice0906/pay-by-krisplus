import Products from "../../shop-data.json";
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  return Object.keys(Products).map((title: any) => {
    const products = Products[title];
    return <CategoryPreview key={title} title={products.title} products={products.items} />;
  });
};

export default CategoriesPreview;
