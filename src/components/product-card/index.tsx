import ProductImage from '../product-image'
import ProductPrice from '../product-price'
import ProductDiscount from '../product-discount'
import ProductCaption from '../product-caption'

const ProductCard = () => {
    return (
        <>
            <div className="bg-red-200">
                <ProductImage />
                <ProductPrice />
                <ProductDiscount />
                <ProductCaption />
            </div>
        </>
    )
}

export default ProductCard
