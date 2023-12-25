import { navigation } from "../../Data";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import ButtonLink from "../../components/Ui/ButtonLink";

interface INotFoundProps {}
// eslint-disable-next-line no-empty-pattern
const NotFound = ({}: INotFoundProps) => {
  return (
    <>
      <Navbar navigation={navigation} />
      <section className="container h-home flex items-center justify-center text-center">
        <section className="space-y-3">
          <p className="text-7xl font-bold text-primary capitalize">oops!</p>
          <p className="text-3xl text-white capitalize">404-page not found</p>
          <p className="text-sm text-white capitalize">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable
          </p>
          <ButtonLink
            to={""}
            className="main-btn"
            width="w-30"
            title=" go to homepage"
          />
        </section>
      </section>
      <Footer className="absolute right-0 left-0 bottom-0" />
    </>
  );
};

export default NotFound;
