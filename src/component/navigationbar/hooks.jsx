import { useState } from "react"
import product from "/public/data/product.json"

const SearchInput = () => {
    const [filterpro,setfilterpro] = useState([])
    const [usershow,setusershow] = useState(false)
    const [searchvisible,setsearchvisible] = useState(false)
    const [locationtt,setlocationtt] = useState(false)
    const [locatspin,setlocatspin] = useState(false)
    const [cartboxshow,setcartboxshow] = useState(false)

   

    const handleinput = (e) => {
        const searchValue = e.target.value

        const filterProduct = product.filter(p => {
            console.log(searchValue);
            return p.name.toLowerCase().includes(searchValue.toLowerCase()) || p.description.toLowerCase().includes(searchValue.toLowerCase())
        })
        setfilterpro(filterProduct)
        setsearchvisible(true)

        if (!filterProduct) {
            setsearchvisible(false)
            return
        }
        if (!searchValue) {
            setsearchvisible(false)
            return
        }
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
        if (e.target.value.strim() === "") {
            setlocatspin(false)
        }
    }


    const handlelocafionbox = () => {
        setlocationtt(false)
    }


    const visible = ()=>{
        setsearchvisible(false)
        const g = document.getElementById("searchvalueid")
        g.value = ""
    }

    return {
        handleinput,
        filterpro,
        searchvisible,
        locationtt,
        visible,
        cartboxshow,
        handlelocationbox,
        handlelocafionbox,
        handlecartbox,
        handlelocatspin,
        locatspin,
        handlecarfbox
    }
}

export default SearchInput