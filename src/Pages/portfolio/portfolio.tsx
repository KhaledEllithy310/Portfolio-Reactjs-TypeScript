import PageTitle from "../../components/Ui/PageTitle";
import TabsProjects from "../../components/Ui/TabsProjects";

interface IPortfolioProps {}
// eslint-disable-next-line no-empty-pattern
const portfolio = ({}: IPortfolioProps) => {
  return (
    <>
      {/* <BackWave /> */}
      <PageTitle currentPage="portfolio" title="my portfolio" />
      <section className="container">
        <TabsProjects />
      </section>
    </>
  );
};

export default portfolio;
