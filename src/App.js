import CepForm from './components/CepForm'
import GlobalStyle from './global/GlobalStyles';
import {BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <>
      <GlobalStyle/>
      <CepForm/>
    </>
    </BrowserRouter>

  );
}

export default App;
