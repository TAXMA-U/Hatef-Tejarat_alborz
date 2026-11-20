import { createBrowserRouter, Outlet } from 'react-router-dom';
import AppLayout from './AppLayout';
import HomePage from '@/pages/HomePage';
import ProductCatalogPage from '@/pages/ProductCatalogPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';
import LoginPage from '@/pages/LoginPage';
import RegisterPage from '@/pages/RegisterPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'products', element: <ProductCatalogPage /> },
      { path: 'products/:slug', element: <ProductDetailPage /> },
      { path: 'category/:slug', element: <ProductCatalogPage /> },
      { path: 'subcategory/:slug', element: <ProductCatalogPage /> },
      { path: 'industry/:slug', element: <ProductCatalogPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
]);
