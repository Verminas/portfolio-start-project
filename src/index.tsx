import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const menuNavigationItems = ['Home', 'Skills', 'Works', 'Testimony', 'Contact'];
export const socialIconsId = ['instSvg', 'vkSvg', 'telegramSvg', 'linkedinSvg'];
export const dataPage = {
  header: {},
  main: {
    name: '',
  },
  skills: {
    title: '',
    skillItems: [
      {
        iconId: '',
        title: '',
        text: '',
      },
      {
        iconId: '',
        title: '',
        text: '',
      },
      {
        iconId: '',
        title: '',
        text: '',
      },
      {
        iconId: '',
        title: '',
        text: '',
      },
      {
        iconId: '',
        title: '',
        text: '',
      },
      {
        iconId: '',
        title: '',
        text: '',
      },
    ],
  },
  works: {
    title: '',
    tabItems: {},
    projects: [
      {
        projImg: '',
        projTitle: '',
        projDescription: '',
      }
    ],
  },
  testimony: {
    title: '',
    sliderInfo: {
      slides: [
        {
          text: '',
          name: '',
        }
      ]
    }
  },
  contact: {
    title: '',

  },
  slogan: {
    title: '',
    buttonName: '',
  },
  footer: {
    title: '',
    copyRight: ''
  },
  components: {
    menuNavigation: ['Home', 'Skills', 'Works', 'Testimony', 'Contact'],
    socialIcons: [
      {
        iconId: 'instSvg',
        iconHref: "#",
        iconTitle: 'My Instagram',
      },
      {
        iconId: 'vkSvg',
        iconHref: "#",
        iconTitle: 'My Vkontakte',
      },
      {
        iconId: 'telegramSvg',
        iconHref: "#",
        iconTitle: 'My Telegram',
      },
      {
        iconId: 'linkedinSvg',
        iconHref: "#",
        iconTitle: 'My LinkedIn',
      },
    ]
  }
};


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();