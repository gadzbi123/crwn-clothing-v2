import ProductCard from "../product-card/product-card.component";

import type { CategoryItem } from "../../store/categories/category.types";
import {
  CategoryPreviewContainer,
  Preview,
  Title,
} from "./category-preview.styles";
const CategoryPreview = ({
  title,
  items,
}: {
  title: string;
  items: CategoryItem[];
}) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title.toUpperCase()}</Title>
      </h2>
      <Preview>
        {items
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
