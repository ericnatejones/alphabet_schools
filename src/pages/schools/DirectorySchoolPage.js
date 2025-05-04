import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`;

const HeroSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xxl);
  margin-bottom: var(--spacing-xxl);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SchoolTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SchoolEmoji = styled.span`
  font-size: 4rem;
  display: block;
  margin-bottom: var(--spacing-md);
`;

const SchoolDescription = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
`;

const HeroImage = styled.div`
  background-color: #9b59b6;
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12rem;
  color: white;
  min-height: 400px;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  text-align: center;
  box-shadow: var(--shadow-sm);
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: var(--spacing-sm);
`;

const StatLabel = styled.div`
  color: var(--text-secondary);
  font-size: 1rem;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: var(--primary);
  color: white;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  text-decoration: none;
  margin-right: var(--spacing-md);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: transparent;
  color: var(--primary);
  border: 2px solid var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  text-decoration: none;
  
  &:hover {
    background-color: var(--primary);
    color: white;
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

const CurriculumSection = styled.div`
  margin-bottom: var(--spacing-xxl);
`;

const ModulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
`;

const ModuleCard = styled(motion.div)`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
`;

const ModuleNumber = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: var(--spacing-md);
`;

const ModuleTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
`;

const ModuleDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
`;

const ModuleTopics = styled.ul`
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
`;

const ModuleTopic = styled.li`
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
`;

const ProjectsSection = styled.div`
  margin-bottom: var(--spacing-xxl);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
`;

const ProjectCard = styled.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
`;

const ProjectImage = styled.div`
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: var(--primary);
`;

const ProjectContent = styled.div`
  padding: var(--spacing-lg);
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
`;

const APISection = styled.div`
  margin-bottom: var(--spacing-xxl);
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
`;

const APITitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: var(--spacing-md);
`;

const APIDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
`;

const APIFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`;

const APIFeature = styled.div`
  background-color: var(--background);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
`;

const APIFeatureTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: var(--spacing-sm);
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

const APIFeatureIcon = styled.span`
  font-size: 1.5rem;
`;

const APIFeatureDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
`;

const CodeBlock = styled.pre`
  background-color: var(--code-background);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  overflow-x: auto;
  margin-bottom: var(--spacing-lg);
  font-family: monospace;
  font-size: 0.9rem;
  line-height: 1.5;
  color: var(--code-text);
`;

const InstructorsSection = styled.div`
  margin-bottom: var(--spacing-xxl);
`;

const InstructorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-xl);
`;

const InstructorCard = styled.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  text-align: center;
`;

const InstructorImage = styled.div`
  height: 200px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  color: var(--primary);
`;

const InstructorContent = styled.div`
  padding: var(--spacing-lg);
`;

const InstructorName = styled.h3`
  font-size: 1.3rem;
  margin-bottom: var(--spacing-sm);
`;

const InstructorTitle = styled.p`
  color: var(--primary);
  font-weight: 600;
  margin-bottom: var(--spacing-md);
`;

const InstructorBio = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.6;
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

const DirectorySchoolPage = () => {
  const modules = [
    {
      number: 1,
      title: 'Directory Fundamentals',
      description: 'Learn the core concepts of directory applications and location-based services.',
      topics: [
        'Introduction to directory applications',
        'Types of directories and their use cases',
        'Location-based services overview',
        'Setting up your development environment'
      ]
    },
    {
      number: 2,
      title: 'Google Places API Essentials',
      description: 'Master the Google Places API and its core features for building directory applications.',
      topics: [
        'Google Places API overview and setup',
        'Authentication and API keys',
        'Basic place search and details',
        'Handling API responses and errors'
      ]
    },
    {
      number: 3,
      title: 'Advanced Place Search',
      description: 'Implement sophisticated search functionality for directory applications.',
      topics: [
        'Nearby search implementation',
        'Text search and autocomplete',
        'Filtering and sorting results',
        'Pagination and result management'
      ]
    },
    {
      number: 4,
      title: 'Maps Integration',
      description: 'Combine Google Maps with Places API to create visual directory interfaces.',
      topics: [
        'Google Maps JavaScript API basics',
        'Displaying places on maps',
        'Custom markers and info windows',
        'Interactive map features for directories'
      ]
    },
    {
      number: 5,
      title: 'User Experience & UI Design',
      description: 'Design intuitive and engaging interfaces for directory applications.',
      topics: [
        'Directory UX best practices',
        'Mobile-first design for location apps',
        'Search and filter UI patterns',
        'Accessibility considerations for directory apps'
      ]
    },
    {
      number: 6,
      title: 'Directory App Deployment',
      description: 'Launch and scale your directory application for real-world usage.',
      topics: [
        'Performance optimization for directory apps',
        'Caching strategies for API requests',
        'Deployment and hosting options',
        'Analytics and user behavior tracking'
      ]
    }
  ];
  
  const projects = [
    {
      title: 'Local Restaurant Finder',
      description: 'Build a directory application that helps users discover and filter restaurants based on cuisine, price range, and ratings.',
      icon: '🍽️'
    },
    {
      title: 'Service Provider Directory',
      description: 'Create a comprehensive directory of service providers like plumbers, electricians, and home cleaners with reviews and availability.',
      icon: '🔧'
    },
    {
      title: 'Tourist Attraction Guide',
      description: 'Develop an interactive guide to tourist attractions with custom categories, visit planning, and offline capabilities.',
      icon: '🏛️'
    },
    {
      title: 'Specialty Store Locator',
      description: 'Build a specialized directory for niche retail stores with inventory search and availability checking.',
      icon: '🏪'
    }
  ];
  
  const apiFeatures = [
    {
      title: 'Place Search',
      description: 'Find places based on user queries, location, and specific criteria.',
      icon: '🔍'
    },
    {
      title: 'Place Details',
      description: 'Retrieve comprehensive information about specific places including photos, reviews, and hours.',
      icon: '📋'
    },
    {
      title: 'Place Photos',
      description: 'Access high-quality photos of places to enhance your directory listings.',
      icon: '📸'
    },
    {
      title: 'Autocomplete',
      description: "Implement predictive search to help users quickly find what they're looking for.",
      icon: '✍️'
    },
    {
      title: 'Geocoding',
      description: 'Convert addresses to geographic coordinates and vice versa for mapping functionality.',
      icon: '🌐'
    },
    {
      title: 'Distance Matrix',
      description: 'Calculate travel times and distances between locations for enhanced user experience.',
      icon: '📏'
    }
  ];
  
  const instructors = [
    {
      name: 'Alex Thompson',
      title: 'Lead Instructor, GIS Specialist',
      bio: 'Former Google Maps engineer with expertise in location-based services and geospatial applications.',
      avatar: '👨‍💻'
    },
    {
      name: 'Priya Sharma',
      title: 'Technical Instructor, Full-Stack Developer',
      bio: 'Full-stack developer who has built multiple successful directory applications for various industries.',
      avatar: '👩‍💻'
    },
    {
      name: 'Marcus Chen',
      title: 'Guest Instructor, UX Designer',
      bio: 'UX designer specializing in location-based applications with a focus on intuitive search and discovery experiences.',
      avatar: '👨‍🎨'
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <SchoolEmoji>📂</SchoolEmoji>
          <SchoolTitle>Directory School</SchoolTitle>
          <SchoolDescription>
            Learn to build comprehensive directory applications using the Google Places API. 
            Create location-based tools that help users discover and navigate places of interest 
            while developing practical skills that solve real-world problems.
          </SchoolDescription>
          
          <StatsGrid>
            <StatCard>
              <StatValue>6</StatValue>
              <StatLabel>Months Duration</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>20+</StatValue>
              <StatLabel>Projects Built</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>92%</StatValue>
              <StatLabel>Job Placement</StatLabel>
            </StatCard>
          </StatsGrid>
          
          <div>
            <CTAButton to="/apply">Apply Now</CTAButton>
            <SecondaryButton to="/apply-to-lead">Lead This School</SecondaryButton>
          </div>
        </HeroContent>
        
        <HeroImage>
          📂
        </HeroImage>
      </HeroSection>
      
      <APISection>
        <APITitle>Google Places API Integration</APITitle>
        <APIDescription>
          The Directory School focuses on mastering the Google Places API to build powerful 
          directory applications. You'll learn to leverage this robust API to create tools 
          that connect users with businesses, services, and locations around the world.
        </APIDescription>
        
        <APIFeatures>
          {apiFeatures.map((feature, index) => (
            <APIFeature key={index}>
              <APIFeatureTitle>
                <APIFeatureIcon>{feature.icon}</APIFeatureIcon>
                {feature.title}
              </APIFeatureTitle>
              <APIFeatureDescription>{feature.description}</APIFeatureDescription>
            </APIFeature>
          ))}
        </APIFeatures>
        
        <CodeBlock>{`// Sample Google Places API request
const getNearbyRestaurants = async (location) => {
  try {
    const response = await fetch(
      \`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=\${location.lat},\${location.lng}&radius=1500&type=restaurant&key=YOUR_API_KEY\`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching nearby restaurants:", error);
    return [];
  }
};`}</CodeBlock>
      </APISection>
      
      <CurriculumSection>
        <SectionTitle>Curriculum</SectionTitle>
        <SectionDescription>
          Our comprehensive curriculum covers everything from directory fundamentals to 
          advanced Google Places API integration, with a focus on building practical, 
          user-friendly directory applications.
        </SectionDescription>
        
        <ModulesGrid>
          {modules.map((module, index) => (
            <ModuleCard 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ModuleNumber>{module.number}</ModuleNumber>
              <ModuleTitle>{module.title}</ModuleTitle>
              <ModuleDescription>{module.description}</ModuleDescription>
              <ModuleTopics>
                {module.topics.map((topic, i) => (
                  <ModuleTopic key={i}>{topic}</ModuleTopic>
                ))}
              </ModuleTopics>
            </ModuleCard>
          ))}
        </ModulesGrid>
      </CurriculumSection>
      
      <ProjectsSection>
        <SectionTitle>Student Projects</SectionTitle>
        <SectionDescription>
          Throughout the program, you'll build practical directory applications that solve 
          real problems for users. Here are some example projects from previous cohorts.
        </SectionDescription>
        
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectImage>
                {project.icon}
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsSection>
      
      <InstructorsSection>
        <SectionTitle>Your Instructors</SectionTitle>
        <SectionDescription>
          Learn from industry experts with deep experience in location-based services, 
          directory applications, and the Google Places API.
        </SectionDescription>
        
        <InstructorsGrid>
          {instructors.map((instructor, index) => (
            <InstructorCard key={index}>
              <InstructorImage>
                {instructor.avatar}
              </InstructorImage>
              <InstructorContent>
                <InstructorName>{instructor.name}</InstructorName>
                <InstructorTitle>{instructor.title}</InstructorTitle>
                <InstructorBio>{instructor.bio}</InstructorBio>
              </InstructorContent>
            </InstructorCard>
          ))}
        </InstructorsGrid>
      </InstructorsSection>
      
      <CTASection>
        <CTATitle>Lead the Directory School</CTATitle>
        <CTADescription>
          Are you experienced with the Google Places API and passionate about building directory applications? 
          Apply to lead the next Directory School cohort. As a school leader, you'll earn income while 
          building your own directory product with the support of motivated students.
        </CTADescription>
        <CTAButton to="/apply-to-lead">Apply to Lead</CTAButton>
      </CTASection>
    </PageContainer>
  );
};

export default DirectorySchoolPage;
