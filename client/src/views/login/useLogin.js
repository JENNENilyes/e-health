import { useState} from "react";
import axios from "axios";

const useLogin = (callback) => {
    const [values, setValues] = useState({
      
       email: '',
       password: ''
       
    });

    


    const [isSubmitting, setIsSubmitting] = useState(false);





const handleChange = e => {
    setValues({
        ...values,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = e => {
    e.preventDefault();

   
    setIsSubmitting(true);
    //console.log(values);

    axios.post("http://localhost:3002/login", {...values},{ withCredentials: true })
    .then( res => {
        if (res.data.error) {
            alert(res.data.error);

        } else {
          window.location = "/admin/icons";
          console.log(res)
        }
      })
    .catch( err => {
        console.log(err);
    })


  /*  const registered = {
        username: username,
        email: email,
        password: password
    }*/
};

return {handleChange, values, handleSubmit};
}

export default useLogin;