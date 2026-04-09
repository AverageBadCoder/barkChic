/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const Amenities = lazy(() => import('./pages/Amenities'));
const Login = lazy(() => import('./pages/Login'));
const Dashboard = lazy(() => import('./pages/Dashboard'));
const DogProfile = lazy(() => import('./pages/DogProfile'));
const Booking = lazy(() => import('./pages/Booking'));

function PageLoadingFallback() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-cream">
      <p className="text-brown">Loading...</p>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen font-sans text-brown-dark bg-cream">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<PageLoadingFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/amenities" element={<Amenities />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dog/:id" element={<DogProfile />} />
                <Route path="/book" element={<Booking />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}
