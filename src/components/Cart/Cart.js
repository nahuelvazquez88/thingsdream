import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from "react-router-dom"


export const Cart = () => {

    const { cart, totalCart, vaciarCart, eliminarItem } = useContext(CartContext)

    // render si el cart está vacío
    if (cart.length === 0) {
        return <div className="container my-4">
                    <h2>Your cart is empty!</h2>
                    <Link to="/" className="btn btn-primary">Back</Link>
                </div>
    }

    return (
        <>     
            <div className="container my-4">
                <h2>Your purchase</h2>
                <hr/>

                {
                    cart.map((item) => (
                        <div key={item.id}>
                            <h4>{item.title}</h4>
                            <p>Quantity: {item.cantidad}</p>
                            <p>Price: ${item.cantidad * item.price}</p>
                            <button className="btn btn-danger" onClick={() => eliminarItem(item.id)}>
                                <BsFillTrashFill/>
                            </button>
                        </div>
                    ))
                }

                <hr/>
                <h2>Total: ${totalCart()}</h2>

                <div className="my-2">
                    <button className="btn btn-danger" onClick={vaciarCart}>Emtpy cart</button>
                    <Link to="/checkout" className="btn btn-success mx-2">Checkout</Link>
                </div>
            </div>
        
        </>
    )
}