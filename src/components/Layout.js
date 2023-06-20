import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppToolBar } from './AppToolBar/AppToolBar';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div style={{ margin: '0 auto', padding: '0 16px' }}>

      <AppToolBar />

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <Toaster position="top-right" reverseOrder={false} />

    </div>
  );
};