/*

=========================================================
* Now UI Kit React - v1.4.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2020 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Redirect, HashRouter} from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.4.0";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/landingPage/LoginPage.js";
import LandingPage from "views/landingPage/LandingPage.js";
import ProfilePage from "views/landingPage/ProfilePage.js";
import MainNavbar from "./views/landingPage/childComponents/MainNavbar";
import Vision from "./views/vision/Vision";
import ContactUs from "views/contactUs";

ReactDOM.render(
    // <BrowserRouter>
    //     <Switch>
    //         <Switch>
    //             <Route
    //                 path="/"
    //                 render={(props) => <LandingPage {...props} />}
    //                 exact
    //             />
    //             <Route
    //                     path="/index"
    //                 render={(props) => <Index {...props} />}
    //             />
    //             {/*<Route*/}
    //             {/*    path="/nucleo-icons"*/}
    //             {/*    render={(props) => <NucleoIcons {...props} />}*/}
    //             {/*/>*/}
    //             <Route
    //                 path="/landing-page"
    //                 render={(props) => <LandingPage {...props} />}
    //             />
    //             <Route
    //                 path="/profile-page"
    //                 render={(props) => <ProfilePage {...props} />}
    //             />
    //             <Route
    //                 path="/login-page"
    //                 render={(props) => <LoginPage {...props} />}
    //             />
    //             {/*<Redirect to="/landing-page" />*/}
    //             {/*<Redirect from="/" to="/landing-page" />*/}
    //         </Switch>
    //     </Switch>
    // </BrowserRouter>,
    <div>
        <HashRouter>
            <MainNavbar />
            <Switch>
                <Route path="/" component={LandingPage} exact />
                <Route path="/components" component={Index} />
                <Route path="/vision" component={Vision} />
                <Route path="/contact-us" component={ContactUs} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/login" component={LoginPage} />
                <Route path="/icons" component={NucleoIcons} />
            </Switch>
        </HashRouter>
    </div>,
    document.getElementById("root")
);
