import "./dash.css"
import { useContext, useState } from "react"
import { productContext } from "../../../contexts/ProductContext"
import { Link, useParams } from "react-router-dom"

const Dash = () => {
  const {backgrangcolor,setbackgrangcolor} = useState(false)

  const backgrangchange = ()=>{
    setbackgrangcolor(!backgrangcolor)
  }
  const { product } = useContext(productContext)
  const { id } = useParams()
  const products = product.find(produc => produc.id === id)
  console.log(products);

  return (
    <div className="dars_con">
      
      <div className="dash_right_con">
        <div className="Dashback"><Link to={`/`}>←Restaurants</Link></div>

        <div className="dash_produc">
          <div className="dash_img"><img src={products.image} alt={products.name} /></div>

          <div className="dash_name_con">

            <div className="dash_product_name">
              <h1>{products.name}</h1>
              <div>
                <span>4.2</span>
                ⭐
                <span>(46)</span>
              </div>
            </div>
            
            <div className="dash_pick_deliver">
              <div className={backgrangcolor ? "" : "deliveryn"}>Deliver now</div>
              <div className="pickp">Pickup</div>
            </div>

          </div>
            <div className="name_search_">Pizza</div>

          <div></div>
          <div></div>
          
        </div>
      </div>  

      <div className="dash_left_con">

      </div>

      {/* <div key={i} className="s">
        <div className="__image-container">
          <img
            src={rest.image}
            alt={rest.name}
            className="__image"
          />
        </div>
        <div className="__info">
          <div className="__name-rating">
            <div className="__name">{rest.name}</div>
            <div className="__rating">
              ⭐{rest.rating}
            </div>
          </div>
          <div className="__delivery-time">
            🕒{rest.delivery_time}
          </div>
          <div className="__tags">
            {rest.tags && rest.tags.join(", ")}
          </div>
          <div className="__category">
            {rest.category}{" "}
            <span className="__location">
              {rest.location}
            </span>
          </div>
        </div>
      </div> */}
    </div>
  )
}
export default Dash