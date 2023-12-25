import { Link } from "react-router-dom";

interface IPageTitleProps {
  currentPage: string;
  title: string;
}
const PageTitle = ({ title, currentPage }: IPageTitleProps) => {
  return (
    <section className="bg-accent mt-16 p-10 shadow-lg shadow-white/[.3]">
      <p className="text-5xl capitalize mb-5 text-center text-secondary font-bold">
        {title}
      </p>
      <section className=" flex items-center justify-center text-secondary">
        <p className="text-xl  capitalize text-center ">
          <Link to="/home" className="hover:underline ">
            home
          </Link>
          - <span className="underline">{currentPage}</span>
        </p>
      </section>
    </section>
  );
};

export default PageTitle;
