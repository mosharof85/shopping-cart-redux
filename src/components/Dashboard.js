import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/cartSlice";
import { getProducts } from "../Store/productSlice";

const Dashboard = () => {
  const { data, status, error } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const cards = data.map((product, index) => (
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
              variant="primary"
              onClick={() => {
                dispatch(add(product));
              }}
            >
              Add To Cart
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  ));

  if (status) {
    return <>Loading</>;
  }

  if (error) {
    return <>Something went wrong</>;
  }

  return (
    <>
      <h1>Product Dashboard</h1>

      <div className="row">{cards}</div>
    </>
  );
};

export default Dashboard;
