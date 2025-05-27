import { Link } from "react-router-dom";
import "./signuphooks/signup.css";
import signHooks from "./signuphooks/signhooks"
import SearchInput from "../navigationbar/hooks";
import { useState } from "react";

const Signup = () => {
  const [errors, setErrors] = useState({
    fname: "",
    lname: "",
    email: "",
    numb: "",
  });
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    numb: "",
    referral: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;
    const newErrors = { ...errors };

    if (!formData.fname.trim()) {
      newErrors.fname = "First name is required";
      hasErrors = true;
    } else {
      newErrors.fname = "";
    }

    if (!formData.lname.trim()) {
      newErrors.lname = "Last name is required";
      hasErrors = true;
    } else {
      newErrors.lname = "";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      hasErrors = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      hasErrors = true;
    } else {
      newErrors.email = "";
    }

    if (!formData.numb.trim()) {
      newErrors.numb = "Phone number is required";
      hasErrors = true;
    } else if (!/^\d+$/.test(formData.numb)) {
      newErrors.numb = "Invalid phone number format";
      hasErrors = true;
    } else {
      newErrors.numb = "";
    }

    setErrors(newErrors);

    if (!hasErrors) {
      console.log("Form submitted:", formData);
    }
  };

  // const {handleusershowclose,usershow} = SearchInput()
  // const [usershow,setusershow] = useState(true)
  //   const handleusershowclose = ()=>{
  //       setusershow(!usershow)
  //   }
    const {handleusershowclose,usershow} = signHooks()

  return (
    <>
      <div className="signupCon"  style={{ display: usershow ? 'block' : 'none'}}>
        <h5>Sign Up</h5>
        <div className="signhead">Sign up to continue</div>
        <div className="close" onClick={handleusershowclose}>✕</div>
        <form onSubmit={handleSubmit}>
          <div className="nameCon">
            <div>
              <label htmlFor="fname">First Name</label>
              <input
                type="text"
                name="fname"
                id="fname"
                value={formData.fname}
                onChange={handleChange}
                className={`inputcone ${errors.fname ? " error" : "errorborder"}`}
              />
              <div className="nameErro">{errors.fname}</div> {/* Error for first name */}
            </div>
            <div>
              <label htmlFor="lname">Last Name</label>
              <input
                type="text"
                name="lname"
                id="lname"
                value={formData.lname}
                onChange={handleChange}
                className={errors.lname ? "error" : ""}
              />
              <div className="nameErro">{errors.lname}</div> {/* Error for last name */}
            </div>
            {/* Removed the combined nameErro div */}
          </div>

          <div className="email">
            <label htmlFor="email">Email</label>
            <div className={`inputcone ${errors.email ? "errorborder error" : ""}`}>
              <svg width="24" height="24" className={`text-[#ED5E3B] ${errors.email ? "error-icon" : ""}`} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 3.75H2.5C2.33424 3.75 2.17527 3.81585 2.05806 3.93306C1.94085 4.05027 1.875 4.20924 1.875 4.375V15C1.875 15.3315 2.0067 15.6495 2.24112 15.8839C2.47554 16.1183 2.79348 16.25 3.125 16.25H16.875C17.2065 16.25 17.5245 16.1183 17.7589 15.8839C17.9933 15.6495 18.125 15.3315 18.125 15V4.375C18.125 4.20924 18.0592 4.05027 17.9419 3.93306C17.8247 3.81585 17.6658 3.75 17.5 3.75ZM7.71094 10L3.125 14.2031V5.79687L7.71094 10ZM8.63281 10.8516L9.57812 11.7109C9.69334 11.8163 9.84384 11.8748 10 11.8748C10.1562 11.8748 10.3067 11.8163 10.4219 11.7109L11.3672 10.8516L15.8906 15H4.10938L8.63281 10.8516ZM12.2891 10L16.875 5.79687V14.2031L12.2891 10Z" fill="#14181F"></path>
              </svg>
              <input
                type="text"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
              />
            </div>
            <div className="mailErro">{errors.email}</div>
          </div>

          <div className="numb">
            <label htmlFor="numb">Phone Number</label>
            <div className={`inputcone ${errors.numb ? "errorborder error" : ""}`}>
              <input
                type="text"
                name="numb"
                id="numb"
                value={formData.numb}
                onChange={handleChange}
                className={errors.numb ? "error" : ""}
              />
            </div>
            <div className="mailErro">{errors.numb}</div>
          </div>

          <div className="referral">
            <label htmlFor="referral">Referral code (Optional)</label>
            <div className="inputcone">
              <input
                type="text"
                name="referral"
                id="referral"
                value={formData.referral}
                onChange={handleChange}
              />
            </div>
            <div className="mailErro"></div>
          </div>

          <div className="nbtnsignup">
            <button type="submit">Next</button>
          </div>
        </form>

        <div>
          Have an account ?<a href="./signin"> Sign In</a>
        </div>
      </div>
    </>
  );
};

export default Signup;