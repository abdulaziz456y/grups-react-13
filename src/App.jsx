
import './App.css'
import Carts from './Carts';
import { useGlobalContext } from './context'
import giff from './images/gifff.gif'


function App() {

  const { amount, clearCart, total } = useGlobalContext();

  return (
    <>
      <img className='realmadrid' src={ giff} alt="" />
      <h2 className='maxsulotlar-soni'>Jami mahsulotlar soni : {amount}</h2>
      <Carts />
      <button onClick={() => clearCart()}>clealAll</button>
      <p>total price { total}</p>
    </>
  )
}

export default App
