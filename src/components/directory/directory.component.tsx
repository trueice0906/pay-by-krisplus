import CategoryItem from '../category-item /category-item.component';

import './directory.styles.scss';

export default function({ categories }: { categories: any}) {
  return (
    <div className='directory-container'>
      {categories.map((category: any) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};