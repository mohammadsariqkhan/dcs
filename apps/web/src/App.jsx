import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from '@/hooks/useCart';
import { AuthProvider } from '@/contexts/AuthContext';
import { ThemeProvider } from '@/contexts/ThemeContext';
import ScrollToTop from '@/components/ScrollToTop';
import BackToTop from '@/components/BackToTop';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import AboutPage from '@/pages/AboutPage';
import CompanyPage from '@/pages/CompanyPage';
import ContactPage from '@/pages/ContactPage';
import ProductDetailPage from '@/pages/ProductDetailPage';
import SuccessPage from '@/pages/SuccessPage';
import { Toaster } from '@/components/ui/toaster';

// Individual Service Pages
import AIMLPage from '@/pages/services/AIMLPage';
import DataEngineeringPage from '@/pages/services/DataEngineeringPage';
import CloudSolutionsPage from '@/pages/services/CloudSolutionsPage';
import AdvancedAnalyticsPage from '@/pages/services/AdvancedAnalyticsPage';
import DataAnalyticsPage from '@/pages/services/DataAnalyticsPage';
import AgenticAIPage from '@/pages/services/AgenticAIPage';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            <ScrollToTop />
            <BackToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/services/ai-ml" element={<AIMLPage />} />
              <Route path="/services/data-engineering" element={<DataEngineeringPage />} />
              <Route path="/services/cloud-solutions" element={<CloudSolutionsPage />} />
              <Route path="/services/advanced-analytics" element={<AdvancedAnalyticsPage />} />
              <Route path="/services/data-analytics" element={<DataAnalyticsPage />} />
              <Route path="/services/agentic-ai" element={<AgenticAIPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/company" element={<CompanyPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/success" element={<SuccessPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </Router>
          <Toaster />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;