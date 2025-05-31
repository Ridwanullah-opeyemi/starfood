import { useState } from "react"
import Signin from "./signin"
import Signup from "./signup"


const Signs = ({handleclose})=>{
    const [showsignin,setshowsignin] = useState(true)

    const toggleform = ()=>{
        setshowsignin(!showsignin)
    }
    return(
        <>
            <div>
                {
                    showsignin ? (
                        <Signin toggleForm={toggleform} handleClose={handleclose}/>
                    ) : (
                        <Signup toggleForm={toggleform} handleClose={handleclose}/>
                    )
                }
            </div>
        </>
    )
}

export default Signs