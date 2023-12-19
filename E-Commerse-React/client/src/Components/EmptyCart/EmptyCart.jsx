import { useNavigate } from "react-router-dom"

export default function EmptyCart() {
    const navigate = useNavigate();
  return (
    <div>
        <h2>Oops..., looks like your cart is empty</h2>
        <p>Return to <button onClick={navigate("/")}>Homepage</button></p>
    </div>
  )
}
