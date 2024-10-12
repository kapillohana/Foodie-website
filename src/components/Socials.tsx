import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";

// Define the type for the props
interface SocialsProps {
  containerStyles: string;
  iconStyles: string;
}

const socials = [
  { icon: <FaGithub />, path: "https://github.com/your-profile" },
  { icon: <FaLinkedinIn />, path: "https://linkedin.com/in/your-profile" },
  { icon: <FaFacebook />, path: "https://facebook.com/your-profile" },
  { icon: <FaTwitter />, path: "https://twitter.com/your-profile" },
];

const Socials: React.FC<SocialsProps> = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link key={index} href={social.path} target="_blank">
          <span className={iconStyles}>
            {social.icon}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
