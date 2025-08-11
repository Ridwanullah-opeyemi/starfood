import { useContext, useState } from "react"
import product from "/public/data/products.json"
import { productContext } from "../../contexts/ProductContext"

const SearchInput = () => {
    const {searchQuary,setsearchQuary,filterProduct} = useContext(productContext)
    const [usershow, setusershow] = useState(false)
    const [locationtt, setlocationtt] = useState(false)
    const [locatspin, setlocatspin] = useState(false)
    const [cartboxshow, setcartboxshow] = useState(false)
    const [showsign, setshowsign] = useState(false)


    const handleprofileclick = () => {
        setshowsign(!showsign)
    }
    const handleclose = () => {
        setshowsign(!showsign)
    }



    
        const handleinput = (e)=>{
            const search = e.target.value
            setsearchQuary(search)
        }



    const handlelocationbox = () => {
        setlocationtt(true)
    }


    const handlecartbox = () => {
        setcartboxshow(true)
    }

    const handlecarfbox = () => {
        setcartboxshow(false)
    }

    const handlelocatspin = (e) => {
        setlocatspin(true)
        if (!e.target.value) {
            setlocatspin(false)
        }

        if (e.target.value.strim() == "") {
            setlocatspin(false)
        }
    }


    const handlelocafionbox = () => {
        setlocationtt(false)
    }





    return {
        handleinput,
        searchQuary,
        locationtt,
        cartboxshow,
        handleprofileclick,
        handlelocationbox,
        showsign,
        handleclose,
        handlelocafionbox,
        handlecartbox,
        handlelocatspin,
        locatspin,
        handlecarfbox
    }
}

export default SearchInput