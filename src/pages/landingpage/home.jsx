import { useContext } from "react";
import { productContext } from "../../contexts/ProductContext";
import { Link } from "react-router-dom";
import "../../App.css"
import Allproduct from "../../component/products/allproducts/allproduct";
import Handpick from "../../component/products/handpick/handpickproducts";
import GeneralSearch from "../../component/search/searchinput";
import Notfound from "../../component/search/notfound";
import Restorance from "../../component/products/restorance/restorance";
import Discount from "../../component/products/discount/discount";
// import "./darsh.css";

const LandingPage = () => {
    const { product,searchQuary,filterProduct } = useContext(productContext);
    const getrandomProduct = (product, count = 6) => {
        const shuffled = [...product].sort(() => 0.6 - Math.random())
        return shuffled.slice(0, count)
    }
    const handpick = getrandomProduct(product)
    return (
        <div className="boxcon">

            <div className="maincon">
                <div className="concarti">
                    <h2>Explore Categories</h2>

                    <div className="carcons">

                        <div className="cardscarti Restaurants">
                            <Link to="">
                                <div className="imgs">
                                    <img width={80} height={60} src="public/image/Restaurants.webp" alt="Restaurants" />
                                </div>
                                <h5>Restaurants</h5>
                            </Link>
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
                        <Restorance />
                        <Discount />
                        <Allproduct />
                    </>
                ) :
                    (filterProduct.length == 0 ? (
                        <Notfound />
                    ) : (
                        <GeneralSearch />
                    ))

                }
            {/* <Handpick/>

            {
                searchQuary.lenght === "" ? <GeneralSearch/> : <Allproduct />
            }

            <Notfound/> */}

            
        </div>
    );
};

export default LandingPage;
