import PageTitle from '../../components/Ui/PageTitle'
import TabsProjects from '../../components/Ui/TabsProjects'

interface IPortfolioProps {}
// eslint-disable-next-line no-empty-pattern
const portfolio = ({}: IPortfolioProps) => {
  return (
    <>
      <PageTitle currentPage='portfolio' title='my portfolio' />

      <section className='container'>
        <section className='py-9 md:py-10'>
          <p className='capitalize text-lg md:text-3xl text-white font-bold'>
            Latest Featured Projects
          </p>
          <p className='text-sm md:text-lg pt-2 text-neutral-300 font-bold'>
            let's check my projects, for each project you can check project
            details & Live deployment.
          </p>
        </section>
        <TabsProjects />
      </section>
    </>
  )
}

export default portfolio
