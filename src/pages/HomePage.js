import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Components
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: var(--spacing-xxl) var(--spacing-lg);
  background: linear-gradient(135deg, var(--primary) 0%, #9b59b6 100%);
  color: white;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: var(--spacing-lg);
  animation: ${fadeIn} 0.8s ease forwards;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: var(--spacing-xl);
  max-width: 700px;
  opacity: 0;
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: 0.3s;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: var(--spacing-md);
  opacity: 0;
  animation: ${fadeIn} 0.8s ease forwards;
  animation-delay: 0.6s;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const PrimaryButton = styled(Link)`
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: white;
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  transition: all var(--transition-fast);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SecondaryButton = styled(Link)`
  padding: var(--spacing-md) var(--spacing-lg);
  border: 2px solid white;
  color: white;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  opacity: 0.1;
  background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTRtMC0xMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNG0xMCA1YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00bS0xMC01YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00bS0xMCA1YzAtMi4yMDktMS43OTEtNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00Ii8+PC9nPjwvZz48L3N2Zz4=');
`;

const floatAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const BackgroundIcon = styled.div`
  position: absolute;
  font-size: 2.5rem;
  opacity: 0.5;
  animation: ${floatAnimation} 3s ease-in-out infinite;
  z-index: 1;
`;

const FeaturedSection = styled.section`
  padding: var(--spacing-xxl) var(--spacing-lg);
  background-color: var(--background);
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  margin-bottom: var(--spacing-lg);
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--spacing-md);
  font-size: 2.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionDescription = styled.p`
  text-align: center;
  max-width: 800px;
  margin: 0 auto var(--spacing-xxl);
  color: var(--text-secondary);
  font-size: 1.2rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const FeaturedHighlight = styled.div`
  margin-bottom: var(--spacing-xxl);
`;

const HighlightCard = styled.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HighlightContent = styled.div`
  flex: 1;
`;

const HighlightTitle = styled.h3`
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
`;

const HighlightDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
`;

const HighlightButton = styled(Link)`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--primary);
  color: white;
  border-radius: var(--border-radius-md);
  font-size: 0.9rem;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--secondary);
  }
`;

const HighlightImage = styled.div`
  margin-left: var(--spacing-lg);
  font-size: 3rem;
  color: var(--primary);
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
`;

const SchoolCard = styled(Link)`
  background-color: var(--background);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  text-decoration: none;
  color: var(--text-primary);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const SchoolCardHeader = styled.div`
  padding: var(--spacing-md);
  background-color: var(--primary);
  color: white;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const SchoolEmoji = styled.span`
  font-size: 2rem;
  margin-right: var(--spacing-sm);
`;

const FeaturedBadge = styled.span`
  background-color: var(--secondary);
  color: white;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-md);
  font-size: 0.8rem;
  margin-left: var(--spacing-sm);
`;

const SchoolCardContent = styled.div`
  padding: var(--spacing-lg);
`;

const SchoolName = styled.h3`
  margin-bottom: var(--spacing-md);
  font-size: 1.25rem;
`;

const SchoolDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-md);
`;

const SectionButton = styled(Link)`
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--primary);
  color: white;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  transition: all var(--transition-fast);
  display: block;
  text-align: center;
  margin-top: var(--spacing-lg);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-lg);
`;

const Tab = styled.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: ${props => props.active === 'true' ? 'var(--primary)' : 'var(--background)'};
  color: ${props => props.active === 'true' ? 'white' : 'var(--text-primary)'};
  border-radius: var(--border-radius-md);
  font-size: 0.9rem;
  transition: all var(--transition-fast);
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.active === 'true' ? 'var(--secondary)' : 'var(--surface)'};
  }
`;

const ToolCard = styled(Link)`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  text-decoration: none;
  color: var(--text-primary);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const ToolCardHeader = styled.div`
  padding: var(--spacing-md);
  background-color: var(--primary);
  color: white;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

const ToolIcon = styled.span`
  font-size: 2rem;
  margin-right: var(--spacing-sm);
`;

const ToolCardContent = styled.div`
  padding: var(--spacing-lg);
`;

const ToolName = styled.h3`
  margin-bottom: var(--spacing-md);
  font-size: 1.25rem;
`;

const ToolDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-md);
`;

const CTASection = styled.section`
  padding: var(--spacing-xxl) var(--spacing-lg);
  background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
  color: white;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: var(--spacing-lg);
`;

const CTAButton = styled(Link)`
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: white;
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  display: inline-block;
  margin-right: var(--spacing-md);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const CTASecondaryButton = styled(Link)`
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: var(--secondary);
  color: white;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  display: inline-block;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  const featuredSchools = [
    {
      id: 'ai',
      name: 'AI School',
      emoji: '🤖',
      color: '#3498db',
      description: 'Learn to integrate AI into creative tools and workflows. Explore machine learning, natural language processing, and computer vision to enhance creative applications.'
    },
    {
      id: 'directory',
      name: 'Directory School',
      emoji: '📂',
      color: '#9b59b6',
      description: 'Learn to build comprehensive directory applications using the Google Places API. Create location-based tools that help users discover and navigate places of interest.',
      featured: true
    },
    {
      id: 'code',
      name: 'Code School',
      emoji: '💻',
      color: '#e74c3c',
      description: 'Develop core programming skills for creative applications. Focus on software architecture, performance optimization, and cross-platform development.'
    },
    {
      id: 'listing',
      name: 'Listing School',
      emoji: '📋',
      color: '#27ae60',
      description: 'Specialize in creating listing applications with the Google Places API. Build practical tools that connect users with businesses, services, and locations.',
      featured: true
    }
  ];
  
  const featuredTools = [
    {
      id: 'asset-creator',
      name: 'Asset Creator',
      icon: '🎨',
      description: 'Create and manage digital assets with support for multiple formats and collaborative editing.'
    },
    {
      id: 'directory-builder',
      name: 'Directory Builder',
      icon: '📂',
      description: 'Build powerful directory applications with Google Places API integration and customizable search features.',
      featured: true
    },
    {
      id: 'code-playground',
      name: 'Code Playground',
      icon: '💻',
      description: 'Experiment with code in a safe environment with real-time collaboration and version control.'
    },
    {
      id: 'listing-forge',
      name: 'Listing Forge',
      icon: '📋',
      description: 'Create detailed listing applications with rich content, reviews, and business information integration.',
      featured: true
    }
  ];

  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Learn by Building</HeroTitle>
          <HeroSubtitle>
            Join a community of creators building the next generation of tools for education, 
            creativity, and practical applications.
          </HeroSubtitle>
          <ButtonGroup>
            <PrimaryButton to="/schools">Explore Schools</PrimaryButton>
            <SecondaryButton to="/projects">View Projects</SecondaryButton>
          </ButtonGroup>
        </HeroContent>
        <HeroBackground>
          <BackgroundIcon style={{ top: '10%', left: '10%', animationDelay: '0s' }}>🎨</BackgroundIcon>
          <BackgroundIcon style={{ top: '20%', right: '15%', animationDelay: '0.5s' }}>💻</BackgroundIcon>
          <BackgroundIcon style={{ bottom: '15%', left: '20%', animationDelay: '1s' }}>📂</BackgroundIcon>
          <BackgroundIcon style={{ bottom: '30%', right: '10%', animationDelay: '1.5s' }}>📋</BackgroundIcon>
          <BackgroundIcon style={{ top: '40%', left: '30%', animationDelay: '2s' }}>🤖</BackgroundIcon>
        </HeroBackground>
      </HeroSection>
      
      <FeaturedSection>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Featured Schools</SectionTitle>
            <SectionDescription>
              Our alphabet of schools teaches different aspects of creation and development.
              Students learn by building actual tools used by the community.
            </SectionDescription>
          </SectionHeader>
          
          <FeaturedHighlight>
            <HighlightCard>
              <HighlightContent>
                <HighlightTitle>New: Directory & Listing Schools</HighlightTitle>
                <HighlightDescription>
                  Build practical applications using the Google Places API. Learn to create 
                  directory and listing tools that connect users with businesses, services, 
                  and locations while showcasing your creative assets.
                </HighlightDescription>
                <HighlightButton to="/projects">View Sample Projects</HighlightButton>
              </HighlightContent>
              <HighlightImage>
                <span style={{ fontSize: '3rem', marginRight: '1rem' }}>📂</span>
                <span style={{ fontSize: '3rem' }}>📋</span>
              </HighlightImage>
            </HighlightCard>
          </FeaturedHighlight>
          
          <CardsGrid>
            {featuredSchools.map(school => (
              <SchoolCard to={`/schools/${school.id}`} key={school.id}>
                <SchoolCardHeader style={{ backgroundColor: school.color }}>
                  <SchoolEmoji>{school.emoji}</SchoolEmoji>
                  {school.featured && <FeaturedBadge>Featured</FeaturedBadge>}
                </SchoolCardHeader>
                <SchoolCardContent>
                  <SchoolName>{school.name}</SchoolName>
                  <SchoolDescription>{school.description}</SchoolDescription>
                </SchoolCardContent>
              </SchoolCard>
            ))}
          </CardsGrid>
          
          <SectionButton to="/schools">View All Schools</SectionButton>
        </SectionContainer>
      </FeaturedSection>
      
      <FeaturedSection style={{ backgroundColor: 'var(--background)' }}>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle>Featured Tools</SectionTitle>
            <SectionDescription>
              Explore tools created by our students and alumni. These tools are used by the 
              community and showcase the skills learned in our schools.
            </SectionDescription>
          </SectionHeader>
          
          <TabsContainer>
            <Tab 
              active={activeTab === 'all' ? 'true' : 'false'} 
              onClick={() => setActiveTab('all')}
            >
              All Tools
            </Tab>
            <Tab 
              active={activeTab === 'creative' ? 'true' : 'false'} 
              onClick={() => setActiveTab('creative')}
            >
              Creative
            </Tab>
            <Tab 
              active={activeTab === 'practical' ? 'true' : 'false'} 
              onClick={() => setActiveTab('practical')}
            >
              Practical
            </Tab>
          </TabsContainer>
          
          <CardsGrid>
            {featuredTools.map(tool => (
              <ToolCard to={`/tools/${tool.id}`} key={tool.id}>
                <ToolCardHeader>
                  <ToolIcon>{tool.icon}</ToolIcon>
                  {tool.featured && <FeaturedBadge>Featured</FeaturedBadge>}
                </ToolCardHeader>
                <ToolCardContent>
                  <ToolName>{tool.name}</ToolName>
                  <ToolDescription>{tool.description}</ToolDescription>
                </ToolCardContent>
              </ToolCard>
            ))}
          </CardsGrid>
          
          <SectionButton to="/tools">View All Tools</SectionButton>
        </SectionContainer>
      </FeaturedSection>
      
      <CTASection>
        <CTAContent>
          <CTATitle>Build While You Learn</CTATitle>
          <CTADescription>
            Join our community of creators and build real tools that solve practical problems.
            Learn by doing and earn income while you develop your skills.
          </CTADescription>
          <CTAButtons>
            <CTAButton to="/apply">Apply Now</CTAButton>
            <CTASecondaryButton to="/alumni-payments">Learn About Alumni Payments</CTASecondaryButton>
          </CTAButtons>
        </CTAContent>
      </CTASection>
    </>
  );
};

export default HomePage;
