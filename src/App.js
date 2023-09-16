import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import InputPage from './components/inputPage/inputPage';
import OutputPage from './components/outputPage/outputPage';
import LoadingPage from './components/loadingPage/loadingPage';

function App() {
  const [page, setPage] = useState(0);

  return (
    <>
      {page == 0? <InputPage></InputPage> : <></>}
      {page == 1? <LoadingPage></LoadingPage> : <></>}
      {page == 2? <OutputPage></OutputPage> : <></>}
    </>
  );
}

export default App;
