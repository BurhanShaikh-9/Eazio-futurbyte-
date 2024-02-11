
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
// import ShopCard from './website/components/cards/shopCard';
import { AnimatePresence } from "framer-motion";
import Layout from './website/pages/layouts/dashboardLayout';
import '../src/assets/styling/utilityClasses.css'
import Dashboard from './website/pages/dashboard/dashboard';
import Messenger from './website/pages/messenger/messenger';
import Signup from './website/pages/registration/signup/signup';
import DashboardLayout from './website/pages/layouts/dashboardLayout';
import WebsiteLayout from './website/pages/layouts/websiteLayout';
import { ROUTES } from './utils/routes';
import Login from './website/pages/registration/login/login';
import MessengerLayout from './website/pages/layouts/messengerLayout';

function App() {
  const location = useLocation();

  return (
    <main className='app'>
      <AnimatePresence mode='wait'>

        <Routes location={location} key={location.pathname}>
          <Route element={<DashboardLayout />}>
            <Route path={ROUTES.TASK} element={<Dashboard />} />
          </Route>
          <Route element={<MessengerLayout />}>
            <Route path={ROUTES.MESSENGER} element={<Messenger />} />
          </Route>
          <Route element={<WebsiteLayout />}>
            <Route path={ROUTES.LOGIN} element={<Login />} />
            <Route path={ROUTES.SIGNUP} element={<Signup />} />
          </Route>
        </Routes>

      </AnimatePresence>


    </main>
  )
}

export default App
