import { skills } from "../../Data";
import Image from "../Ui/Image";

interface ISkillsProps {}
// eslint-disable-next-line no-empty-pattern
const Skills = ({}: ISkillsProps) => {
  return (
    <section>
      <main className="py-12">
        <header className="text-center pb-5">
          <p className="capitalize text-primary text-2xl">my skills</p>
          <p className="capitalize text-white text-3xl my-3">
            Languages, Technologies & Tools
          </p>
        </header>
        <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-5 ">
          {skills.map((skill) => (
            <div
              className="bg-secondary rounded-md text-center p-3 outline-primary outline-1 hover:outline hover:shadow-primary shadow-md"
              key={skill.title}
            >
              <Image
                imageURL={skill.img}
                className="w-11 h-11 mx-auto md:w-20 md:h-24"
              />
              <p className="text-neutral-200 text-sm md:text-lg ">
                {skill.title}
              </p>
            </div>
          ))}
        </section>
      </main>
    </section>
  );
};

export default Skills;
