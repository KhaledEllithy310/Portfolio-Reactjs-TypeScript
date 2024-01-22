interface IDescriptionProps {
  className: string;
}
// eslint-disable-next-line no-empty-pattern
const Description = ({ className }: IDescriptionProps) => {
  return (
    <section>
      <ul className={` ${className}`}>
        <li>
          I have a passion for programming and coding, always looking for new
          tools and improving my skills through continuous self-learning and
          coding a long, design responsive websites using HTML5, CSS3, Sass,
          Bootstrap, Tailwind CSS, Angular Material, Material UI (MUI), JavaScript, TypeScript, ES6, and also JS
          frameworks like ReactJS and Angular.
        </li>
        <li>
          I hold a Bachelor of Civil Engineering from Mansoura University with
          an Accumulative Grade of Very Good with Honor. And also holds
          <a
            href="https://www.linkedin.com/in/khaled-ellithy-74933826b/"
            className="text-primary pl-1 hover:underline"
            target="_blank"
          >
            a 4-month Diploma from the Information Technology Institute (ITI)
          </a>
          , Full Stack Web Development Using PHP Track, New Capital Branch,
          Intake 43, And also holds a Web Development program using Angular and
          Nodejs from
          <a
            href="https://www.linkedin.com/in/khaled-ellithy-74933826b/"
            className="text-primary pl-1 hover:underline"
            target="_blank"
          >
            the National Telecommunication Institute (NTI).
          </a>
        </li>
        <li>
          My studies in ITI and NTI enabled me to work under pressure, Ability
          to work as an effective team member and individual, the ability to
          adapt to changing work environments.
        </li>
        <li>
          I spent two and a half years working as a Site and Design Engineer at
          Damietta Port in the Civil Engineering field.
          <span className="text-primary pl-1 underline">
            During this time, I also began studying programming fundamentals,
            object-oriented programming(OOP) with Java programming language, and
            data structures
          </span>
          . This interest in technology led me to seek a new challenge in a
          different field. I chose web development as my new area of focus,
          believing it aligns better with my passion. To prepare myself for this
          new career path, I took a frontend diploma and underwent training at
          EraaSoft Academy. I continued my learning journey through various
          resources, including YouTube tutorials and courses on Udemy."
        </li>
        <li>
          My tenure in the civil engineering field honed my abilities to thrive
          under pressure, adapt swiftly to evolving circumstances, and
          collaborate effectively with various stakeholders. This experience has
          instilled in me the importance of clear communication, critical
          thinking, and meticulous attention to detail, all of which are
          integral to my current role as a web developer
        </li>
        <li>
          I am highly motivated to expand my professional skill set and
          contribute my full potential to achieving success. I am eager to learn
          new technologies and techniques, continuously embracing opportunities
          for growth.
        </li>
      </ul>
    </section>
  );
};

export default Description;
