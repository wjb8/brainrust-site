import Link from "next/link";
import { FaBandcamp, FaFacebook, FaInstagram } from "react-icons/fa";

const SocialMediaIcons = () => {
  return (
    <div className="flex space-x-2">
      <Link href="https://brainrustonline.bandcamp.com">
        <FaBandcamp size={24} />
      </Link>
      <Link href="https://www.facebook.com/your_username">
        <FaFacebook size={24} />
      </Link>
      <Link href="https://www.instagram.com/your_username">
        <FaInstagram size={24} />
      </Link>
    </div>
  );
};

export default SocialMediaIcons;
