import { BrowserRouter } from 'react-router-dom';
import Routers from './routes';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  );
}

export default App;
