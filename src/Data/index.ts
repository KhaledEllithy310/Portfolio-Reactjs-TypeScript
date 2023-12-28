import { IFormInputs, INavigation } from '../Interfaces'

export const imagePortfolio = 'images/portfolio.jpg'
export const logo = 'images/logo/logo-no-background.png'

export const navigation: INavigation[] = [
  { name: 'home', to: '/' },
  { name: 'about us', to: '/about' },
  { name: 'portfolio', to: '/portfolio' },
  { name: 'contact us', to: '/contact' }
]

export const icons = {
  HTML5: 'images/skills/html5-b92ca3bd122ef4c64385c4f07b471066.svg',
  css3: 'images/skills/css3-15281a0c52e1ac225b0dfaf6b9107680.svg',
  sass: 'images/skills/sass-58b7b983fb6ca88ef000f6a4a67b1bf1.svg',
  js: 'images/skills/js-2c4ec503447402632078448b9a2fc3c5.svg',
  json: 'images/skills/json-6195223b408e7af788b06bc0551950e9.svg',
  react: 'images/skills/react-0684e30bc2880e8f5653ad10cb013c3d.svg',
  redux: 'images/skills/redux-c5ef0cbd5c88c3f96af34f240c381f5c.svg',
  jquery: 'images/skills/jquery-5950d73858107e461167086d6d1e5221.svg',
  mui: 'images/skills/mui-87578f3359b2854b375a80f816ca44b2.svg',
  tailwindcss: 'images/skills/tailwindcss-5d736727cafaccb8b5c1fe3494cbadbb.svg',
  bootstrap: 'images/skills/bootstrap-1a778fc54b668dcfb286171a15a44e51.svg',
  babel: 'images/skills/babel-39f0c236a9e331d432bd1ec8bf6f939a.svg',
  eslint: 'images/skills/eslint-9ee9c392ddbc3047a134c57665a090b6.svg',
  prettier: 'images/skills/prettier-96898e2dabeea1187179f1ec7af0b155.svg',
  webpack: 'images/skills/webpack-734d7af31835cc66b86286aa41f44c45.svg',
  npm: 'images/skills/npm-2c362bda3c7fcda8ec0c3cd014152814.svg',
  yarn: 'images/skills/yarn-ec97d84451f8bcf92b106b9af4e61730.svg',
  git: 'images/skills/git-c48f39e00e31d8db9130429c62fbd8bc.svg',
  github: 'images/skills/github-b73ecc0b025b4099f6929fc819d8ec15.svg',
  vsc: 'images/skills/vsc-3369422dfade20c8eb7b55665fdc8190.svg',
  linkedin: 'images/social/linkedin-373323c39c51215dbcdfb981db3817f3.svg',
  gmail: 'images/social/gmail-33a78295f8d77a99449e837cea7dae9e.svg',
  whatsapp: 'images/social/whatsapp-c8cdd8f441263251f5b6bd1c7e10ab88.svg',
  medium: 'images/social/medium-84479c28dabaae629a0a4f0a588e76b4.svg',
  devto: 'images/social/devto-30cc16300608567af5ac3902a293fa13.svg',
  github2: 'images/social/github-a2eafb2af9a1dcc15adc5435778e9625.svg',
  angular: 'images/skills/Angular.svg',
  Typescript: 'images/skills/TypeScript.svg',
  Vite: 'images/skills/Vite.js.svg',
  reactBootstrap: 'images/skills/React Bootstrap.svg'
}
export const skills = [
  {
    img: icons.HTML5,
    title: 'HTML5'
  },
  {
    img: icons.css3,
    title: 'CSS3'
  },
  {
    img: icons.sass,
    title: 'Sass'
  },
  {
    img: icons.js,
    title: 'JavaScript'
  },
  {
    img: icons.json,
    title: 'JSON'
  },
  {
    img: icons.Typescript,
    title: 'Typescript'
  },
  {
    img: icons.reactBootstrap,
    title: 'React Bootstrap'
  },
  {
    img: icons.angular,
    title: 'angular'
  },
  {
    img: icons.react,
    title: 'React'
  },
  {
    img: icons.redux,
    title: 'Redux'
  },
  {
    img: icons.jquery,
    title: 'Jquery'
  },
  {
    img: icons.mui,
    title: 'Material UI'
  },
  {
    img: icons.tailwindcss,
    title: 'Tailwind-CSS'
  },
  {
    img: icons.bootstrap,
    title: 'Bootstrap'
  },
  {
    img: icons.babel,
    title: 'Babel'
  },
  {
    img: icons.eslint,
    title: 'EsLint'
  },
  {
    img: icons.prettier,
    title: 'Prettier'
  },
  {
    img: icons.webpack,
    title: 'Webpack'
  },
  {
    img: icons.npm,
    title: 'NPM'
  },
  {
    img: icons.yarn,
    title: 'Yarn'
  },
  {
    img: icons.git,
    title: 'Git'
  },
  {
    img: icons.github,
    title: 'Github'
  },
  {
    img: icons.vsc,
    title: 'v.s Code'
  }
]

export const projects = {
  'react.js': [
    {
      img: 'images/projects/fashion.png',
      title: 'fashion e-commerce platform',
      demo: 'https://fashion-store-umber.vercel.app/',
      GitHub: 'https://github.com/KhaledEllithy310/Fashion-App-ReactJs',
      techs: [icons.css3, icons.js, icons.react, icons.mui, icons.redux],
      isLong: true
    },
    {
      img: 'images/projects/homeproductbuilder.png',
      title: 'Product Builder',
      demo: 'https://product-builder-virid.vercel.app/',
      GitHub:
        'https://github.com/KhaledEllithy310/React.js-TypeScript-Product-Builder',
      techs: [
        icons.css3,
        icons.Typescript,
        icons.react,
        icons.tailwindcss,
        icons.Vite
      ],
      isLong: true
    },
    {
      img: 'images/projects/portfolio.png',
      title: 'my website',
      demo: 'https://khaledellithy-portfolio.vercel.app/',
      GitHub:
        'https://github.com/KhaledEllithy310/Portfolio-Reactjs-TypeScript',
      techs: [
        icons.css3,
        icons.Typescript,
        icons.react,
        icons.tailwindcss,
        icons.Vite
      ],
      isLong: false
    },
    {
      img: 'images/projects/Clone-React.js-Docs.png',
      title: 'Clone React.js Docs',
      demo: 'https://clone-react-js-docs.vercel.app/',
      GitHub: 'https://github.com/KhaledEllithy310/Clone-React.js-Docs',
      techs: [
        icons.css3,
        icons.Typescript,
        icons.react,
        icons.tailwindcss,
        icons.Vite
      ],
      isLong: false
    },

    // {
    //   img: "images/projects/fashion.png",
    //   title: "shoes e-commerce platform",
    //   demo: "https://shoes-app-react-js.vercel.app/",
    //   GitHub: "https://github.com/KhaledEllithy310/ShoesApp-React.Js",
    // },
    {
      img: 'images/projects/todoappReact.png',
      title: 'to do app',
      demo: 'https://to-do-app-react-zeta.vercel.app/',
      GitHub: 'https://github.com/KhaledEllithy310/ToDoApp-React',
      techs: [
        icons.css3,
        icons.js,
        icons.react,
        icons.bootstrap,
        icons.reactBootstrap,
        icons.redux,
        icons.Vite
      ],
      isLong: false
    },
    {
      img: 'images/projects/sortCars.png',
      title: 'sorting cars',
      demo: 'https://car-task.vercel.app/',
      GitHub: 'https://github.com/KhaledEllithy310/CarTask-React',
      techs: [
        icons.css3,
        icons.Typescript,
        icons.react,
      ],
      isLong: false
    }
    // {
    //   img: 'images/projects/commerce.png',
    //   title: 'e-commerce app',
    //   demo: 'https://e-commerce-react-js-theta.vercel.app/',
    //   GitHub: 'https://github.com/KhaledEllithy310/E-Commerce-ReactJs',
    //   techs: [icons.css3, icons.js, icons.react, icons.mui, icons.redux],
    //   isLong: true
    // }
  ],
  angular: [
    {
      img: 'images/projects/coursatkApp.png',
      title: 'online learning platform',
      demo: '',
      GitHub: 'https://github.com/KhaledEllithy310/CoursatApp-Angular',
      techs: [icons.css3, icons.Typescript, icons.angular, icons.bootstrap],
      isLong: false
    },
    {
      img: 'images/projects/Restaurant.png',
      title: 'restaurant management system and reservation system',
      demo: '',
      GitHub: 'https://github.com/KhaledEllithy310/Restaurant-Frontend-Main',
      techs: [icons.css3, icons.Typescript, icons.angular, icons.bootstrap],
      isLong: false
    },
    {
      img: 'images/projects/bookstore.png',
      title: 'book store',
      demo: '',
      GitHub: 'https://github.com/KhaledEllithy310/GoodReads-Frontend-Main',
      techs: [icons.css3, icons.Typescript, icons.angular, icons.bootstrap],
      isLong: false
    }
  ],
  js: [
    {
      img: 'images/projects/Product Management System.png',
      title: 'Product Management System',
      demo: 'https://khaledellithy310.github.io/CrudSystem-Js/',
      GitHub: 'https://github.com/KhaledEllithy310/CrudSystem-Js',
      techs: [icons.HTML5, icons.css3, icons.js],
      isLong: true
    },
    {
      img: 'images/projects/todolist.png',
      title: 'to do app',
      demo: 'https://to-do-list-steel-theta-20.vercel.app/',
      GitHub: 'https://github.com/KhaledEllithy310/ToDo-Js',
      techs: [icons.HTML5, icons.css3, icons.js],
      isLong: false
    },
    {
      img: 'images/projects/paintApp.png',
      title: 'paint app',
      demo: 'https://paint-app-ten.vercel.app/',
      GitHub: 'https://github.com/KhaledEllithy310/PaintApp-js',
      techs: [icons.HTML5, icons.css3, icons.js],
      isLong: false
    }
  ],
  ui: [
    {
      img: 'images/projects/Appco-landing page.png',
      title: 'Appco landing page',
      demo: 'https://khaledellithy310.github.io/Appco-LandingPage/#',
      GitHub: 'https://github.com/KhaledEllithy310/Appco-LandingPage',
      techs: [icons.HTML5, icons.css3, icons.bootstrap],
      isLong: true
    },
    {
      img: 'images/projects/Real-Estate.png',
      title: 'Real Estate landing page',
      demo: 'https://khaledellithy310.github.io/Real-Estate/',
      GitHub: 'https://github.com/KhaledEllithy310/Real-Estate',
      techs: [icons.HTML5, icons.css3, icons.bootstrap],
      isLong: true
    }
  ]
}

export const socialMedia = [
  {
    img: icons.linkedin,
    title: 'linkedin',
    link: 'https://www.linkedin.com/in/khaled-ellithy-74933826b/'
  },
  {
    img: icons.devto,
    title: 'devto',
    link: 'https://dev.to/khaledellithy'
  },
  {
    img: icons.medium,
    title: 'medium',
    link: 'https://medium.com/@khaledellessy310'
  },
  {
    img: icons.github2,
    title: 'Github',
    link: 'https://github.com/KhaledEllithy310'
  }
]

export const contactInfo = [
  {
    img: icons.whatsapp,
    title: 'whatsapp',
    link: ''
  },
  {
    img: icons.gmail,
    title: 'gmail',
    link: ''
  }
]

export const formContactInputs: IFormInputs[] = [
  {
    name: 'name',
    id: 'name',
    label: 'name',
    type: 'text'
  },
  {
    name: 'email',
    id: 'email',
    label: 'email',
    type: 'email'
  },
  {
    name: 'subject',
    id: 'subject',
    label: 'subject',
    type: 'text'
  },
  {
    name: 'message',
    id: 'message',
    label: 'message',
    type: 'text'
  }
]
