import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/store';
import { router } from '@/routes';

export const App: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  );
};

export default App;
