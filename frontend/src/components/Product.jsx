import './Product.css';
import {Link} from 'react-router-dom';
const Product = () => {
  return (
    <div className='product'>
        <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1660025387.webp" alt='product img'/>

    <div className="product_info">
        <p className="info_name"> Product 1</p>
        <p className="info_discription">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam eum quia perspiciatis facilis hic voluptates?
        </p>
        <p className='info_price'>₹ 499</p>
        <Link to={`/product/${1111}`} className='info_button'>View</Link>
    </div>
    </div>
  )
}

export default Product