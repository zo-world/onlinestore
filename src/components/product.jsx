import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState } from "react";

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  useEffect(function () {
    //when the component loads
  }, []);

  function handleQuantity(qnty) {
    setQuantity(qnty);
  }

  function getTotal() {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  }

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="" />
      <h5>{props.data.title}</h5>
      <div className="prices">
        <label>
          Total <span className="total">${getTotal()}</span>
        </label>
        <label>
          Price <span className="price">${props.data.price.toFixed(2)}</span>
        </label>
      </div>

      <div className="controls">
        <QuantityPicker onQuantityChange={handleQuantity} />
        <button className="btn btn-sm btn-success">Add</button>
      </div>
    </div>
  );
}

export default Product;