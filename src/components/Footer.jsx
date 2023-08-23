import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Button from "../components/Button";
import FooterIcon from "./FooterIcon";

const Footer = () => {
  return (
    <footer className="text-white py20 bg_gradient">
      <div className="container mx-auto p-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800">
        <div className="flex">
          <p className="font-bold text-center">
            Flavor <span className="text-green-500 text-xl">Verse</span>
          </p>
        </div>

        <div>
          <p className="text-xl">Links</p>
          <div className="flex flex-col text-start m-2 md:mb-0">
            {Links.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block md:inline-block py-2 hover:text-gray-500"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xl">Legal</p>
          <div className="flex flex-col text-start m-2 md:mb-0">
            {Leagal.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block md:inline-block py-2 hover:text-gray-500"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <p className="text-xl">Social Media</p>
          <div className="flex mt-4 gap-3">
            <FooterIcon>
              <FaFacebook size={20} />
            </FooterIcon>
            <FooterIcon background="bg-red-400">
              <FaInstagram size={20} />
            </FooterIcon>
            <FooterIcon>
              <FaTwitter size={20} />
            </FooterIcon>
            <FooterIcon background="bg-red-600">
              <FaYoutube size={20} />
            </FooterIcon>
          </div>

          <Button
            title="SignUp"
            btnType="button"
            className="mt-10 md:block bg-transparent border  border-white text-white hover:bg-white hover:text-black rounded-md min w-[130px]"
          />
        </div>
      </div>

      <div className=" flex items-center justify-center py-10">
        <span className="text-gray-400 leading-10">Rafi &copy; 2023</span>
      </div>
    </footer>
  );
};

export default Footer;

const Links = ["Home", "About", "Services", "Contact"];
const Leagal = [
  " Terms and Conditions",
  " License Agreement",
  "Privacy Policy",
  "Copyright Information",
];
