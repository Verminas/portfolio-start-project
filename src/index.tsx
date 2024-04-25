import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export const menuNavigationItems = ['Home', 'Skills', 'Works', 'Testimony', 'Contact'];
export const socialIconsId = ['instSvg', 'vkSvg', 'telegramSvg', 'linkedinSvg'];
export const dataPage = {
  header: {
    menuNavigation: ['Home', 'Skills', 'Works', 'Testimony', 'Contact'],
  },
  main: {},
  skills: {},
  works: {},
  testimony: {},
  contact: {},
  slogan: {},
  footer: {}
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