import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';

const SidebarContainer = styled.aside`
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;
  width: 250px;
  background-color: var(--surface);
  border-right: 1px solid var(--border);
  overflow-y: auto;
  z-index: var(--z-index-fixed);
  transition: all var(--transition-normal);
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SidebarSection = styled.div`
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border);
`;

const SectionTitle = styled.h3`
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  letter-spacing: 1px;
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  margin-bottom: var(--spacing-xs);
  color: ${props => props.active === "true" ? 'var(--primary)' : 'var(--text-primary)'};
  font-weight: ${props => props.active === "true" ? '600' : '400'};
  border-radius: var(--border-radius-md);
  background-color: ${props => props.active === "true" ? 'rgba(52, 152, 219, 0.1)' : 'transparent'};
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: rgba(52, 152, 219, 0.05);
    color: var(--primary);
  }
  
  svg {
    margin-right: var(--spacing-sm);
    font-size: 1.2em;
  }
`;

const DocumentationTree = styled.div`
  margin-left: var(--spacing-md);
`;

const DocumentationCategory = styled.div`
  margin-bottom: var(--spacing-md);
`;

const CategoryTitle = styled.div`
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
`;

const DocLink = styled(Link)`
  display: block;
  padding: var(--spacing-xs) 0;
  color: ${props => props.active ? 'var(--primary)' : 'var(--text-secondary)'};
  font-size: var(--font-size-sm);
  font-weight: ${props => props.active ? '600' : '400'};
  transition: all var(--transition-fast);
  
  &:hover {
    color: var(--primary);
  }
`;

const Sidebar = () => {
  const location = useLocation();
  const { theme } = useTheme();
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  const isDocActive = (path) => {
    return location.pathname === path;
  };
  
  const isSchoolsActive = () => {
    return location.pathname.startsWith('/schools');
  };
  
  const isToolsActive = () => {
    return location.pathname.startsWith('/tools');
  };
  
  const isDocsActive = () => {
    return location.pathname.startsWith('/docs');
  };
  
  return (
    <SidebarContainer>
      <SidebarSection>
        <SectionTitle>Navigation</SectionTitle>
        <SidebarLink to="/" active={isActive('/') ? "true" : "false"}>
          <span>🏠</span> Home
        </SidebarLink>
        <SidebarLink to="/schools" active={isSchoolsActive() ? "true" : "false"}>
          <span>🎓</span> Schools
        </SidebarLink>
        <SidebarLink to="/tools" active={isToolsActive() ? "true" : "false"}>
          <span>🛠️</span> Tools
        </SidebarLink>
        <SidebarLink to="/assets" active={isActive('/assets') ? "true" : "false"}>
          <span>🖼️</span> Assets
        </SidebarLink>
        <SidebarLink to="/contribute" active={isActive('/contribute') ? "true" : "false"}>
          <span>👥</span> Contribute
        </SidebarLink>
        <SidebarLink to="/roadmap" active={isActive('/roadmap') ? "true" : "false"}>
          <span>🗺️</span> Roadmap
        </SidebarLink>
      </SidebarSection>
      
      {isDocsActive() && (
        <SidebarSection>
          <SectionTitle>Documentation</SectionTitle>
          <DocumentationTree>
            <DocumentationCategory>
              <CategoryTitle>Getting Started</CategoryTitle>
              <DocLink to="/docs/getting-started" active={isDocActive('/docs/getting-started')}>
                Introduction
              </DocLink>
              <DocLink to="/docs/quick-start" active={isDocActive('/docs/quick-start')}>
                Quick Start Guide
              </DocLink>
              <DocLink to="/docs/architecture" active={isDocActive('/docs/architecture')}>
                Architecture Overview
              </DocLink>
            </DocumentationCategory>
            
            <DocumentationCategory>
              <CategoryTitle>Asset Protocol</CategoryTitle>
              <DocLink to="/docs/asset-protocol" active={isDocActive('/docs/asset-protocol')}>
                Protocol Overview
              </DocLink>
              <DocLink to="/docs/asset-types" active={isDocActive('/docs/asset-types')}>
                Asset Types
              </DocLink>
              <DocLink to="/docs/asset-properties" active={isDocActive('/docs/asset-properties')}>
                Asset Properties
              </DocLink>
              <DocLink to="/docs/asset-storage" active={isDocActive('/docs/asset-storage')}>
                Storage System
              </DocLink>
            </DocumentationCategory>
            
            <DocumentationCategory>
              <CategoryTitle>Tool Development</CategoryTitle>
              <DocLink to="/docs/tool-development" active={isDocActive('/docs/tool-development')}>
                Tool Development Guide
              </DocLink>
              <DocLink to="/docs/tool-integration" active={isDocActive('/docs/tool-integration')}>
                Integration with Platform
              </DocLink>
              <DocLink to="/docs/tool-api" active={isDocActive('/docs/tool-api')}>
                Tool API
              </DocLink>
            </DocumentationCategory>
            
            <DocumentationCategory>
              <CategoryTitle>NFT Integration</CategoryTitle>
              <DocLink to="/docs/nft-overview" active={isDocActive('/docs/nft-overview')}>
                NFT Overview
              </DocLink>
              <DocLink to="/docs/minting-process" active={isDocActive('/docs/minting-process')}>
                Minting Process
              </DocLink>
              <DocLink to="/docs/ownership-model" active={isDocActive('/docs/ownership-model')}>
                Ownership Model
              </DocLink>
            </DocumentationCategory>
          </DocumentationTree>
        </SidebarSection>
      )}
      
      {isSchoolsActive() && (
        <SidebarSection>
          <SectionTitle>Schools</SectionTitle>
          <SidebarLink to="/schools/ai" active={isActive('/schools/ai') ? "true" : "false"}>
            AI School
          </SidebarLink>
          <SidebarLink to="/schools/business" active={isActive('/schools/business') ? "true" : "false"}>
            Business School
          </SidebarLink>
          <SidebarLink to="/schools/code" active={isActive('/schools/code') ? "true" : "false"}>
            Code School
          </SidebarLink>
          <SidebarLink to="/schools/dedication" active={isActive('/schools/dedication') ? "true" : "false"}>
            Dedication School
          </SidebarLink>
          <SidebarLink to="/schools/earn" active={isActive('/schools/earn') ? "true" : "false"}>
            Earn School
          </SidebarLink>
          <SidebarLink to="/schools/financial" active={isActive('/schools/financial') ? "true" : "false"}>
            Financial School
          </SidebarLink>
          <SidebarLink to="/schools/gratitude" active={isActive('/schools/gratitude') ? "true" : "false"}>
            Gratitude School
          </SidebarLink>
          <SidebarLink to="/schools/hosting" active={isActive('/schools/hosting') ? "true" : "false"}>
            Hosting School
          </SidebarLink>
          <SidebarLink to="/schools/innovation" active={isActive('/schools/innovation') ? "true" : "false"}>
            Innovation School
          </SidebarLink>
          <SidebarLink to="/schools/all" active={isActive('/schools/all') ? "true" : "false"}>
            View All Schools
          </SidebarLink>
        </SidebarSection>
      )}
      
      {isToolsActive() && (
        <SidebarSection>
          <SectionTitle>Tool Categories</SectionTitle>
          <SidebarLink to="/tools/category/map-makers" active={isActive('/tools/category/map-makers') ? "true" : "false"}>
            Map Makers
          </SidebarLink>
          <SidebarLink to="/tools/category/character-creators" active={isActive('/tools/category/character-creators') ? "true" : "false"}>
            Character Creators
          </SidebarLink>
          <SidebarLink to="/tools/category/town-simulators" active={isActive('/tools/category/town-simulators') ? "true" : "false"}>
            Town Simulators
          </SidebarLink>
          <SidebarLink to="/tools/category/rpg-engines" active={isActive('/tools/category/rpg-engines') ? "true" : "false"}>
            RPG Engines
          </SidebarLink>
          <SidebarLink to="/tools/category/asset-editors" active={isActive('/tools/category/asset-editors') ? "true" : "false"}>
            Asset Editors
          </SidebarLink>
          <SidebarLink to="/tools/category/all" active={isActive('/tools/category/all') ? "true" : "false"}>
            All Categories
          </SidebarLink>
        </SidebarSection>
      )}
    </SidebarContainer>
  );
};

export default Sidebar;
