import React from 'react'
import addP from '../../firebase/firebaseUtils/useAddDoc'
import addProduct from '../../firebase/firebaseUtils/useAddDoc'

const Admin = () => {
    const handleAddProduct = () => {
     addProduct()
    }

  return (
    <div>
     <button onClick={handleAddProduct}>click me</button>
    </div>)
}

export default Admin