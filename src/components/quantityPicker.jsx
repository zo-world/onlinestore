import "./quantityPicker.css"
import { useState } from "react";

function QuantityPicker()
{
  let [quantity, setQuantity] = useState(1);

    function increase(){
      console.log("button click");
      // quantity = 100; // Don't
      // setQuantity(1);
      let qty = quantity + 1;
      setQuantity(qty);
    }

    function decrease(){
      if (quantity === 1) return;
      console.log("button click");
      let qty = quantity - 1;
      setQuantity(qty);
    }
  
  return (
    <div className="qt-picker">
      <button className="btn btn-primary" onClick={increase}>+</button>
      <label>{quantity}</label>
      <button className="btn btn-primary" disabled = {quantity === 1} onClick={decrease}>-</button>
    </div>
  );
}

export default QuantityPicker;