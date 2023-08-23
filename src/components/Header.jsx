import { Banner1, Banner2, Banner3, Banner4, Banner5 } from "./../images/";
const images = [Banner1, Banner2, Banner3, Banner4, Banner5];
const Header = ({ title, image, type }) => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="relative w-full h-full">
        <img
          src={image ?? images[Math.floor(Math.random() * images.length)]}
          className="w-full h-full object-cover "
          alt=""
        />
      </div>
      <div className="absolute w-full h-screen bg-gradient-to-t from-black to-transparent top-0 z-10 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
          {title}
        </h1>
        {type && (
          <p className="text-sm mt-4 text-center text-green-500 bg-[#00000090] px-6 py-4 rounded-full">
            Welcome to RafRecipe, your passport to culinary advanture{" "}
            <br className="hidden md:block" /> Discover a treasure trove of
            delectabele recipes from aroud the globe.
          </p>
        )}
      </div>
    </div>
  );
};

export default Header;
