import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { add }  from "../store/cartSlice"
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
import NavBar from "./NavBar";
import Shimmer from "./Shimmer";

const Product = () => {
  const [products, setProducts] = useState();
  const [error, setError] = useState(null);
  const dispatch = useDispatch();


  const onClickHanler = (product)=>{
      // dispatch a action

      dispatch(add(product));

      alert("Product Added To Cart");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="navbar flex justify-center"><NavBar/></div>
    <div className="heading flex justify-center mt-5">
        <h1 className="text-6xl">PRODUCTS</h1>
    </div>
      <div className="cards flex flex-wrap justify-center gap-9 mt-20">
        {products ? (
          products.map(product => (
            <div key={product.id} className="mb-6">
              <Card className="w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img
                    src={product.image}
                    alt="card-image"
                    className="w-full h-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2 text-center">
                    {product.title}
                  </Typography>
                  <Typography variant="h5" color="red" className="mb-2 text-center">
                    ${product.price}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0 flex justify-center">
                  <Button onClick={()=> onClickHanler(product)}>Add To Cart</Button>
                </CardFooter>
              </Card>
            </div>
          ))
        ) : (
          <Shimmer/>
        )}
      </div>
    </div>
  );
};

export default Product;
