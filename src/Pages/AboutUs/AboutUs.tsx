import Image from "../../components/Ui/Image";
import { imagePortfolio } from "../../Utils/constants";
import Button from "../../components/Ui/ButtonLink";
import Description from "../../components/Description/Description";
import Skills from "../../components/Skills/Skills";
import PageTitle from "../../components/Ui/PageTitle";

interface IAboutUsProps {}
// eslint-disable-next-line no-empty-pattern
const AboutUs = ({}: IAboutUsProps) => {
  return (
    <section className="">
      {/* <BackWave /> */}
      {/* title of page  */}
      <PageTitle title="about us" currentPage="about" />
      {/* introduction about me */}
      <main className="py-12 container my-5 mx-auto">
        <section className="bg-secondary p-7 rounded-2xl my-5">
          <section className="flex items-center justify-center space-x-10">
            <Image
              imageURL={imagePortfolio}
              className="rounded-full w-28 h-28"
            />
            <section className="text-white ">
              <p className="tracking-wider text-3xl">Khaled Ellithy</p>
              <p className="text-primary text-xl">Front End Developer</p>
            </section>
            {/* description about me */}
          </section>
          <Description className="text-neutral-300 leading-8 space-y-4 my-4" />

          <Button
            title="more details"
            className="uppercase main-btn hover:bg-transparent hover:text-primary outline-primary outline-1 hover:outline transition-all duration-200"
            width="w-40"
            height="h-11"
            to={""}
          />
        </section>

        <Skills />
      </main>
    </section>
  );
};

export default AboutUs;
