import { FC } from "react"
import { Provider } from 'react-redux'
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { AppRouter } from './components/AppRouter';
import { BrowserRouter } from 'react-router-dom'

export const App: FC = () => {

  return (
    <PersistGate persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter>
      <AppRouter />
      </BrowserRouter>
    </Provider>
    </PersistGate>
  );
};

export default App;
