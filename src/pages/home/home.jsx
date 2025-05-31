import Carousel from "../../component/carousel/carousel"
import Products from "../../component/products/productsCarti"
import "../../App.css"
import Handpick from "../../component/products/handpick"
import Allproducts from "../../component/products/product"
import GeneralSearch from "../../component/search/searchinput"
import { useContext } from "react"
import { productContext } from "../../contexts/ProductContext"
import Notfound from "../../component/search/notfound"


const Home = () => {
    const { searchQuary, setsearchQuary, filterProduct } = useContext(productContext)
    return (
        <>
            <div className="homecontainer">

                <div className="maincon">
                    <div className="concarti">
                        <h2>Explore Categories</h2>

                        <div className="carcons">

                            <div className="cardscarti Restaurants">
                                <a href="">
                                    <div className="imgs">
                                        <img width={85} height={50} src="public/image/Restaurants.webp" alt="Restaurants" />
                                    </div>
                                    <h5>Restaurants</h5>
                                </a>
                            </div>

                            <div className="cardscarti Supermarkets">
                                <a href="">

                                    <div className="imgs">
                                        <img width={80} height={45} src="public/image/Supermarkets.webp" alt="Supermarkets" />
                                    </div>
                                    <h5>Supermarkets</h5>
                                </a>
                            </div>
                            <div className="cardscarti Pharmacy">
                                <a href="">

                                    <div className="imgs">
                                        <img width={83} height={45} src="public/image/pharmacy.svg" alt="Pharmacy" />
                                    </div>
                                    <h5>Pharmacy</h5>
                                </a>
                            </div>
                            <div className="cardscarti Local">
                                <div className="imgs">
                                    <img width={90} height={45} src="public/image/Localm.svg" alt="Local Markets" />
                                </div>
                                <h5>Local Markets</h5>
                            </div>

                            <div className="cardscarti African">
                                <div className="imgs">
                                    <img width={83} height={45} src="public/image/African Meals.webp" alt="African Meals" />
                                </div>
                                <h5>African Meals</h5>
                            </div>
                            <div className="cardscarti Fit">
                                <div className="imgs">
                                    <img width={87} height={42} src="public/image/Fitf.webp" alt="Fit Fam" />
                                </div>
                                <h5>Fit Fam</h5>
                            </div>
                            <div className="cardscarti Drinks">
                                <div className="imgs">
                                    <img width={64} height={45} src="public/image/Drinks.webp" alt="Drinks" />
                                </div>
                                <h5>Drinks</h5>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="maincon02section">
                    <div className="relycon">
                        <a href="#">
                            <img width={"100%"} src="public/image/getStarfood.png" alt="public/image/getStarfood.png" />
                        </a>
                    </div>

                    <div className="relycon">
                        <a href="#">
                            <img width={"100%"} src="public/image/rela.png" alt="public/image/rela.png" />
                        </a>
                    </div>
                </div>

                {searchQuary === '' ? (
                    <>
                        <Handpick />
                        <Allproducts />
                    </>
                ) :
                    (filterProduct.length == 0 ? (
                        <Notfound/>
                    ) : (
                        <GeneralSearch />
                    ))

                }


            </div>

            {/* <SearchInput/> */}

        </>
    )
}

export default Home