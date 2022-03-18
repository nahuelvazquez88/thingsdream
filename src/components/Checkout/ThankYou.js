import { Link } from "react-router-dom"


export const ThankYou = ({order}) => {

    return <div className="container my-5">
                <h2>Thank you for your purchase!</h2>
                <hr/>
                <h3>Your order number is: {order}</h3>
                <Link to="/" className="btn btn-primary">Back</Link>
            </div>
}