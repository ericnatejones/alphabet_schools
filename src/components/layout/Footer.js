import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--surface);
  border-top: 1px solid var(--border);
  padding: var(--spacing-xl) 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled(Link)`
  font-family: var(--font-family-heading);
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--primary);
  margin-bottom: var(--spacing-md);
  
  span {
    color: var(--text-primary);
  }
`;

const FooterDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
`;

const SocialLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

const SocialLink = styled.a`
  color: var(--text-secondary);
  font-size: var(--font-size-lg);
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--primary);
  }
`;

const FooterTitle = styled.h4`
  font-size: var(--font-size-md);
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const FooterLink = styled(Link)`
  color: var(--text-secondary);
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--primary);
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: var(--spacing-xl) auto 0;
  padding: var(--spacing-lg) var(--spacing-lg) 0;
  border-top: 1px solid var(--border);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
`;

const LegalLinks = styled.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const LegalLink = styled(Link)`
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
  transition: color var(--transition-fast);
  
  &:hover {
    color: var(--primary);
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo to="/">
            Alphabet<span>Schools</span>
          </FooterLogo>
          <FooterDescription>
            An innovative open-source platform where students learn by building interconnected asset creation tools.
          </FooterDescription>
          <SocialLinks>
            <SocialLink href="https://github.com/alphabet-schools" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="GitHub">📂</span>
            </SocialLink>
            <SocialLink href="https://twitter.com/alphabetschools" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="Twitter">🐦</span>
            </SocialLink>
            <SocialLink href="https://discord.gg/alphabetschools" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="Discord">💬</span>
            </SocialLink>
            <SocialLink href="https://youtube.com/alphabetschools" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="YouTube">📺</span>
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Schools</FooterTitle>
          <FooterLinks>
            <FooterLink to="/schools/ai">AI School</FooterLink>
            <FooterLink to="/schools/business">Business School</FooterLink>
            <FooterLink to="/schools/code">Code School</FooterLink>
            <FooterLink to="/schools/dedication">Dedication School</FooterLink>
            <FooterLink to="/schools/earn">Earn School</FooterLink>
            <FooterLink to="/schools/all">View All Schools</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Tools & Assets</FooterTitle>
          <FooterLinks>
            <FooterLink to="/tools">Browse Tools</FooterLink>
            <FooterLink to="/assets">Asset Gallery</FooterLink>
            <FooterLink to="/tools/category/map-makers">Map Makers</FooterLink>
            <FooterLink to="/tools/category/character-creators">Character Creators</FooterLink>
            <FooterLink to="/tools/category/town-simulators">Town Simulators</FooterLink>
            <FooterLink to="/tools/category/rpg-engines">RPG Engines</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Documentation</FooterTitle>
          <FooterLinks>
            <FooterLink to="/docs/getting-started">Getting Started</FooterLink>
            <FooterLink to="/docs/architecture">Architecture</FooterLink>
            <FooterLink to="/docs/asset-protocol">Asset Protocol</FooterLink>
            <FooterLink to="/docs/tool-development">Tool Development</FooterLink>
            <FooterLink to="/docs/api-reference">API Reference</FooterLink>
            <FooterLink to="/docs/tutorials">Tutorials</FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Community</FooterTitle>
          <FooterLinks>
            <FooterLink to="/contribute">How to Contribute</FooterLink>
            <FooterLink to="/roadmap">Roadmap</FooterLink>
            <FooterLink to="/showcase">Community Showcase</FooterLink>
            <FooterLink to="/events">Events & Meetups</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      
      <FooterBottom>
        <Copyright>
          © {new Date().getFullYear()} Alphabet Schools. All rights reserved.
        </Copyright>
        
        <LegalLinks>
          <LegalLink to="/terms">Terms of Service</LegalLink>
          <LegalLink to="/privacy">Privacy Policy</LegalLink>
          <LegalLink to="/cookies">Cookie Policy</LegalLink>
          <LegalLink to="/licenses">Licenses</LegalLink>
        </LegalLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
