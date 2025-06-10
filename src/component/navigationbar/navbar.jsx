import { Link } from "react-router-dom"
import "./nav.css"
import starfoodImage from '/image/starfood.png';
import { useContext, useState } from "react";
import { Cartcontexts } from "../../contexts/cartContexts";
import SearchInput from "./hooks";
import Signs from "../../signs/sign";
import { productContext } from "../../contexts/ProductContext";
import GenCart from "../generalcart/cart01";


const Nav = () => {
    const { getTotalQuantity } = useContext(productContext)


    const { handleinput, showsign, handleprofileclick, handleclose, searchQuary, cartboxshow, handlecarfbox, handlecartbox, handlelocatspin, locatspin, locationtt, handlelocafionbox, handlelocationbox } = SearchInput()
    // console.log(filterpro    );




    return (
        <>
            <header>
                <nav>
                    <div className="navcon">
                        <div className="logoloca">
                            <img src={starfoodImage} alt={starfoodImage} width={50} />
                            <div className="location" onClick={handlelocationbox}>
                                <svg width="12" height="17" class="mr-2" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 1.9195e-06C5.21189 -0.000626077 4.43139 0.152847 3.70315 0.45164C2.97491 0.750433 2.31323 1.18868 1.75595 1.74132C1.19867 2.29395 0.756739 2.95012 0.455435 3.67229C0.154131 4.39446 -0.000631338 5.16846 1.93563e-06 5.95C1.93563e-06 10.4125 6 17 6 17C6 17 12 10.4125 12 5.95C12.0006 5.16846 11.8459 4.39446 11.5446 3.67229C11.2433 2.95012 10.8013 2.29395 10.2441 1.74132C9.68678 1.18868 9.02509 0.750433 8.29685 0.45164C7.56861 0.152847 6.78811 -0.000626077 6 1.9195e-06ZM6 8.075C5.57618 8.075 5.16188 7.95037 4.80949 7.71687C4.4571 7.48338 4.18245 7.1515 4.02026 6.7632C3.85807 6.37491 3.81564 5.94764 3.89832 5.53543C3.981 5.12323 4.18509 4.74459 4.48477 4.4474C4.78446 4.15021 5.16628 3.94783 5.58195 3.86583C5.99762 3.78384 6.42848 3.82592 6.82004 3.98676C7.21159 4.14759 7.54626 4.41996 7.78172 4.76941C8.01718 5.11887 8.14286 5.52972 8.14286 5.95C8.14254 6.51349 7.91667 7.05381 7.51488 7.45225C7.11308 7.8507 6.56822 8.07469 6 8.075Z" fill="#02C27F"></path></svg> select location <svg width="7" height="6" class="ml-1 mt-0.5" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.70711 1.70711C10.0976 1.31658 10.0976 0.683417 9.70711 0.292893C9.31658 -0.0976311 8.68342 -0.0976311 8.29289 0.292893L9.70711 1.70711ZM5 5L4.29289 5.70711C4.68342 6.09763 5.31658 6.09763 5.70711 5.70711L5 5ZM1.70711 0.292893C1.31658 -0.0976311 0.683417 -0.0976311 0.292893 0.292893C-0.0976311 0.683417 -0.0976311 1.31658 0.292893 1.70711L1.70711 0.292893ZM8.29289 0.292893L4.29289 4.29289L5.70711 5.70711L9.70711 1.70711L8.29289 0.292893ZM5.70711 4.29289L1.70711 0.292893L0.292893 1.70711L4.29289 5.70711L5.70711 4.29289Z" fill="#14181F"></path></svg>
                            </div>
                        </div>

                        <div className="usercon">
                            <div className="searchCon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" /></svg>
                                <input type="text" placeholder="search starfood..." onChange={handleinput} value={searchQuary} id="searchvalueid" />
                            </div>

                            {/* add box invisible once  */}
                            <div className={locationtt ? 'locationbox' : 'locationboxf'} >
                                <div className="titlelo">
                                    <h5>Delivery address</h5>
                                    <div className="cansleloc" onClick={handlelocafionbox}>✕</div>
                                </div>
                                <div className="searchlocat">
                                    <div><svg width="12" height="17" class="mr-2" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 1.9195e-06C5.21189 -0.000626077 4.43139 0.152847 3.70315 0.45164C2.97491 0.750433 2.31323 1.18868 1.75595 1.74132C1.19867 2.29395 0.756739 2.95012 0.455435 3.67229C0.154131 4.39446 -0.000631338 5.16846 1.93563e-06 5.95C1.93563e-06 10.4125 6 17 6 17C6 17 12 10.4125 12 5.95C12.0006 5.16846 11.8459 4.39446 11.5446 3.67229C11.2433 2.95012 10.8013 2.29395 10.2441 1.74132C9.68678 1.18868 9.02509 0.750433 8.29685 0.45164C7.56861 0.152847 6.78811 -0.000626077 6 1.9195e-06ZM6 8.075C5.57618 8.075 5.16188 7.95037 4.80949 7.71687C4.4571 7.48338 4.18245 7.1515 4.02026 6.7632C3.85807 6.37491 3.81564 5.94764 3.89832 5.53543C3.981 5.12323 4.18509 4.74459 4.48477 4.4474C4.78446 4.15021 5.16628 3.94783 5.58195 3.86583C5.99762 3.78384 6.42848 3.82592 6.82004 3.98676C7.21159 4.14759 7.54626 4.41996 7.78172 4.76941C8.01718 5.11887 8.14286 5.52972 8.14286 5.95C8.14254 6.51349 7.91667 7.05381 7.51488 7.45225C7.11308 7.8507 6.56822 8.07469 6 8.075Z" fill="#02C27F"></path></svg></div>
                                    <input type="text" placeholder="Enter a new address" onChange={handlelocatspin} />
                                    <div className={locatspin ? "spinner" : 'd'} ></div>
                                </div>
                                <div style={{ display: "none" }}>f</div>
                            </div>


                            <div className={cartboxshow ? " cartboxshow cartbox" : "cartbox"}>
                                <nav>
                                    <div className="cartflex">
                                        <h5>Checkout</h5>
                                        <div className="carttexcon">

                                            <svg xmlns="http://www.w3.org/2000/svg" height="14px" viewBox="0 -960 960 960" width="14px" fill="#000000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
                                            Cart <span className="cartnumb">{getTotalQuantity()}</span>
                                        </div>
                                    </div>
                                    <div className="closexcart" onClick={handlecarfbox}>✕</div>
                                </nav>
                                <div className="cartitemcon">
                                    {
                                        getTotalQuantity() === 0  ? 'jjjjjjj' : (
                                            <div className="gcart">
                                                <GenCart/>
                                            </div>
                                        )
                                    }
                                </div>
                                <footer>

                                </footer>
                            </div>

                            <div className="cartuser">
                                <div className="cart" onClick={handlecartbox}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#000000"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
                                </div>
                                <div className="userPofile" onClick={handleprofileclick}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" /></svg>
                                </div>
                                {
                                    showsign && (
                                        <div className="">
                                            <Signs handleclose={handleclose} />
                                        </div>
                                    )
                                }
                            </div>
                        </div>

                    </div>

                </nav>
            </header>

        </>
    )
}

export default Nav