import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "react-datetime/css/react-datetime.css";
import AdminLayout from "layouts/Admin/Admin.js";
import RTLLayout from "layouts/RTL/RTL.js";
import Form from "views/Signup/Form"
import Login from "views/login/Login"

import axios from "axios";
import { UidContext } from "./AppContext";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";



const App = () => {
    const [uid, setUid] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchToken = async () => {
          await axios({
            method: "get",
            url: `http://localhost:3002/jwtid`,
            withCredentials: true,
          })
            .then((res) => {
                console.log(res);
                setUid(res.data);
            })
            .catch((err) => console.log("No token"));
        };
        fetchToken();
    
        if (uid) dispatch(getUser(uid));
      }, [uid]);
    

  return (
    <UidContext.Provider value={uid}>
        <Switch>
            <Route path='/signup' exact> <Form /> </Route>
            <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
            <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
            <Redirect from="/" to="/login" />
        </Switch>
    </UidContext.Provider>
  );
};

export default App ;