import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import InputPage from './components/inputPage/inputPage';
import OutputPage from './components/outputPage/outputPage';
import LoadingPage from './components/loadingPage/loadingPage';
import PageFrame from './components/pageFrame/pageFrame';

function App() {
  const [page, setPage] = useState(0);

  return (
    <>
      {page == 0? 
        <PageFrame setPage = {setPage}>
          <InputPage setPage={setPage}></InputPage>
        </PageFrame> 
      : <></>}
      {page == 1?
        <LoadingPage></LoadingPage>
      : <></>}
      {page == 2? 
        <OutputPage setPage={setPage}></OutputPage>
      : <></>}
    </>
  );
}

export default App;
