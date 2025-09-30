import { RouterProvider } from 'react-router-dom';

// routing
import router from 'routes';

// project imports
import NavigationScroll from 'layout/NavigationScroll';

import ThemeCustomization from 'themes';
import { AuthProvider } from './contexts/AuthContext';

// auth provider

// ==============================|| APP ||============================== //

export default function App() {
  return (
    <ThemeCustomization>
      <NavigationScroll>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </NavigationScroll>
    </ThemeCustomization>
  );
}
