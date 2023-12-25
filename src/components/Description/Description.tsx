interface IDescriptionProps {
  className: string;
}
// eslint-disable-next-line no-empty-pattern
const Description = ({ className }: IDescriptionProps) => {
  return (
    <section>
      <ul className={` ${className}`}>
        <li>
          I have a passion for programming and code, always looking for new
          tools and improve my skills through continuous self-learning and code
          a long, design responsive websites using HTML5, CSS3, Sass, Bootstrap,
          Tailwind CSS, JavaScript, ES6, and also JS frameworks like ReactJS and
          Angular.
        </li>
        <li>
          I hold Bachelor of Civil Engineering of Mansoura University with
          Accumulative Grade Very Good with Honor. And also holds a 4-Month
          Diploma from Information Technology Institute (ITI), Full Stack Web
          Development Using PHP Track, New Capital Branch, Intake 43.
        </li>
        <li>
          My studies in ITI enabled me to work under pressure, Ability to work
          as an effective team member and individual, the ability to adapt to
          changing work environments.
        </li>
        <li>
          I worked for three years in Civil Engineering field at Damietta Port
          as a Site and Design Engineer but I decided to search about a new
          challenge in a new field as the Civil Engineering didn't fill my
          passion I choose “web development” field to be the new challenge. So,
          I started to invest in myself by taking a frontend diploma and
          training at EraaSoft academy and continuous self-learning from YouTube
          Tutorials & Udemy courses.
        </li>
        {/* <li>
          Plus, I experience of more than 3 years in voluntary work as a
          Volunteer in “LIFE MAKERS” Organization from 2011, which provided me
          with how to deal with people and take responsibility and people
          management and distribution of tasks.
        </li> */}
        <li>
          I am keen to develop my professional skills and ready to give all of
          my potential effort to make the work a success and open to learning
          new technologies and techniques with pleasure.
        </li>
      </ul>
    </section>
  );
};

export default Description;
