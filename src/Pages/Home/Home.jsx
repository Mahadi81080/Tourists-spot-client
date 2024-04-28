import Banner from "../../Components/Banner";
import BreakingNews from "../../Components/BreakingNews";
import Countries from "../../Components/Countries";

import CustomerReview from "../../Components/CustomerReview";
import Discount from "../../Components/Discount";
import SpecificSpot from "../../Components/SpecificSpot";

const Home = () => {
  return (
    <div className="px-5 lg:px-10 z-0">
      
      <Banner></Banner>
      <BreakingNews></BreakingNews>
      <SpecificSpot></SpecificSpot>
      <Countries></Countries>
      <Discount></Discount>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
