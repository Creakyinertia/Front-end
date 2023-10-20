import { useSelector } from 'react-redux'
import './checkout.css'
function Checkout() {
  const cart = useSelector(state=>state.reducer)
  let abc = 0
  return (
    <>
      <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            
          </tr>
        </thead>
        <tbody>
          {cart&&
         cart?.map((carts, index) => (
              <tr key={index}>
              <td>{carts.title}</td>
              <td>{carts.price}</td>  
              <td style={{ display:'none'}}>{abc+=Number(carts.price)}</td>
            </tr>
          ))}
          <tr>
            <td className='total'>Total </td>
          <td className='totalp'>{abc} $</td></tr>    
        </tbody>
      </table>
     </div>
    </>
  )
}
export default Checkout