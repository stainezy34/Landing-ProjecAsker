import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ColorProvider } from './contexts/ColorContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { ScrollToTop } from './components/ScrollToTop';
import { ColorPicker } from './components/ColorPicker';

// Layouts
import { LandingLayout } from './layouts/LandingLayout';

// Landing pages
import { Home } from './pages/landing/Home';
import { Login } from './pages/auth/Login';
import { Register } from './pages/auth/Register';
import { TagSelection } from './pages/auth/TagSelection';

// Feature pages
import { AIFeature } from './pages/features/AIFeature';
import { PaymentsFeature } from './pages/features/PaymentsFeature';
import { CollaborationFeature } from './pages/features/CollaborationFeature';
import { DocumentsFeature } from './pages/features/DocumentsFeature';
import { SecurityFeature } from './pages/features/SecurityFeature';
import { UpdatesFeature } from './pages/features/UpdatesFeature';
import { AnalyticsFeature } from './pages/features/AnalyticsFeature';
import { AccessibilityFeature } from './pages/features/AccessibilityFeature';

// Footer pages
import { About } from './pages/company/About';
import { Careers } from './pages/company/Careers';
import { Press } from './pages/company/Press';
import { Partners } from './pages/company/Partners';
import { HelpCenter } from './pages/support/HelpCenter';
import { Documentation } from './pages/support/Documentation';
import { Contact } from './pages/support/Contact';
import { Status } from './pages/support/Status';
import { Privacy } from './pages/legal/Privacy';
import { Terms } from './pages/legal/Terms';
import { CookiePolicy } from './pages/legal/CookiePolicy';
import { Licenses } from './pages/legal/Licenses';

export function App() {
  return (
    <ColorProvider>
      <AuthProvider>
        <Router>
          <ScrollToTop />
          <ColorPicker />
          <Routes>
            {/* Landing Pages */}
            <Route element={<LandingLayout />}>
              <Route path="/" element={<Home />} />
              
              {/* Feature Detail Pages */}
              <Route path="/features/ai-categorization" element={<AIFeature />} />
              <Route path="/features/payments" element={<PaymentsFeature />} />
              <Route path="/features/collaboration" element={<CollaborationFeature />} />
              <Route path="/features/documents" element={<DocumentsFeature />} />
              <Route path="/features/security" element={<SecurityFeature />} />
              <Route path="/features/updates" element={<UpdatesFeature />} />
              <Route path="/features/analytics" element={<AnalyticsFeature />} />
              <Route path="/features/accessibility" element={<AccessibilityFeature />} />

              {/* Company Pages */}
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/press" element={<Press />} />
              <Route path="/partners" element={<Partners />} />

              {/* Support Pages */}
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/docs" element={<Documentation />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/status" element={<Status />} />

              {/* Legal Pages */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/licenses" element={<Licenses />} />
            </Route>

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tag-selection" element={
              <ProtectedRoute>
                <TagSelection />
              </ProtectedRoute>
            } />

            {/* Protected Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <div>Dashboard (Protected)</div>
              </ProtectedRoute>
            } />

            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ColorProvider>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">404</h1>
        <p className="mt-2 text-lg text-gray-600">Page not found</p>
        <Link to="/" className="mt-4 inline-block text-primary hover:opacity-80">
          Go back home
        </Link>
      </div>
    </div>
  );
}