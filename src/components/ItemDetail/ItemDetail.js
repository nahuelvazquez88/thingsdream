import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"
import { ItemCount } from "../ItemCount/ItemCount"



export const ItemDetail = ({id, title, pictureUrl, description, price, stock, category}) => {

    const [cantidad, setCantidad] = useState(0)

    const { agregarAlCarrito, isInCart } = useContext(CartContext)

    const handleAgregar = () => {
        if (cantidad === 0) return

        if (!isInCart(id)) {
            const addItem = {
                id, title, price, stock, cantidad
            }
    
            agregarAlCarrito(addItem)
        }
    }

    return (
        <div className="tarjeta">
      <h3>{title} </h3>
      <p>{description} </p>
      <p>Price: ${price} </p>
      <div className="cardImg">
        <img src={pictureUrl} />
      </div>
      <p>More details coming soon...</p>

            {
                isInCart(id) 
                ?  <Link to="/cart" className="btn btn-success my-3">
                        Check-out
                    </Link>
                :
                    <>
                        <ItemCount 
                            max={stock} 
                            counter={cantidad} 
                            setCounter={setCantidad}
                        />

                        <button
                            className="btn btn-success my-2"            
                            onClick={handleAgregar}
                        >
                            Add to cart
                        </button>
                    </>
            }
        </div>
    )
}