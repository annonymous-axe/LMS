import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import ProtectedRoute from '../contexts/ProtectedRoute';
import CourseCardDemo from '../ui-component/course/CourseCardDemo';
import DataTableDemo from '../ui-component/receipt/DatatableDemo';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const BatchListDemo = Loadable(lazy(() => import('ui-component/Batch/BatchCardDemo')))
const CertificateDemo = Loadable(lazy(() => import('ui-component/certis/CertificateCardDemo')));
const AdminStudentManagement = Loadable(lazy(() => import('ui-component/students/studentList')));
const InvoiceManagement =  Loadable(lazy(() => import('ui-component/Invoice/InvoiceManagement')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
),
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'home',
      children: [
        {
          path: '',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path: '/batches',
      element: (
        <ProtectedRoute role='student'>
          <BatchListDemo />
        </ProtectedRoute>
      )
    },
    {
      path: '/courses',
      element: (
        <ProtectedRoute role='student'>
          <CourseCardDemo />
        </ProtectedRoute>
      )
    },
    {
      path: '/receipts',
      element: (
        <ProtectedRoute role='student'>
          <DataTableDemo />
        </ProtectedRoute>
      )
    },
    {
      path: '/certificates',
      element: (
        <ProtectedRoute role='student'>
          <CertificateDemo />
        </ProtectedRoute>
      )
    },
    {
      path: '/admin/students',
      element: (
        <ProtectedRoute role='admin'>
          <AdminStudentManagement />
        </ProtectedRoute>
      )
    },
    {
      path: '/admin/invoices',
      element: (
        <ProtectedRoute role='admin'>
          <InvoiceManagement />
        </ProtectedRoute>
      )
    }
  ]
};

export default MainRoutes;
