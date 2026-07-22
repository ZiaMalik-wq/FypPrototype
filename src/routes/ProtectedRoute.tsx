import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '@/store';

export const ProtectedRoute: React.FC = () => {
  const { isAuthenticated } = useAppSelector(state => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export const AdminRoute: React.FC = () => {
  const { user, isAuthenticated } = useAppSelector(state => state.auth);

  if (!isAuthenticated || user?.role !== 'SystemAdmin') {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};
