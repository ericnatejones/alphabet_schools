import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../../contexts/ThemeContext';
import { useAuth } from '../../contexts/AuthContext';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: var(--surface);
  box-shadow: var(--shadow-md);
  z-index: var(--z-index-fixed);
  transition: all var(--transition-normal);
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 var(--spacing-lg);
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-family: var(--font-family-heading);
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
  
  span {
    color: var(--text-primary);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  padding: var(--spacing-md);
  color: ${props => props.active === 'true' ? 'var(--primary)' : 'var(--text-primary)'};
  font-weight: ${props => props.active === 'true' ? '600' : '400'};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: ${props => props.active === 'true' ? '20px' : '0'};
    height: 3px;
    background-color: var(--primary);
    transition: width var(--transition-fast);
  }
  
  &:hover {
    color: var(--primary);
    
    &:after {
      width: 20px;
    }
  }
`;

const NavActions = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: var(--font-size-lg);
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-circle);
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const ProfileButton = styled.button`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: var(--font-size-md);
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  img {
    width: 32px;
    height: 32px;
    border-radius: var(--border-radius-circle);
    object-fit: cover;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: var(--spacing-sm);
`;

const LoginButton = styled(Link)`
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--primary);
  border: 1px solid var(--primary);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--primary);
    color: white;
  }
`;

const SignupButton = styled(Link)`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--primary);
  color: white;
  border: 1px solid var(--primary);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: transparent;
    color: var(--primary);
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: var(--font-size-xl);
  cursor: pointer;
  
  @media (max-width: 992px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--surface);
  z-index: var(--z-index-fixed);
  display: flex;
  flex-direction: column;
  padding: var(--spacing-lg);
  transform: ${props => props.isOpen ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform var(--transition-normal);
`;

const MobileNavLink = styled(Link)`
  padding: var(--spacing-md);
  color: ${props => props.active === 'true' ? 'var(--primary)' : 'var(--text-primary)'};
  font-weight: ${props => props.active === 'true' ? '600' : '400'};
  font-size: var(--font-size-lg);
  border-bottom: 1px solid var(--border);
  transition: all var(--transition-fast);
  
  &:hover {
    color: var(--primary);
  }
`;

const DocsDropdown = styled.div`
  position: relative;
  display: inline-block;
`;

const DocsButton = styled.button`
  padding: var(--spacing-sm) var(--spacing-md);
  color: ${props => props.active === 'true' ? 'var(--primary)' : 'var(--text-primary)'};
  font-weight: ${props => props.active === 'true' ? '600' : '400'};
  background: none;
  border: none;
  font-size: var(--font-size-md);
  cursor: pointer;
  border-bottom: 2px solid ${props => props.active === 'true' ? 'var(--primary)' : 'transparent'};
  transition: all var(--transition-fast);
  
  &:hover {
    color: var(--primary);
  }
  
  &:after {
    content: '▼';
    font-size: 0.7em;
    margin-left: 0.5em;
  }
`;

const DocsDropdownContent = styled.div`
  display: ${props => props.isOpen ? 'block' : 'none'};
  position: absolute;
  background-color: var(--surface);
  min-width: 250px;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-sm) 0;
  z-index: var(--z-index-dropdown);
`;

const DocsDropdownLink = styled(Link)`
  display: block;
  padding: var(--spacing-sm) var(--spacing-md);
  color: var(--text-primary);
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: var(--primary);
  }
`;

const DocsDropdownCategory = styled.div`
  padding: var(--spacing-sm) var(--spacing-md);
  font-weight: 600;
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: ${props => props.first ? '0' : 'var(--spacing-sm)'};
`;

const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme, toggleSidebar } = useTheme();
  const { currentUser, logout } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [docsDropdownOpen, setDocsDropdownOpen] = useState(false);
  const [communityDropdownOpen, setCommunityDropdownOpen] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  const isDocsActive = () => {
    const docsPaths = ['/docs', '/api', '/tutorials', '/roadmap', '/contribute'];
    return docsPaths.some(path => location.pathname.startsWith(path));
  };
  
  const isCommunityActive = () => {
    const communityPaths = ['/contribute', '/alumni-payments', '/apply-to-lead'];
    return communityPaths.some(path => location.pathname.startsWith(path));
  };
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const toggleDocsDropdown = () => {
    setDocsDropdownOpen(!docsDropdownOpen);
  };
  
  const toggleCommunityDropdown = () => {
    setCommunityDropdownOpen(!communityDropdownOpen);
  };
  
  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo to="/">
          Alphabet<span>Schools</span>
        </Logo>
        
        <NavLinks>
          <NavLink to="/" active={isActive('/') ? 'true' : 'false'}>Home</NavLink>
          <NavLink to="/schools" active={isActive('/schools') ? 'true' : 'false'}>Schools</NavLink>
          <NavLink to="/tools" active={isActive('/tools') ? 'true' : 'false'}>Tools</NavLink>
          <NavLink to="/assets" active={isActive('/assets') ? 'true' : 'false'}>Assets</NavLink>
          <NavLink to="/projects" active={isActive('/projects') ? 'true' : 'false'}>Projects</NavLink>
          
          <DocsDropdown onMouseEnter={() => setDocsDropdownOpen(true)} onMouseLeave={() => setDocsDropdownOpen(false)}>
            <DocsButton active={isDocsActive() ? 'true' : 'false'} onClick={toggleDocsDropdown}>Documentation</DocsButton>
            <DocsDropdownContent isOpen={docsDropdownOpen}>
              <DocsDropdownCategory first>Platform</DocsDropdownCategory>
              <DocsDropdownLink to="/docs/getting-started">Getting Started</DocsDropdownLink>
              <DocsDropdownLink to="/docs/architecture">Architecture</DocsDropdownLink>
              <DocsDropdownLink to="/docs/asset-protocol">Asset Protocol</DocsDropdownLink>
              
              <DocsDropdownCategory>Development</DocsDropdownCategory>
              <DocsDropdownLink to="/docs/tool-development">Tool Development</DocsDropdownLink>
              <DocsDropdownLink to="/docs/api-reference">API Reference</DocsDropdownLink>
              <DocsDropdownLink to="/docs/tutorials">Tutorials</DocsDropdownLink>
              
              <DocsDropdownCategory>Community</DocsDropdownCategory>
              <DocsDropdownLink to="/contribute">How to Contribute</DocsDropdownLink>
              <DocsDropdownLink to="/roadmap">Roadmap</DocsDropdownLink>
              <DocsDropdownLink to="/docs/faq">FAQ</DocsDropdownLink>
            </DocsDropdownContent>
          </DocsDropdown>
          
          <DocsDropdown onMouseEnter={() => setCommunityDropdownOpen(true)} onMouseLeave={() => setCommunityDropdownOpen(false)}>
            <DocsButton active={isCommunityActive() ? 'true' : 'false'} onClick={toggleCommunityDropdown}>Community</DocsButton>
            <DocsDropdownContent isOpen={communityDropdownOpen}>
              <DocsDropdownLink to="/contribute">How to Contribute</DocsDropdownLink>
              <DocsDropdownLink to="/alumni-payments">Alumni Payments</DocsDropdownLink>
              <DocsDropdownLink to="/apply-to-lead">Apply to Lead a School</DocsDropdownLink>
              <DocsDropdownLink to="/projects">Project Showcase</DocsDropdownLink>
            </DocsDropdownContent>
          </DocsDropdown>
        </NavLinks>
        
        <NavActions>
          <ThemeToggle onClick={toggleTheme}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </ThemeToggle>
          
          {currentUser ? (
            <ProfileButton onClick={() => {}}>
              <img src={currentUser.avatar} alt={currentUser.name} />
              {currentUser.name}
            </ProfileButton>
          ) : (
            <AuthButtons>
              <LoginButton to="/login">Log In</LoginButton>
              <SignupButton to="/signup">Sign Up</SignupButton>
            </AuthButtons>
          )}
          
          <MobileMenuButton onClick={toggleMobileMenu}>
            {mobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </NavActions>
      </NavbarContent>
      
      <MobileMenu isOpen={mobileMenuOpen}>
        <MobileNavLink to="/" active={isActive('/') ? 'true' : 'false'} onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
        <MobileNavLink to="/schools" active={isActive('/schools') ? 'true' : 'false'} onClick={() => setMobileMenuOpen(false)}>Schools</MobileNavLink>
        <MobileNavLink to="/tools" active={isActive('/tools') ? 'true' : 'false'} onClick={() => setMobileMenuOpen(false)}>Tools</MobileNavLink>
        <MobileNavLink to="/assets" active={isActive('/assets') ? 'true' : 'false'} onClick={() => setMobileMenuOpen(false)}>Assets</MobileNavLink>
        <MobileNavLink to="/projects" active={isActive('/projects') ? 'true' : 'false'} onClick={() => setMobileMenuOpen(false)}>Projects</MobileNavLink>
        <MobileNavLink to="/docs/getting-started" active={isActive('/docs/getting-started') ? 'true' : 'false'} onClick={() => setMobileMenuOpen(false)}>Documentation</MobileNavLink>
        <MobileNavLink to="/contribute" active={isActive('/contribute') ? 'true' : 'false'} onClick={() => setMobileMenuOpen(false)}>Contribute</MobileNavLink>
        <MobileNavLink to="/alumni-payments" active={isActive('/alumni-payments') ? 'true' : 'false'} onClick={() => setMobileMenuOpen(false)}>Alumni Payments</MobileNavLink>
        <MobileNavLink to="/apply-to-lead" active={isActive('/apply-to-lead') ? 'true' : 'false'} onClick={() => setMobileMenuOpen(false)}>Apply to Lead</MobileNavLink>
        <MobileNavLink to="/roadmap" active={isActive('/roadmap') ? 'true' : 'false'} onClick={() => setMobileMenuOpen(false)}>Roadmap</MobileNavLink>
        
        {!currentUser && (
          <>
            <MobileNavLink to="/login" active={isActive('/login') ? 'true' : 'false'} onClick={() => setMobileMenuOpen(false)}>Log In</MobileNavLink>
            <MobileNavLink to="/signup" active={isActive('/signup') ? 'true' : 'false'} onClick={() => setMobileMenuOpen(false)}>Sign Up</MobileNavLink>
          </>
        )}
      </MobileMenu>
    </NavbarContainer>
  );
};

export default Navbar;
