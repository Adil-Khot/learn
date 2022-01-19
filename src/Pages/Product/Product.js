import { Link } from "react-router-dom";
import LoginData from "../../Containers/LoginData/LoginData";
import classes from "./Product.module.css";
//import ProductDetail from '../Product Detail/Product Detail';

const Product = () => {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numsDiv = nums.map((num) => {
    return (
      <Link id={num} className={classes.Product} to={`/Product/${num}`}>
        {num}
      </Link>
    );
  });
  return (
    <div classname>
      <h1>Product</h1>
      <LoginData />
      <div className={classes.ProductList}>{numsDiv}</div>
    </div>
  );
};

export default Product;

/*
<h1>App navigator</h1>
<h1>Content</h1>
<h1>Footer</h1>
*/
