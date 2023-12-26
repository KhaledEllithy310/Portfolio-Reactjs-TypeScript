import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { logo } from "../../Data";

interface IFooterProps {
  className?: string;
}
const Footer = ({ className = "" }: IFooterProps) => {
  const iconsMedia = [
    {
      img: <Linkedin />,
      link: "https://www.linkedin.com/in/khaled-ellithy-74933826b/",
    },
    {
      img: <Github />,
      link: "https://github.com/KhaledEllithy310",
    },
    {
      img: <Mail />,
      link: "mailto:khaledellessy310@gmail.com",
    },
    {
      img: <Phone />,
      link: "tel:+201011282551",
    },
  ];

  const date = new Date();
  const currentYear = date.getFullYear();

  //--------RENDERS--------//

  const renderSocialIcons = iconsMedia.map((item) => (
    <li
      key={item.link}
      className="bg-background text-primary p-2 rounded-md hover:rotate-12 duration-200 hover:bg-primary hover:text-secondary"
    >
      <a href={item.link} target="_blank" aria-label="connect to me">
        {item.img}
      </a>
    </li>
  ));
  return (
    <footer className={`bg-secondary ${className} mt-auto`}>
      <section className="container py-2 flex flex-col gap-3 md:flex-row md:justify-between items-center justify-center">
        <section className="flex flex-shrink-0 items-center">
          <Link to={""}>
            <img className="h-14" src={logo} alt="logo" />
          </Link>
        </section>
        <strong className="text-white order-3 md:order-none">
          {currentYear} @
          <a
            className="tracking-widest text-primary pl-1"
            href="https://github.com/KhaledEllithy310"
            target="_blank"
          >
            Khaled Ellithy
          </a>
        </strong>
        <ul className="flex gap-2 items-center">{renderSocialIcons}</ul>
      </section>
    </footer>
  );
};

export default Footer;
