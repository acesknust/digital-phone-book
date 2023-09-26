import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from './pages/ProtectedRoute';
import AuthProvider from './contextapi/AuthProvider';
import Overview from './pages/Overview';
import Settings from './pages/Settings';
import UpdateProfile from './pages/UpdateProfile';
import Login from './pages/Login';
import { ClassDetailsTable } from 'uicore/admin';



function App() {

  const queryCache = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryCache}>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={< Overview />} >
                  <Route path="/:classId" element={< ClassDetailsTable />} />
                </Route>
                <Route path="settings" element={<Settings />} >
                  <Route path="" element={<UpdateProfile />} />
                </Route>
              </Route>
              <Route index path="login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
