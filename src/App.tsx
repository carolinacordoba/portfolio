import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/index.scss';
import { RouterProvider } from 'react-router-dom';
import { r } from './services/Router';

function App() {
  return (
   <>
   <RouterProvider router={r} />
   </>
  );
}

export default App;

