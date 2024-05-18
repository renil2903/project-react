import { useEffect } from "react"
import { getAllData } from "../../../features/PAGES/HOME/HomeSlice"
import { useDispatch, useSelector } from "react-redux"
import "../HOME/Home.css"
import { Link } from "react-router-dom"
import loader from '../../../Assets/loader.gif'


export const Home = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.product.loading)
    const data = useSelector((state) => state.product.data)
    console.log({ loading, data });
    useEffect(() => {
        dispatch(getAllData())
    }, [])
    return (
        <>
            <h1>home</h1>
            <Link to={'/login'} className="login-button">GO TO LOGIN PAGE!</Link>
            <div className="main-wrapper">
                {loading ?
                    <img src= {loader} />
                    :
                    data?.products?.length > 0 ?
                        data?.products?.map((product, index) => (
                            <div key={index}>
                            <div className="product-card">
                                <div className="badge">Hot</div>
                                <div className="product-tumb">
                                    <img src={product?.thumbnail} alt="" />
                                </div>
                                <div className="product-details">
                                    <span className="product-catagory">{product?.category}</span>
                                    <h4><a href="">{product?.title}</a></h4>
                                    <p>{product?.description}</p>
                                    <div className="product-bottom-details">
                                        <div className="product-price"><small>${product?.price}</small>${(product?.price - ((product?.price * product?.discountPercentage) / 100)).toFixed(2)}</div>
                                        <div className="product-links">
                                            <a href=""><i className="fa fa-heart"></i></a>
                                            <a href=""><i className="fa fa-shopping-cart"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        ))
                        : <div><center>Data not found</center></div>
                }
            </div>
        </>
    )
}
export default Home