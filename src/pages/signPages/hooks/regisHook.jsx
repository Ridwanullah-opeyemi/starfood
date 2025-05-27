import { useState, useEffect } from "react";

const useRegisterHooks = ()=>{
    const [countries, setCountries] = useState([]);
    const [Isloading, setIsloading] = useState(false);  
    const [visible, setVisible] = useState(false);


    const [user, setUser] = useState({
        fName: "",
        email: "",
        Country: "",
        tel: "",
        gender: "",
        cite: "",
        password: "",
        cpassword: ""
    });

    useEffect(() => {
        const fetchCountries = async () => {
            const res = await fetch("https://restcountries.com/v3.1/all");
            const data = await res.json();
            const sorted = data.sort((a, b) =>
                a.name.common.localeCompare(b.name.common)
            );
            setCountries(sorted);
        };
        fetchCountries();
    }, []);

    const handleInput = (e) => {
        const { value, name } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
    };

    const handleForm = (e) => {
        e.preventDefault();

        if (isFormInvalid) return;

        setIsloading(true);

        setTimeout(() => {
            console.log("Form submitted:", user);
            setIsloading(false);
        }, 2000);

    };

    const isFormInvalid =
        !user.fName ||
        !user.email ||
        !user.Country ||
        !user.tel ||
        !user.gender ||
        !user.cite ||
        !user.password ||
        !user.cpassword ||
        user.password !== user.cpassword;

    return{
        handleForm,
        handleInput,
        isFormInvalid,
        Isloading,
        countries,
        user,
        visible,
        setVisible
    }
}

export default useRegisterHooks;