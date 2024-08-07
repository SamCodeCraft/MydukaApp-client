// src/App.js
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import AdminPage from './components/AdminPage'; // Make sure this path is correct

const App = () => {
  return (
    <Provider store={store}>
      <AdminPage />
    </Provider>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App;