import React, { useContext } from 'react';
import { useParams} from 'react-router-dom';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import DescriptionBox from '../DescriptionBox/DescriptionBox';
import Breadcrum from '../Breadcrum/Breadcrum';
import RelatedProducts from '../RelatedProducts/RelatedProducts';
import { ShopContext } from '../Context/ShopContext';

const  Product = () => {
    const {all_product}= useContext (ShopContext);
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId));

    return (
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProducts/>

        </div>
    )
}

export default Product