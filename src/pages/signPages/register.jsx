import { Link } from "react-router-dom";
import useRegisterHooks from "./hooks/regisHook"
import "./register.css";
import PrivacyPolicy from "../../component/privacypolicy/PrivacyPolicy";

const Register = () => {
    const { handleForm, handleInput, isFormInvalid, Isloading,setVisible,visible, countries, user } = useRegisterHooks()
    return (
        <>
            <div className="resCon">
                <h5>MY ACCOUNT</h5>
                <form onSubmit={handleForm}>
                    <div>Register Here</div>

                    <div className="inplab">
                        <label htmlFor="fName">Full Name</label>
                        <input id="fName" name="fName" type="text" placeholder="user full name" onInput={handleInput} />
                    </div>

                    <div className="inplab">
                        <label htmlFor="email">Email Address</label>
                        <input id="email" name="email" type="email" placeholder="atexaple@gmail.com" onInput={handleInput} />
                    </div>

                    <div className="inplab">
                        <label htmlFor="Country">Country</label>
                        <select id="Country" name="Country" onChange={handleInput}>
                            <option value="">select</option>
                            {countries.map((country) => (
                                <option key={country.cca3} value={country.name.common}>
                                    {country.name.common}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="inplab">
                        <label htmlFor="tel">Phone Number</label>
                        <input id="tel" name="tel" type="number" placeholder="+2347086756356" onChange={handleInput} />
                    </div>

                    <div>
                        <label htmlFor="uDate">Date Of Birth</label>
                        <input id="uDate" name="uDate" type="date" placeholder="Date of birth" onChange={handleInput} />
                    </div>

                    <div className="inplab">
                        <label htmlFor="gender">Gender</label>
                        <select name="gender" id="gender" onChange={handleInput}>
                            <option value="">select</option>
                            <option>male</option>
                            <option>female</option>
                        </select>
                    </div>

                    <div className="inplab">
                        <label htmlFor="cite">Cite</label>
                        <select id="cite" name="cite" onChange={handleInput}>
                            <option value="">select</option>
                            <option>Ibadan</option>
                            <option>Lagos</option>
                            <option>Other</option>
                        </select>
                    </div>

                    <div className="inplab">
                        <label htmlFor="password">Password</label>
                        <input id="password" name="password" type="text" placeholder="password" onInput={handleInput} />
                    </div>

                    <div className="inplab">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input id="cpassword" name="cpassword" type="text" placeholder="Confirm Password" onInput={handleInput} />
                    </div>

                    {user.password && user.cpassword && user.password !== user.cpassword && (
                        <p className="error">Passwords do not match</p>
                    )}

                    <br /><br />

                    <div className="chech">
                        <input type="checkbox" />
                        <p>I have read and agree to the; <div className="pp" onClick={() => setVisible(true)}>Privacy Policy </div></p>
                    </div>

                    <div className="ppbox" style={{ display: visible ? 'block' : 'none' }}>
                        <PrivacyPolicy />
                        <button onClick={() => setVisible(false)}>Close</button>
                    </div>

                    <div className="chech">
                        <input type="checkbox" />
                        <p>Receive information about us via email</p>
                    </div>

                    <div className="btn">
                        <button disabled={isFormInvalid || isSubmitting} type="submit">
                            {Isloading ? (
                                <>
                                    <span className="spinner"></span> Registering...
                                </>
                            ) : (
                                "Register"
                            )}
                        </button>
                    </div>

                </form>
            </div>
        </>
    );
};

export default Register;
