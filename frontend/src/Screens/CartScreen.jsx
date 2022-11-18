import './CartScreen.css';
import {useDispatch,useSelector} from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// component
import CartItem from '../components/CartItem';


// Actions
import {addToCart, removeFromCart} from '../redux/actions/cartActions';

const CartScreen = () => {
    const dispatch= useDispatch();
    const navigate=useNavigate();

    const cart= useSelector((state)=>state.cart);
    const {cartItems}=cart;

    const qtyChangeHandler=(id,qty)=>{
        dispatch(addToCart(id,qty))
    }


    const removeHandler=(id)=>{
        dispatch(removeFromCart(id));
    }

    const getCartCount=()=>{
        return cartItems.reduce((qty, item)=>Number(item.qty)+qty,0)
    };

    const getCartSubTotal=()=>{
        return cartItems.reduce((price,item)=>(item.price*item.qty) + price, 0)
    }
    const continueShopping=()=>{
        navigate('/')
        
    }



    return (
        <div className='cartscreen'>
            <div className="cartscreen_left">
                <h2>Shopping Cart</h2>
              {cartItems.length===0 ? (
                <div>
                    Your Cart is Empty 
                    {/* <Link to='/' >Continue Shopping</Link> */}
                </div>
              ) : cartItems.map(item=>(
                <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler}
                removeFromCart={removeHandler}
                />
              ))}

            </div>
            <div className="cartscreen_right">
                <div className="cartscreen_info">
                    <p>Subtotal {getCartCount()} items</p>
                    <p>₹ {getCartSubTotal().toFixed()}</p>
                </div>
                <div>
                    <button>Proceed To Checkout</button>
                    <button onClick={continueShopping} >Continue Shopping</button>



                </div>
            </div>
        </div>
    )
}

export default CartScreen