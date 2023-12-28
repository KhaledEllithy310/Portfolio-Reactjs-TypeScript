import { contactInfo, socialMedia } from '../../Data'
import FormContact from '../../components/FormContact/FormContact'
import Image from '../../components/Ui/Image'
import PageTitle from '../../components/Ui/PageTitle'
import SecondaryTitle from '../../components/Ui/SecondaryTitle'

interface IContactUsProps {}
// eslint-disable-next-line no-empty-pattern
const ContactUs = ({}: IContactUsProps) => {
  return (
    <section>
      <PageTitle currentPage='contact' title='contact us' />
      <main className='container'>
        <p className='text-white font-bold text-center py-10 text-3xl capitalize'>
          let's contact
        </p>

        <section>
          {/* follow me */}
          <section>
            <SecondaryTitle title='follow me' />
            <section className='grid grid-cols-1 md:grid-cols-4 gap-3'>
              {socialMedia.map((item, index) => {
                return (
                  <section
                    key={index}
                    className=' rounded-md p-4 border border-white/[.2] hover:border-primary  hover:shadow-primary shadow-md bg-secondary'
                  >
                    <a href={item.link}>
                      <Image
                        imageURL={item.img}
                        className='rounded w-32 h-16 mx-auto '
                      />
                      <span className='block capitalize m-5 text-center text-neutral-200 text-lg font-medium leading-5'>
                        {item.title}
                      </span>
                    </a>
                  </section>
                )
              })}
            </section>
          </section>
        </section>
        {/* contact info */}
        <section className='grid grid-cols-1 sm:grid-cols-2 gap-10 py-4'>
          <section className='sm:order-2'>
            <SecondaryTitle title='contact info' />
            <section className='grid grid-cols-1 md:grid-cols-2 justify-start gap-3'>
              {contactInfo.map((item, index) => {
                return (
                  <section
                    key={index}
                    className=' rounded-md p-4 border border-white/[.2] hover:border-primary  hover:shadow-primary shadow-md bg-secondary'
                  >
                    <a href={item.link}>
                      <Image
                        imageURL={item.img}
                        className='rounded w-20 h-10 md:w-32 md:h-16 mx-auto '
                      />
                      <span className='block capitalize m-5 text-center text-neutral-200 text-lg font-medium leading-5'>
                        {item.title}
                      </span>
                    </a>
                  </section>
                )
              })}
            </section>
          </section>
          <FormContact />
        </section>
      </main>
    </section>
  )
}

export default ContactUs
