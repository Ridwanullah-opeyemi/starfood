import Carousel from "../carousel/carousel"
import Handpick from "../products/handpick"
import "./hooks/search.css"


const Notfound = () => {

    return (
        <>
            <Handpick />
            <div className="nfcon">
                <h2>Not Found</h2>
                <div className="statementn">No product march your search, <span>pleace rety order things</span></div>
            </div>
        </>
    )
}

export default Notfound