import { FC } from "react"
import { Provider } from 'react-redux'
import { store } from './store';
import { AppRouter } from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom'

export const App: FC = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
      <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
