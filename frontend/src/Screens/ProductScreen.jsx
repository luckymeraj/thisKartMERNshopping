import "./ProductScreen.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// Actions
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

const ProductScreen = ({match,history}) => {
  const [qty, setQty]=useState(1);
  const dispatch =useDispatch();
  
  const productDetails= useSelector((state)=>state.getProductDetails);
  
  const {loading, error, product}=productDetails;
  
  const{id}=useParams();

  
  // useEffect(() => {
  //   if (product && match.params.id !== product._id) {
  //     dispatch(getProductDetails(match.params.id));
  //   }
  // }, [dispatch, match, product]);

  
  useEffect(() => {
    if (product && id !== product._id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, match, product]);

console.log(id);
console.log(product);


  const addToCartHandler = () => {
    dispatch(addToCart(product._id, qty));
    history.push(`/cart`);
  };

  
  return (
    <div className='productscreen'>
      {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : (
        <>
        
        <div className="productscreen_left">
        <div className="left_image">
          <img src={product.imageUrl} alt={product.name} />
        </div>
        <div className="left_info">
          <p className="left_name">{product.name}</p>
          <p> ₹ {product.price}</p>
          <p><span style={{fontWeight:"bold"}}>Description:</span> {product.description}</p>
        </div>

      </div>

      <div className="productscreen_right">
        <div className="right_info">
          <p>
            Price: <span>₹ {product.price}</span>
          </p>
          <p>
            Status: <span>{product.countInStock>0 ? "In Stock" : "Out Of Stock"}</span>
          </p>
          <p>
            Qty
            <select>
            <option value="1" >1</option>
            <option value="2" >2</option>
            <option value="3" >3</option>
            <option value="4" >4</option>
            </select>
          </p>
          <p>
            <button type='button'>Add To Cart</button>
          </p>
        </div>
      </div>
        
        </>

      )}
     

    </div>
  )
}

export default ProductScreen;