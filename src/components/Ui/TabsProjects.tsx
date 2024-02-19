import { Tab } from '@headlessui/react'
import Image from './Image'
import Button from './ButtonLink'
import { Eye, Info } from 'lucide-react'
import { projects } from '../../Data'

function classNames (...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const TabsProjects = () => {
  return (
    <div className='w-full'>
      <Tab.Group>
        <Tab.List className='flex space-x-1 rounded-xl bg-secondary p-1'>
          {Object.keys(projects).map(category => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5 text-sm leading-5 capitalize',
                  'focus:outline-none',
                  selected
                    ? 'bg-white text-secondary shadow font-bold'
                    : 'text-neutral-200 border border-white/[.2] hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {Object.values(projects).map((projects, idx) => {
            return (
              <Tab.Panel
                key={idx}
                className={classNames(
                  'rounded-xl bg-transparent p-3',
                  'focus:outline-none'
                )}
              >
                <main className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                  {projects.map((project, index) => (
                    <section
                      key={index}
                      className='project-item rounded-md p-4 border border-white/[.2] hover:border-primary  bg-secondary'
                    >
                      <section className='w-full h-44 overflow-hidden rounded-md'>
                        <Image
                          imageURL={project.img}
                          className='rounded-md w-full h-full object-cover object-top'
                        />
                      </section>
                      <section className='space-y-3 p-2'>
                        <h3 className='capitalize text-center text-neutral-200 text-lg font-semibold leading-6'>
                          {project.title}
                        </h3>

                        <ul className='flex items-center justify-center gap-2 mb-3'>
                          {project.techs.map((tech, index) => (
                            <img
                              src={tech}
                              key={index}
                              alt='tech'
                              className='w-8 h-8'
                            />
                          ))}
                        </ul>

                        <section className='mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500 justify-center gap-3'>
                          <Button
                            title='info'
                            className='sec-btn py-1 text-[14px]'
                            height='h-8'
                            target='_blank'
                            to={project.GitHub}
                          >
                            <Info size={20} strokeWidth={1} />
                          </Button>
                          {project.demo && (
                            <Button
                              title='preview'
                              className='main-btn text-[14px] cursor-pointer font-bold'
                              width='w-32'
                              height='h-8'
                              target='_blank'
                              to={project.demo}
                            >
                              <Eye size={20} strokeWidth={1} />
                            </Button>
                          )}
                        </section>
                      </section>
                    </section>
                  ))}
                </main>
              </Tab.Panel>
            )
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
export default TabsProjects
