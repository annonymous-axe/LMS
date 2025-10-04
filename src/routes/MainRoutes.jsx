import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import ProtectedRoute from '../contexts/ProtectedRoute';
import CourseCardDemo from '../ui-component/course/CourseCardDemo';
import DataTableDemo from '../ui-component/receipt/DatatableDemo';

// dashboard routing
const StudentDashboard = Loadable(lazy(() => import('views/dashboard/student')));
const BatchListDemo = Loadable(lazy(() => import('ui-component/Batch/BatchCardDemo')));
const CertificateDemo = Loadable(lazy(() => import('ui-component/certis/CertificateCardDemo')));
const AdminStudentManagement = Loadable(lazy(() => import('ui-component/students/studentList')));
const InvoiceManagement =  Loadable(lazy(() => import('ui-component/Invoice/InvoiceManagement')));

const AdminDashboard = Loadable(lazy(() => import('views/dashboard/Default')))
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
      path: 'student/dashboard',
      element: (
        <ProtectedRoute role='student'>
          <StudentDashboard />
        </ProtectedRoute>
      )
    },
    {
      path: 'student/home',
      children: [
        {
          path: '',
          element: (
            <ProtectedRoute role='student'>
              <StudentDashboard />
            </ProtectedRoute>
          )
        }
      ]
    },
    {
      path: 'admin/dashboard',
      element: (
        <ProtectedRoute role='admin'>
          <AdminDashboard />
        </ProtectedRoute>
      )
    },
    {
      path: 'admin/home',
      children: [
        {
          path: '',
          element: (
            <ProtectedRoute role='admin'>
              <AdminDashboard />
            </ProtectedRoute>
          )
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
    },

    {
      path: '/admin/batches',
      element: (
        <ProtectedRoute role='admin'>
          <BatchListDemo />
        </ProtectedRoute>
      )
    },    
  ]
};

export default MainRoutes;