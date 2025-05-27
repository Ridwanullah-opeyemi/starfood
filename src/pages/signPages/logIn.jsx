import "./login.css"

const LogIn = ()=>{
    
    return(
        <>
            <div>log in pages</div>
            <div className="loginCon">
                <form>
                    <div className="inpCon">
                        <label htmlFor="email">*Email:</label>
                        <input type="email" id="email" name="email" placeholder="Example@email.com"/>
                    </div>

                    <div className="inpCon">
                        <label htmlFor="password">*Password:</label>
                        <input type="text" id="password" name="password" placeholder="Enter your password"/>
                    </div>
                    <div className="inpCon">forget your password click here <a href="resetPassword">reset-password</a></div>
                    <div className="logbtn"><button type="submit">Login</button></div>
                </form>
            </div>
        </>
    )
}

export default LogIn