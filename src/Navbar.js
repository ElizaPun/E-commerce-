import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    let cartStore = useSelector(store=>store.cartStore)
    let cartLength = cartStore.cart_items.length
  return (
    <div>
        <ul className='d-flex justify-content-center list-unstyled bg-primary-subtle'>
            <Link to='/' className='text-decoration-none'><li className='p-3 w-25 mx-5 text-center mt-2 h3 text-success'>Home</li></Link>
            <Link to='/cart' className='text-decoration-none'><li className='p-3 w-25 mx-5 text-center mt-2 h3 text-success position-relative'>Cart
            <span className="position-absolute sup translate-middle badge rounded-pill bg-danger w-100">
                {cartLength}
                </span>
                </li></Link>
        </ul>
    </div>
  )
}

export default Navbar