import dashboard from './dashboard';
import admin from './admin';
import students from './students';
import { useAuth } from '../contexts/AuthContext';

// ==============================|| MENU ITEMS ||============================== //

const roleMenus = {
  admin: [dashboard, admin],
  student: [dashboard, students]
}

export default function useMenu(){

  const { user } = useAuth();

  return {items: roleMenus[user.role]};

}