import React, { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { AuthProvider } from "./contexts/AuthContext";

// Lazy-load route components
const Index = lazy(() => import("./pages/Index"));
const News = lazy(() => import("./pages/News"));
const Media = lazy(() => import("./pages/Media"));
const Team = lazy(() => import("./pages/Team"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Tournaments = lazy(() => import("./pages/Tournaments"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AdminPanel = lazy(() => import("./pages/AdminPanel"));
const Login = lazy(() => import("./pages/Login"));

// Fallback loading component
const PageLoading = () => (
  <div className="min-h-screen bg-[#006400] flex items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-xl border-4 border-yellow-400 border-t-transparent"></div>
  </div>
);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <HashRouter>
          <div className="min-h-screen bg-[#006400]">
            <Layout>
              <Suspense fallback={<PageLoading />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/tournaments" element={<Tournaments />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/media" element={<Media />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/admin" element={<AdminPanel />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </Layout>
          </div>
        </HashRouter>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
