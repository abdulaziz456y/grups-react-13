/* eslint-disable react/prop-types */

import { useGlobalContext } from "./context"
import "./Cart.css"
import imgg from './images/ayfon.jpg'





export default function Cart({id, title, price, amount }) {
    const { add, dec, rem } = useGlobalContext();

  return (
     <div className="rer">
       <div className="divv">
          <img src={ imgg} alt="" />
          <h2>{title}</h2>
          <p>{ price}</p>
          <p>{amount}</p>
          <button onClick={() => add(id)}>add</button>
          <button onClick={amount <=  1 ? () => rem(id) : () => dec(id)}>
              dec
          </button>
          <button onClick={() => rem(id)}>rem</button>
    </div>
     </div>
  )
}
