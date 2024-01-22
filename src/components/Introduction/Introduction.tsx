import { ReactNode } from "react";
import Button from "../Ui/ButtonLink";

interface IIntroductionProps {
  name: string;
  jobTitle: string;
  children: ReactNode;
}
const Introduction = ({ name, jobTitle, children }: IIntroductionProps) => {
  return (
    <section className="leading-7 text-center mx-auto lg:text-left sm:mt-10">
      <p className="capitalize text-neutral-600 text-xl sm:text-2xl text-primary">
        hello there 👋,
      </p>
      <strong className="uppercase text-xl sm:text-6xl tracking-wider text-white font-bold">
        i'm {name}
      </strong>

      <p className="capitalize text-lg sm:text-3xl font-semibold  sm:leading-10 align-baseline text-primary underline-offset-8 underline sm:py-1">
        {jobTitle}
      </p>
      <p className="text-neutral-200 italic font-medium leading-6 pt-2 text-sm hidden sm:block">
        {children}
      </p>
      <section className="flex items-center space-x-3 md:space-x-5 mt-4 justify-center lg:justify-start">
        <Button
          title="resume"
          className="sec-btn py-2 w-24 sm:h-10 sm:w-32"
          to={
            "https://drive.google.com/file/d/1YC80H4AiTraksUmsHpFxKYdyOomC5guc/view?usp=sharing"
          }
          target="_blank"
        />
        <Button
          title="Portfolio"
          className="main-btn py-2 w-32 sm:h-10  sm:w-44"
          to={"/portfolio"}
        />
      </section>
    </section>
  );
};

export default Introduction;

// 2px 2px #000, -2px 2px #000, 2px -2px #000, -2px -2px #000, 5px 5px 0px rgba(0,0,0,.2)
