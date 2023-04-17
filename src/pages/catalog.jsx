import Product from "../components/product";
import "./catalog.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";


const Catalog = () => {
  
  const [products, setProducts] = useState([]);
  //lets practice
  const [category, setCategory] = useState([]);

  // this is the StateVariable that we need to store the products that will be added
  const [prodsToDisplay, setProdsToDisplay] = useState([]);

  //when component loads, do something
  useEffect(function (){
    //console.log("catalog loaded");
    loadCatalog();
  },[]);

  function loadCatalog() {
    //get the product from the service 
    let service = new DataService();
    let prods = service.getProducts();
    console.log(prods);
    setProducts(prods);
    let cats=["Fruit","Canned"];
    setCategory(cats)
    setProdsToDisplay(prods);
  }

  function filter(category){
    console.log(category);
    let list = [];
    for(let i=0;i<category.length; i++){
      let prod = products[i];
      if(prod.category === category){
        list.push(prod);
      }
    }
    setProdsToDisplay(list);
  }

  //below heading 5 create a button
    //when clicked, call a test function
    //console.log message
  //render each category into a button

  // function magicTest() {
  //   console.log("Hello from the button we created");
  //   setProducts([]);//clear the array of products
  // }
  
  //create the key to the button
  //set all the products on the load


  return (
    <div className="page catalog">
      <h2>Check our amazing catalog!</h2>
      <h5> We have {products.length} Products for you!!</h5>

      {category.map(c => <button key = {c} onClick={() => filter(c)} className="btn btn-sm btn-primary btn-filter">{c}</button>)}
      <br />

      {prodsToDisplay.map(p => <Product key={p._id} data={p}/>)}

      
    </div>
  )


};

export default Catalog;