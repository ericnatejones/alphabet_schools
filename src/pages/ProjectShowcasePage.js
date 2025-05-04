import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xxl);
`;

const PageTitle = styled.h1`
  margin-bottom: var(--spacing-md);
  font-size: 3rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const PageDescription = styled.p`
  color: var(--text-secondary);
  font-size: 1.2rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-xl);
  max-width: 800px;
  line-height: 1.6;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
`;

const ProjectCard = styled(motion.div)`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.div`
  height: 200px;
  background-color: ${props => props.bgColor || '#f0f0f0'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
`;

const ProjectContent = styled.div`
  padding: var(--spacing-lg);
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
  flex: 1;
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const ProjectTags = styled.div`
  display: flex;
  gap: var(--spacing-xs);
`;

const ProjectTag = styled.span`
  background-color: ${props => props.bgColor || 'var(--primary-light)'};
  color: ${props => props.color || 'var(--primary)'};
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  font-weight: 600;
`;

const ProjectLink = styled(Link)`
  color: var(--primary);
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

const FeatureSection = styled.div`
  margin-bottom: var(--spacing-xxl);
`;

const FeatureCard = styled.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-xl);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FeatureTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: var(--spacing-md);
`;

const FeatureDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
`;

const FeaturePoints = styled.ul`
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`;

const FeaturePoint = styled.li`
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
`;

const FeatureImage = styled.div`
  background-color: ${props => props.bgColor || '#f0f0f0'};
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: white;
  min-height: 300px;
`;

const CTASection = styled.section`
  text-align: center;
  padding: var(--spacing-xxl) var(--spacing-lg);
  background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
  color: white;
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-xxl);
`;

const CTATitle = styled.h2`
  margin-bottom: var(--spacing-lg);
  font-size: 2.5rem;
`;

const CTADescription = styled.p`
  max-width: 800px;
  margin: 0 auto var(--spacing-xl);
  font-size: 1.2rem;
  opacity: 0.9;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: white;
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  text-decoration: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectShowcasePage = () => {
  const projects = [
    {
      title: "Local Eats Explorer",
      description: "A comprehensive restaurant directory application that combines beautiful food photography assets with the Google Places API to help users discover local dining options.",
      icon: "🍽️",
      bgColor: "#e74c3c",
      tags: [
        { name: "Directory", bgColor: "#9b59b6", color: "white" },
        { name: "Listing", bgColor: "#27ae60", color: "white" }
      ]
    },
    {
      title: "Artisan Marketplace",
      description: "A platform connecting local artisans with customers, featuring high-quality product photography and detailed business listings powered by the Google Places API.",
      icon: "🎨",
      bgColor: "#3498db",
      tags: [
        { name: "Listing", bgColor: "#27ae60", color: "white" },
        { name: "AI", bgColor: "#3498db", color: "white" }
      ]
    },
    {
      title: "TourGuide Pro",
      description: "An interactive tourist guide application with stunning visual assets of attractions combined with detailed location information from the Google Places API.",
      icon: "🗺️",
      bgColor: "#f39c12",
      tags: [
        { name: "Directory", bgColor: "#9b59b6", color: "white" },
        { name: "Code", bgColor: "#e74c3c", color: "white" }
      ]
    },
    {
      title: "Service Finder",
      description: "A comprehensive directory of local service providers with verified reviews, appointment booking, and professional profile assets for businesses.",
      icon: "🔧",
      bgColor: "#2ecc71",
      tags: [
        { name: "Directory", bgColor: "#9b59b6", color: "white" },
        { name: "Business", bgColor: "#2ecc71", color: "white" }
      ]
    },
    {
      title: "Event Horizon",
      description: "An event discovery platform featuring professional event photography assets and detailed venue information powered by the Google Places API.",
      icon: "🎭",
      bgColor: "#9b59b6",
      tags: [
        { name: "Listing", bgColor: "#27ae60", color: "white" },
        { name: "Innovation", bgColor: "#d35400", color: "white" }
      ]
    },
    {
      title: "Real Estate Showcase",
      description: "A property listing application with professional real estate photography and virtual tours combined with neighborhood data from the Google Places API.",
      icon: "🏠",
      bgColor: "#34495e",
      tags: [
        { name: "Listing", bgColor: "#27ae60", color: "white" },
        { name: "Directory", bgColor: "#9b59b6", color: "white" }
      ]
    }
  ];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Project Showcase</PageTitle>
        <PageDescription>
          Explore how our students combine the creative asset side with practical listing applications 
          to build powerful tools that solve real-world problems.
        </PageDescription>
      </PageHeader>
      
      <FeatureSection>
        <FeatureCard>
          <FeatureContent>
            <FeatureTitle>Bridging Creativity and Practicality</FeatureTitle>
            <FeatureDescription>
              The Alphabet Schools Studio platform uniquely combines creative asset creation with 
              practical listing applications powered by the Google Places API. This dual approach 
              allows students to build comprehensive solutions that are both visually appealing 
              and functionally robust.
            </FeatureDescription>
            <FeaturePoints>
              <FeaturePoint>Students learn to create polished visual assets in creative schools</FeaturePoint>
              <FeaturePoint>Directory School teaches building location-based discovery tools</FeaturePoint>
              <FeaturePoint>Listing School focuses on detailed business and service listings</FeaturePoint>
              <FeaturePoint>Projects combine these skills for complete, market-ready applications</FeaturePoint>
            </FeaturePoints>
            <ProjectLink to="/schools">Explore Our Schools →</ProjectLink>
          </FeatureContent>
          <FeatureImage bgColor="linear-gradient(135deg, #9b59b6 0%, #27ae60 100%)">
            🔄
          </FeatureImage>
        </FeatureCard>
      </FeatureSection>
      
      <SectionTitle>Featured Projects</SectionTitle>
      <SectionDescription>
        These projects showcase how students have combined their skills from different schools to create 
        comprehensive applications that leverage both creative assets and the Google Places API.
      </SectionDescription>
      
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <ProjectImage bgColor={project.bgColor}>
              {project.icon}
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectMeta>
                <ProjectTags>
                  {project.tags.map((tag, i) => (
                    <ProjectTag key={i} bgColor={tag.bgColor} color={tag.color}>
                      {tag.name}
                    </ProjectTag>
                  ))}
                </ProjectTags>
                <ProjectLink to="/projects">View Details</ProjectLink>
              </ProjectMeta>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
      
      <FeatureSection>
        <SectionTitle>How It Works</SectionTitle>
        <SectionDescription>
          Our unique educational approach combines creative asset development with practical 
          listing applications to create a comprehensive learning experience.
        </SectionDescription>
        
        <FeatureCard>
          <FeatureImage bgColor="#9b59b6">
            📂
          </FeatureImage>
          <FeatureContent>
            <FeatureTitle>Directory School</FeatureTitle>
            <FeatureDescription>
              In Directory School, students learn to build comprehensive directory applications 
              using the Google Places API. These applications help users discover and navigate 
              places of interest through intuitive interfaces and powerful search capabilities.
            </FeatureDescription>
            <FeaturePoints>
              <FeaturePoint>Master the Google Places API for location-based services</FeaturePoint>
              <FeaturePoint>Build search and discovery features for directories</FeaturePoint>
              <FeaturePoint>Create map-based interfaces with custom markers and info windows</FeaturePoint>
              <FeaturePoint>Implement filtering and sorting mechanisms for better user experience</FeaturePoint>
            </FeaturePoints>
            <ProjectLink to="/schools/directory">Learn More About Directory School →</ProjectLink>
          </FeatureContent>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureContent>
            <FeatureTitle>Listing School</FeatureTitle>
            <FeatureDescription>
              Listing School focuses on creating detailed listing applications with the Google Places API. 
              Students learn to build platforms that connect users with businesses, services, and locations 
              through rich, detailed listings with advanced features.
            </FeatureDescription>
            <FeaturePoints>
              <FeaturePoint>Create comprehensive business and service listings</FeaturePoint>
              <FeaturePoint>Implement reviews, ratings, and user-generated content</FeaturePoint>
              <FeaturePoint>Build category-based browsing and advanced filtering</FeaturePoint>
              <FeaturePoint>Develop monetization strategies for listing platforms</FeaturePoint>
            </FeaturePoints>
            <ProjectLink to="/schools/listing">Learn More About Listing School →</ProjectLink>
          </FeatureContent>
          <FeatureImage bgColor="#27ae60">
            📋
          </FeatureImage>
        </FeatureCard>
        
        <FeatureCard>
          <FeatureImage bgColor="linear-gradient(135deg, #3498db 0%, #e74c3c 100%)">
            🎨
          </FeatureImage>
          <FeatureContent>
            <FeatureTitle>Creative Asset Development</FeatureTitle>
            <FeatureDescription>
              Complementing our directory and listing applications, students also learn to create 
              high-quality visual assets through our creative schools. These assets enhance the 
              user experience and make applications more engaging and professional.
            </FeatureDescription>
            <FeaturePoints>
              <FeaturePoint>Develop photography, illustration, and design skills</FeaturePoint>
              <FeaturePoint>Create branded visual elements for applications</FeaturePoint>
              <FeaturePoint>Build interactive and animated components</FeaturePoint>
              <FeaturePoint>Implement consistent visual language across platforms</FeaturePoint>
            </FeaturePoints>
            <ProjectLink to="/schools">Explore Creative Schools →</ProjectLink>
          </FeatureContent>
        </FeatureCard>
      </FeatureSection>
      
      <CTASection>
        <CTATitle>Build Your Own Project</CTATitle>
        <CTADescription>
          Ready to combine creative assets with practical listing applications? Join one of our schools 
          and start building your own project with the support of our community and instructors.
        </CTADescription>
        <CTAButton to="/apply">Apply Now</CTAButton>
      </CTASection>
    </PageContainer>
  );
};

export default ProjectShowcasePage;
