import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getAllDataCart } from "../CARTS/cartsSlice"
import { useDispatch, useSelector } from "react-redux"
import "../HOME/Home.css"
import loader from '../../../Assets/loader.gif'

const Dashboard = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loading = useSelector((state) => state.cart.loading)
    const data = useSelector((state) => state.cart.data)
    console.log({ loading,data })
    useEffect(() => {
        dispatch(getAllDataCart())
    },[])
    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={() => {
                localStorage.clear()
                navigate('/login')
            }}>LOGOUT</button>
            <div className="main-wrapper">

            {loading ? <img src={loader}/> : null}

            {data?.carts?.length > 0 ? (
                    data.carts.map((cart) => (
                        cart.products.map((product, i) => (
                            <div key={i} className="product-card">
                                <div className="badge">Hot</div>
                                <div className="product-tumb">
                                    <img src={product.thumbnail} alt={product.title} />
                                </div>
                                <div className="product-details">
                                    <span className="product-catagory">{product.category}</span>
                                    <h4><a href="#">{product.title}</a></h4>
                                    <p>{product.description}</p>
                                    <div className="product-bottom-details">
                                        <div className="product-price"><small>${product.price}</small>${product.discountedPrice}</div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ))
                ) 
                : 
                <h1>Data not found</h1>
            }

            </div>
        </>
    )
}

export default Dashboard