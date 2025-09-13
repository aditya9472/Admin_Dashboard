import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Login  from "./scenes/auth/login";
import Signup from "./scenes/auth/signup";
import { AuthProvider, useAuth } from "./scenes/auth/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  // Custom hook to get auth state
  const AuthWrapper = ({ children }) => (
    <AuthProvider>{children}</AuthProvider>
  );

  // Only show sidebar/topbar if user is logged in
  const MainLayout = ({ children }) => {
    const { user } = useAuth();
    if (!user) return children;
    return (
      <div className="app">
        <Sidebar isSidebar={isSidebar} />
        <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
          {children}
        </main>
      </div>
    );
  };

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthWrapper>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="*"
              element={
                <MainLayout>
                  <Routes>
                    <Route
                      path="/dashboard"
                      element={
                        <PrivateRoute>
                          <Dashboard />
                        </PrivateRoute>
                      }
                    />
                    <Route path="/team" element={<PrivateRoute><Team /></PrivateRoute>} />
                    <Route path="/contacts" element={<PrivateRoute><Contacts /></PrivateRoute>} />
                    <Route path="/invoices" element={<PrivateRoute><Invoices /></PrivateRoute>} />
                    <Route path="/form" element={<PrivateRoute><Form /></PrivateRoute>} />
                    <Route path="/bar" element={<PrivateRoute><Bar /></PrivateRoute>} />
                    <Route path="/pie" element={<PrivateRoute><Pie /></PrivateRoute>} />
                    <Route path="/line" element={<PrivateRoute><Line /></PrivateRoute>} />
                    <Route path="/faq" element={<PrivateRoute><FAQ /></PrivateRoute>} />
                    <Route path="/calendar" element={<PrivateRoute><Calendar /></PrivateRoute>} />
                    <Route path="/geography" element={<PrivateRoute><Geography /></PrivateRoute>} />
                  </Routes>
                </MainLayout>
              }
            />
          </Routes>
        </AuthWrapper>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
