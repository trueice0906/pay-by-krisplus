// import { createContext, useState, useEffect, ReactNode } from 'react';

// import { getCategoriesAndDocuments } from '../utils/firebase.utils';

// export const ProductsContext = createContext({
//   products: [],
// });

// export const ProductsProvider = ({ children }: { children: ReactNode }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(async () => {
//     const categoryMap = await getCategoriesAndDocuments();
//     console.log(categoryMap);
//   }, []);

//   const value = { products };
//   return (
//     <ProductsContext.Provider value={value}>
//       {children}
//     </ProductsContext.Provider>
//   );
// };