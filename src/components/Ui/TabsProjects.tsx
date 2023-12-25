import { Tab } from "@headlessui/react";
import Image from "./Image";
import Button from "./ButtonLink";
import { Eye, Info } from "lucide-react";
import { projects } from "../../Data";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const TabsProjects = () => {
  // const [categories] = useState({
  //   React: [
  //     {
  //       img: "src/assets/images/projects/fashion.png",
  //       title: "fashion",
  //       demo: "https://fashion-store-umber.vercel.app/",
  //       GitHub: "https://github.com/KhaledEllithy310/Fashion-App-ReactJs",
  //     },
  //     {
  //       img: "src/assets/images/projects/fashion.png",
  //       title: "fashion",
  //       demo: "https://fashion-store-umber.vercel.app/",
  //       GitHub: "https://github.com/KhaledEllithy310/Fashion-App-ReactJs",
  //     },
  //     {
  //       img: "src/assets/images/projects/fashion.png",
  //       title: "fashion",
  //       demo: "https://fashion-store-umber.vercel.app/",
  //       GitHub: "https://github.com/KhaledEllithy310/Fashion-App-ReactJs",
  //     },
  //     {
  //       img: "src/assets/images/projects/fashion.png",
  //       title: "fashion",
  //       demo: "https://fashion-store-umber.vercel.app/",
  //       GitHub: "https://github.com/KhaledEllithy310/Fashion-App-ReactJs",
  //     },
  //   ],
  //   JS: [
  //     {
  //       img: "src/assets/images/projects/fashion.png",
  //       title: "fashion",
  //       demo: "https://fashion-store-umber.vercel.app/",
  //       GitHub: "https://github.com/KhaledEllithy310/Fashion-App-ReactJs",
  //     },
  //     {
  //       img: "src/assets/images/projects/fashion.png",
  //       title: "fashion",
  //       demo: "https://fashion-store-umber.vercel.app/",
  //       GitHub: "https://github.com/KhaledEllithy310/Fashion-App-ReactJs",
  //     },
  //     {
  //       img: "src/assets/images/projects/fashion.png",
  //       title: "fashion",
  //       demo: "https://fashion-store-umber.vercel.app/",
  //       GitHub: "https://github.com/KhaledEllithy310/Fashion-App-ReactJs",
  //     },
  //     {
  //       img: "src/assets/images/projects/fashion.png",
  //       title: "fashion",
  //       demo: "https://fashion-store-umber.vercel.app/",
  //       GitHub: "https://github.com/KhaledEllithy310/Fashion-App-ReactJs",
  //     },
  //   ],
  //   UI: [
  //     {
  //       img: "src/assets/images/projects/fashion.png",
  //       title: "fashion",
  //       demo: "https://fashion-store-umber.vercel.app/",
  //       GitHub: "https://github.com/KhaledEllithy310/Fashion-App-ReactJs",
  //     },
  //     {
  //       img: "src/assets/images/projects/fashion.png",
  //       title: "fashion",
  //       demo: "https://fashion-store-umber.vercel.app/",
  //       GitHub: "https://github.com/KhaledEllithy310/Fashion-App-ReactJs",
  //     },
  //     {
  //       img: "src/assets/images/projects/fashion.png",
  //       title: "fashion",
  //       demo: "https://fashion-store-umber.vercel.app/",
  //       GitHub: "https://github.com/KhaledEllithy310/Fashion-App-ReactJs",
  //     },
  //     {
  //       img: "src/assets/images/projects/fashion.png",
  //       title: "fashion",
  //       demo: "https://fashion-store-umber.vercel.app/",
  //       GitHub: "https://github.com/KhaledEllithy310/Fashion-App-ReactJs",
  //     },
  //   ],
  // });

  return (
    <div className="w-full py-16 ">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-secondary p-1">
          {Object.keys(projects).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm leading-5 capitalize",
                  "focus:outline-none",
                  selected
                    ? "bg-white text-secondary shadow font-bold"
                    : "text-neutral-200 border border-white/[.2] hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(projects).map((projects, idx) => {
            return (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl bg-transparent p-3",
                  "focus:outline-none"
                )}
              >
                <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {projects.map((project, index) => (
                    <section
                      key={index}
                      className=" rounded-md p-4 border border-white/[.2] hover:border-primary  bg-secondary"
                    >
                      <section className="relative w-full overflow-hidden h-44 rounded-md">
                        <Image
                          imageURL={project.img}
                          className="rounded-md  w-full  absolute top-0 z-0"
                        />
                      </section>
                      <h3 className="capitalize m-5 text-center text-neutral-200 text-lg font-semibold leading-5">
                        {project.title}
                      </h3>

                      <section className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500 justify-center gap-3">
                        <Button
                          title="info"
                          className="sec-btn py-1 text-[14px]"
                          height="h-8"
                          target="_blank"
                          to={project.GitHub}
                        >
                          <Info size={20} strokeWidth={1} />
                        </Button>
                        <Button
                          title="preview"
                          className="main-btn text-[14px] cursor-pointer"
                          width="w-32"
                          height="h-8"
                          target="_blank"
                          to={project.demo}
                        >
                          <Eye size={20} strokeWidth={1} />
                        </Button>
                      </section>
                    </section>
                  ))}
                </main>
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
export default TabsProjects;
