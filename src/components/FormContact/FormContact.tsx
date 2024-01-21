import { formContactInputs } from '../../Data'
import Input from '../Ui/Input'
import SecondaryTitle from '../Ui/SecondaryTitle'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IFormFields } from '../../Interfaces'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { PulseLoader } from 'react-spinners'
import Button from '../Ui/Button'
interface IFormContactProps {}
// eslint-disable-next-line no-empty-pattern
const FormContact = ({}: IFormContactProps) => {
  const form = useRef<HTMLFormElement>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  //----------HANDLERS----------//
  const contactSchema = z.object({
    name: z.string().min(3, 'first name is required at least 3 characters'),
    email: z.string().min(3, 'email is required').email('enter valid email'),
    message: z.string().min(10, 'message is required at least 10 characters'),
    subject: z.string().min(5, 'subject is required at least 5 characters')
  })

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<IFormFields>({
    mode: 'onChange',
    resolver: zodResolver(contactSchema)
  })
  const onSubmit: SubmitHandler<IFormFields> = () => {
    setIsLoading(true)
    if (form.current) {
      emailjs
        .sendForm(
          'service_phap7un',
          'template_uid0x6m',
          form.current,
          'g-cBTCaGufYxirBWj'
        )
        .then(
          () => {
            toast.success('Send your message successfully')
            setIsLoading(false)
            reset()
          },
          () => {
            toast.error('Send your message Failed')
          }
        )
    }
  }
  //----------RENDERS----------//

  const renderInputsForm = formContactInputs.map(item => (
    <Input
      id={item.id}
      label={item.label}
      name={item.name}
      type={item.type}
      key={item.id}
      register={register}
      errors={errors}
    />
  ))

  return (
    <div className='flex min-h-full flex-1 flex-col'>
      <SecondaryTitle title='start message me' />
      <div className='sm:mx-auto sm:w-full '>
        <form
          className='space-y-4'
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
        >
          {renderInputsForm}
          <div>
            <Button className='bg-primary w-full h-8 rounded-md font-bold text-secondary'>
              {' '}
              {isLoading ? <PulseLoader color='#000' size={5} /> : 'Send'}
            </Button>
          </div>
        </form>
        {/* <section className="overflow-hidden hidden md:block  ml-auto w-3/4  ">
          <img src={img} alt="" className="rounded-md h-96 w-full " />
        </section> */}
      </div>
    </div>
  )
}

export default FormContact
