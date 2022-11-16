import './ProductScreen.css';


const ProductScreen = () => {
  return (
    <div className='productscreen'>
      <div className="productscreen_left">
        <div className="left_image">
          <img src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1660025387.webp" alt='product img' />
        </div>
        <div className="left_info">
          <p className="left_name">Product 1</p>
          <p> ₹ 499.99</p>
          <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, quasi obcaecati molestias rem voluptatibus vel.</p>
        </div>

      </div>

      <div className="productscreen_right">
        <div className="right_info">
          <p>
            Price: <span>₹ 499.99</span>
          </p>
          <p>
            Status: <span>In Stock</span>
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

    </div>
  )
}

export default ProductScreen