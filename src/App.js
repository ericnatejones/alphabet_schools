import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTheme } from './contexts/ThemeContext';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';

// Pages
import HomePage from './pages/HomePage';
import SchoolsPage from './pages/SchoolsPage';
import ToolsPage from './pages/ToolsPage';
import AssetGalleryPage from './pages/AssetGalleryPage';
import ContributePage from './pages/ContributePage';
import RoadmapPage from './pages/RoadmapPage';
import ProfilePage from './pages/ProfilePage';
import SchoolDetailPage from './pages/SchoolDetailPage';
import ToolDetailPage from './pages/ToolDetailPage';
import AlumniPaymentsPage from './pages/AlumniPaymentsPage';
import ApplyToLeadPage from './pages/ApplyToLeadPage';
import AssetProtocolPage from './pages/docs/AssetProtocolPage';
import ProjectShowcasePage from './pages/ProjectShowcasePage';

// Styled Components
import styled from 'styled-components';

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme === 'dark' ? '#121212' : '#f8f9fa'};
  color: ${props => props.theme === 'dark' ? '#e0e0e0' : '#212529'};
  transition: all 0.3s ease;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  padding-top: 70px; // For fixed navbar
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 2rem;
  margin-left: ${props => props.sidebarOpen ? '250px' : '0'};
  transition: margin-left 0.3s ease;
  
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 1rem;
  }
`;

function App() {
  const { theme, sidebarOpen } = useTheme();

  return (
    <AppContainer theme={theme}>
      <Navbar />
      <MainContent>
        {sidebarOpen && <Sidebar />}
        <ContentArea sidebarOpen={sidebarOpen}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/schools" element={<SchoolsPage />} />
            <Route path="/schools/:schoolId" element={<SchoolDetailPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/tools/:toolId" element={<ToolDetailPage />} />
            <Route path="/assets" element={<AssetGalleryPage />} />
            <Route path="/contribute" element={<ContributePage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/docs/asset-protocol" element={<AssetProtocolPage />} />
            <Route path="/alumni-payments" element={<AlumniPaymentsPage />} />
            <Route path="/apply-to-lead" element={<ApplyToLeadPage />} />
            <Route path="/projects" element={<ProjectShowcasePage />} />
          </Routes>
        </ContentArea>
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
