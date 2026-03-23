import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'


const Getproduct = () => {
  const navigate= useNavigate()

  // declare the states here
  const [loading, setLoading] = useState("")
  const [products, setProducts] = useState([])
  const [error, setError] = useState("")
  
  //functoin to getproducts
  const getproducts = async () =>{
    setLoading('Please Wait...')
    try {
      const response= await axios.get("http://murayambuni.alwaysdata.net/api/getproducts")
      setProducts(response.data)
      setLoading("")
    } catch (error) {
      setError("Something went wrong")
      setLoading("")
    }
  }

  // call the function
  useEffect(()=>{
    getproducts()
  }, [])
  console.log(products)
  const imagepath = "http://murayambuni.alwaysdata.net/static/images/"
  
  return (
    <div className="row">
      {/* carousel goes here */}
      <Carousel />
      {/* navbar goes here  */}
      <h1 className='' style={{color:"#39FF14"}} >Available Products</h1>
      {/* bind the states */}
      <h2 className='text-warning'>{loading}</h2>
      <h2 className="text-danger">{error}</h2>
      {/* map the products */}
      {products.map(singleproduct=>( 
        <div className="col-md-3 mb-4">
          <div className="card shadow card-hover h-100"  style={{border: "2px solid #0ff", // neon border color
        boxShadow: "0 0 8px #0ff, 0 0 16px #0ff, 0 0 24px #0ff",}}>
          <img src={ imagepath + singleproduct.product_photo} alt=""  style={{height:"150px",objectFit:"contain"}}/>
          <div className="card-body">
            <h1 className='text-success'>{singleproduct.product_name}</h1>
            <p>{singleproduct.product_description}</p>
            <b>Ksh {singleproduct.product_cost}</b><br />
            <button className='btn ' style={{ padding: "12px 24px",  border: "2px solid #39ff14",    backgroundColor: "transparent",
            color: "#39ff14",    borderRadius: "8px",    cursor: "pointer",    boxShadow: "0 0 10px #39ff14"}} 
            onClick={()=>navigate("/makepayment",{state: {singleproduct}})}>Purchase Now</button>
          </div>
          </div>
        </div>
       ))}
    </div>
  )
}

export default Getproduct