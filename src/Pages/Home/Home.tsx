import { Link } from "react-router-dom";
import Introduction from "../../components/Introduction/Introduction";
import Image from "../../components/Ui/Image";
import { imageHome } from "../../Data";

interface IHomeProps {}
// eslint-disable-next-line no-empty-pattern
const Home = ({}: IHomeProps) => {
  return (
    <section className="  container mx-auto">
      <main className="flex items-center gap-3 h-home">
        <Introduction name="khaled ellithy" jobTitle="front-end developer">
          I have a passion for programming and coding, always looking for new
          tools and improving my skills through continuous self-learning and
          coding a long, design responsive websites using HTML5, CSS3, Sass,
          Bootstrap, Tailwind CSS, Angular Material, Material UI (MUI),
          JavaScript, TypeScript, ES6, and also JS frameworks like ReactJS and
          Angular
          <Link to={"/about"} className="text-primary uppercase pl-1">
            more details ...
          </Link>
        </Introduction>
        <section className="hidden lg:block">
          <Image imageURL={imageHome} className="rounded-full" />
        </section>
      </main>
    </section>
  );
};

export default Home;
