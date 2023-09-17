import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import InputPage from './components/inputPage/inputPage';
import OutputPage from './components/outputPage/outputPage';
import LoadingPage from './components/loadingPage/loadingPage';
import PageFrame from './components/pageFrame/pageFrame';
import SocketFrame from './components/pageFrame/websocketFrame';

function App() {
  const [page, setPage] = useState(2);
  const [newQuery, setNewQuery] = useState("");

  return (
    <>
      <SocketFrame page={page} setPage={setPage} newQuery={newQuery} setNewQuery={setNewQuery}>
      </SocketFrame>
    </>
  );
}

export default App;
