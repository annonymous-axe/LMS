// assets
import { 
  IconAddressBook,
  IconDashboard, 
  IconHelp,
  IconBrandAppgallery, 
  IconVocabulary, 
  IconBrandTabler,
  IconAdjustments,
  IconReceiptRupee,
  IconWriting
} from '@tabler/icons-react';

// constant
const icons = { IconWriting, IconReceiptRupee, IconAddressBook, IconDashboard, IconHelp, IconBrandAppgallery, IconVocabulary, IconBrandTabler, IconAdjustments };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const admin = {
  id: 'admin',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/home',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
        id: 'products',
        title: 'Products',
        icon: icons.IconBrandAppgallery,
        type: 'collapse',
        children: [
            {
                id: 'batches',
                title: 'Batches',
                type: 'item',
                url: '/admin/batches'
            },
            {
                id: 'courses',
                title: 'Courses',
                type: 'item',
                url: '/admin/courses'
            },
        ] 
    },
    {
        id: 'users',
        title: 'User',
        icon: icons.IconAddressBook,
        type: 'collapse',
        children: [
          {
            id: 'student',
            title: 'Student',
            type: 'item',
            url: '/admin/students',
            role: 'admin',
            breadcrumbs: false
          },
          {
            id: 'instructor',
            title: 'Instructor',
            type: 'item',
            url: '/admin/instructors',
            role: 'admin',
            breadcrumbs: false
          } 
        ] 
    },
    {
        id: 'manage',
        title: 'Manage',
        icon: icons.IconWriting,
        type: 'collapse',
        children: [
          {
            id: 'assignment',
            title: 'Assingments',
            type: 'item',
            url: '/admin/assignment',
            role: 'admin',
            breadcrumbs: false
          },
          {
            id: 'payment',
            title: 'Live Tests',
            type: 'item',
            url: '/admin/tests',
            role: 'admin',
            breadcrumbs: false
          } 
        ] 
    },    
    {
        id: 'setting',
        title: 'Settings',
        icon: icons.IconAdjustments,
        type: 'collapse',
        children: [
          {
            id: 'domain',
            title: 'Domain',
            type: 'item',
            url: '/admin/doamin',
            role: 'admin',
            breadcrumbs: false
          },
          {
            id: 'payment',
            title: 'Payments',
            type: 'item',
            url: '/admin/payment',
            role: 'admin',
            breadcrumbs: false
          },
          {
            id: 'invoice-list',
            title: 'Invoice',
            type: 'item',
            url: '/admin/invoices',
            role: 'admin',
            breadcrumbs: false
          } 
        ] 
    },   
  ]
};

export default admin;
