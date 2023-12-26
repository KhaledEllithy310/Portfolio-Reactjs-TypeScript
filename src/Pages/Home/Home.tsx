import Introduction from "../../components/Introduction/Introduction";
import Image from "../../components/Ui/Image";
import img from "/images/khaledEllithy.jpg";

interface IHomeProps {}
// eslint-disable-next-line no-empty-pattern
const Home = ({}: IHomeProps) => {
  return (
    <section className="  container mx-auto">
      {/* <main className="grid grid-cols-2 items-center mt-28  "> */}
      <main className="flex items-center gap-3 h-home">
        <Introduction name="khaled ellithy" jobTitle="front-end developer">
          I have a passion for programming and code, always looking for new
          tools and improve my skills through continuous self-learning and code
          a long, design responsive websites using HTML5, CSS3, Sass, Bootstrap,
          Tailwind CSS, JavaScript, ES6, and also JS frameworks like ReactJS.
        </Introduction>
        <section className="hidden lg:block">
          <Image imageURL={img} className="rounded-full" />
        </section>
      </main>
    </section>
  );
};

export default Home;
