import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "../Store/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const cards = cartProducts.map((product, index) => (
    <div key={product.id} className="col-md-3 p-5">
      <Card style={{ width: "18rem" }}>
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{
              width: "100px",
              height: "150px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>BDT {product.price}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              variant="danger"
              onClick={() => {
                dispatch(remove(product));
              }}
            >
              Remove From Cart
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  ));
  return (
    <>
      <h1>Cart Page</h1>
      <div className="row">{cards}</div>
    </>
  );
};

export default Cart;
