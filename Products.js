import { Link,Outlet } from "react-router-dom"

export const Products = () => {
  return (
    <>
    <div>
    <input type='text' placeholder='Search products'/>
    </div>
    <nav>
    <Link to='Featured1'>Featured</Link>
    <Link to='New'>New</Link>
    </nav>
    <Outlet />
    </>
    )
}
