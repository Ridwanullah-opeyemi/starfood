import Allproduct from "../products/allproducts/allproduct"
import Discount from "../products/discount/discount"
import Handpick from "../products/handpick/handpickproducts"
import Restorance from "../products/restorance/restorance"
// import Handpick from "../products/handpick"
import "./hooks/search.css"


const Notfound = () => {

    return (
        <>
            <Handpick />
            <Restorance />
            <Discount />
            <Allproduct />
            <div className="nfcon">
                <h2>Not Found</h2>
                <div className="statementn">No product march your search, <span>pleace rety order things</span></div>
            </div>
        </>
    )
}

export default Notfound