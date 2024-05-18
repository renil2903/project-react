import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./productDetails.css"

const ProductDetails = () => {
    const { productId } = useParams()
    const [data, setData] = useState({})
    useEffect(() => {
        if (productId) {
            getProductDetails(productId)
        }
    }, [productId])

    const getProductDetails = async (id) => {
        const res = await axios.get(`${process.env.REACT_APP_ENDPOINT}/products/${id}`)
        if (res && res.status == 200) {
            setData(res.data)
        }
    }
    return (
        <>
            <main id="products">
                <div class="container">
                    <div class="producat_wrapper">
                        <div class="producat_image">
                            <div class="img_thumbnail">
                                <img src="./images/image-product-1.jpg" alt="" />
                                <div class="img_small">
                                    {<img
                                        src="./images/image-product-1-thumbnail.jpg"
                                        alt=""
                                        class="active"
                                    />}
                                    <img src="./images/image-product-2-thumbnail.jpg" alt="" />
                                    <img src="./images/image-product-3-thumbnail.jpg" alt="" />
                                    <img src="./images/image-product-4-thumbnail.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div class="producat_content">
                            <p class="company_txt">Sneaker Company</p>
                            <h2>Fall Limited Edition Sneakers</h2>
                            <p class="producat_des">
                                These low-profile sneakers are your perfect casual wear companion.
                                Featuring a durable rubber outer sole, they’ll withstand
                                everything the weather can offer.
                            </p>
                            <div class="price">
                                <div class="dicscount_price">
                                    <p class="normal_price">$125.00</p>
                                    <p><span class="discount">50%</span></p>
                                </div>
                                <p class="total_price">$250.00</p>
                            </div>
                            <div class="qty">
                                <div class="btns">
                                    <button type="button" class="decreament">-</button>
                                    <button type="input" class="qty_numbers">1</button>
                                    <button type="button" class="increament">+</button>
                                </div>
                                <button class="add_cart" type="button">
                                    <span
                                    ><svg
                                        width="22"
                                        height="20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                            <path
                                                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                                                fill="#ffffff"
                                                fill-rule="nonzero"
                                            /></svg
                                        ></span>
                                    <p>Add to Cart</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProductDetails