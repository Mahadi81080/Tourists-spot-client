import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Components/Footer";
import { Helmet } from "react-helmet";
 

 

const Root = () => {
    return (
        <div>
            <Helmet>
                <title>Zourney</title>
            </Helmet>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;