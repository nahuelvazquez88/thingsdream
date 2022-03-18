import './Catalogue.scss';
import { Item } from '../Item/Item';


export const Catalogue = ( { productos }) => {

  console.log(productos)
  return (
        <div className='productContainer'>
          <h1>Languages</h1>
          <div className='productRow'>
            {productos.map( producto => <Item key={producto.id} {...producto}/>)}
          </div>
        </div>
  );
};