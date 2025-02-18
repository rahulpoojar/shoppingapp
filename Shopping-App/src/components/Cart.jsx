import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";
import NavBar from "./NavBar";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";

const Cart = () => {
  const products = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const onClickHanler = (id)=>{
    dispatch(remove(id));
  }

  return (
    <>
      <div className="navbar flex justify-center">
        <NavBar />
      </div>
      <div className="cards flex flex-wrap justify-center gap-9 mt-20">
        {products.map(product => (
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
                <Button onClick={() => onClickHanler(product.id)}>Remove</Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
