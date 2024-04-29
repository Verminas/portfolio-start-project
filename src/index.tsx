import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// src для картинок
import imgWorkSrc1 from './assets/images/work1.webp';
import imgWorkSrc2 from './assets/images/work2.webp';
import {GlobalStyle} from "./styles/Global.styled";

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
export const worksInfo = {
  itemsNames: ['All', 'Landing Page', 'React', 'Spa'],
  projects: [
    {
      projImg: imgWorkSrc1,
      projTitle: 'social network',
      projText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ' +
        'ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    },
    {
      projImg: imgWorkSrc2,
      projTitle: 'timer',
      projText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ' +
        'ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    }
  ]
};


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