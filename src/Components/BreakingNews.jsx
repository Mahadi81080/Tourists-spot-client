import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex gap-4 bg-gray-100 py-2 px-4 my-5 -z-20">
      <button className="btn bg-red-600 text-white">Latest</button>
      <Marquee pauseOnHover={true} speed={80}>
        Welcome to our premier tourist management website.Where every click
        brings you closer to your next unforgettable experience
      </Marquee>
    </div>
  );
};

export default BreakingNews;
