import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
// src для картинок
import imgWorkSrc1 from './assets/images/work1.webp';
import imgWorkSrc2 from './assets/images/work2.webp';
import {GlobalStyle} from "./styles/Global.styled";

export type TabProjectsItemsType = "all" | 'landing' | 'react' | 'spa';
export type WorksInfoType = {
  tabItems:
    Array<{
      title: string,
      type: TabProjectsItemsType,
    }>,
  projects:
    Array<{
      projImg: string,
      projTitle: string,
      projText: string,
      projType: TabProjectsItemsType,
    }>
}

export const menuNavigationItems = ['Home', 'Skills', 'Works', 'Testimony', 'Contact'];
export const socialIconsId = ['instSvg', 'telegramSvg', 'vkSvg', 'linkedinSvg'];
export const skillsInfo = [
  {
    iconId: 'htmlSvg',
    title: 'html',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'cssSvg',
    title: 'css3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'reactSvg',
    title: 'react',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'typeScriptSvg',
    title: 'typescript',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'stylCompSvg',
    title: 'styled components',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
  {
    iconId: 'figmaSvg',
    title: 'web design',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim',
  },
];
export const worksInfo: WorksInfoType = {
  tabItems: [
    {
      title: 'all',
      type: 'all',
    },
    {
      title: 'landing Page',
      type: 'landing',
    },
    {
      title: 'react',
      type: 'react',
    },
    {
      title: 'spa',
      type: 'spa',
    },
  ],
  projects: [
    {
      projImg: imgWorkSrc1,
      projTitle: 'social network',
      projText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ' +
        'ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      projType: "spa"
    },
    {
      projImg: imgWorkSrc2,
      projTitle: 'timer',
      projText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore " +
        "et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim",
      projType: "react"
    },
  ]
};
export const sliderInfo = {
  slides: [
    {
      name: 'petr petrov',
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et" +
        "dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, " +
        "consectetur adipisicing elit.",
    },
    {
      name: 'ivan ivanow',
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et" +
        "dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
    {
      name: 'alex elexandrow',
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et" +
        "dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, " +
        "consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et" +
        "dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    },
  ],
};
export const contactsInfo = {
  emailJs: {
    serviceId: 'service_jbw1b5h',
    templateId: 'template_89foq3h',
    pubKey: 'GkQwf6QoLtinZ-9EI',
  }
}


// export const dataPage = {
//   header: {},
//   main: {
//     name: '',
//   },
//   skills: {
//     title: '',
//     skillItems: [
//       {
//         iconId: '',
//         title: '',
//         text: '',
//       },
//       {
//         iconId: '',
//         title: '',
//         text: '',
//       },
//       {
//         iconId: '',
//         title: '',
//         text: '',
//       },
//       {
//         iconId: '',
//         title: '',
//         text: '',
//       },
//       {
//         iconId: '',
//         title: '',
//         text: '',
//       },
//       {
//         iconId: '',
//         title: '',
//         text: '',
//       },
//     ],
//   },
//   works: {
//     title: '',
//     tabItems: {},
//     projects: [
//       {
//         projImg: '',
//         projTitle: '',
//         projDescription: '',
//       }
//     ],
//   },
//   testimony: {
//     title: '',
//     sliderInfo: {
//       slides: [
//         {
//           text: '',
//           name: '',
//         }
//       ]
//     }
//   },
//   contact: {
//     title: '',
//
//   },
//   slogan: {
//     title: '',
//     buttonName: '',
//   },
//   footer: {
//     title: '',
//     copyRight: ''
//   },
//   components: {
//     menuNavigation: ['Home', 'Skills', 'Works', 'Testimony', 'Contact'],
//     socialIcons: [
//       {
//         iconId: 'instSvg',
//         iconHref: "#",
//         iconTitle: 'My Instagram',
//       },
//       {
//         iconId: 'vkSvg',
//         iconHref: "#",
//         iconTitle: 'My Vkontakte',
//       },
//       {
//         iconId: 'telegramSvg',
//         iconHref: "#",
//         iconTitle: 'My Telegram',
//       },
//       {
//         iconId: 'linkedinSvg',
//         iconHref: "#",
//         iconTitle: 'My LinkedIn',
//       },
//     ]
//   }
// };


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();