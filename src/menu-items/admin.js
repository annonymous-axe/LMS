// assets
import { IconBrandChrome, IconHelp } from '@tabler/icons-react';

// constant
const icons = { IconBrandChrome, IconHelp };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const admin = {
  id: 'admin',
  type: 'group',
  children: [
    {
      id: 'student-list',
      title: 'Student Management',
      type: 'item',
      url: '/students',
      role: 'admin',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    },
    {
      id: 'invoice-list',
      title: 'Invoice Management',
      type: 'item',
      url: '/invoices',
      role: 'admin',
      icon: icons.IconBrandChrome,
      breadcrumbs: false
    }    
  ]
};

export default admin;
