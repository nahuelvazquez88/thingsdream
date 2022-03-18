import './Item.scss';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";

export const Item = ({ id, title, description, price, pictureUrl }) => {

  return (
    <div className="tarjeta">
      <h3>{title} </h3>
      <p>{description} </p>
      <p>Price: ${price} </p>
      <div className="cardImg">
          <img src={pictureUrl} />
      </div>
      <Link to={`/detail/${id}`}>
        <Button className="botonBootstrap" variant="primary">Ver más</Button>
      </Link>
    </div>   

  );
};