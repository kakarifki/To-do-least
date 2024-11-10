import ProductImage from "../product-image"
import ProductPrice from "../product-price"
import ProductDiscount from "../product-discount"
import ProductCaption from "../product-caption"

const ProductCard = () => {
  return (
    <>
    <ProductImage />
    <ProductPrice />
    <ProductDiscount />
    <ProductCaption />
    </>
  )
}

export default ProductCard