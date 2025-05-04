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
  background-color: #27ae60;
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

const ComparisonSection = styled.div`
  margin-bottom: var(--spacing-xxl);
`;

const ComparisonTable = styled.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--primary);
  color: white;
  font-weight: 600;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TableHeaderCell = styled.div`
  padding: var(--spacing-lg);
  text-align: center;
  font-size: 1.2rem;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid var(--border);
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TableCell = styled.div`
  padding: var(--spacing-lg);
  
  &:first-child {
    font-weight: 600;
    background-color: var(--background);
  }
  
  @media (max-width: 768px) {
    border-bottom: ${props => props.isLast ? 'none' : '1px solid var(--border)'};
  }
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

const ListingSchoolPage = () => {
  const modules = [
    {
      number: 1,
      title: 'Listing Application Fundamentals',
      description: 'Learn the core concepts of listing applications and their role in connecting users with services and businesses.',
      topics: [
        'Introduction to listing applications',
        'Types of listings and business models',
        'User needs and expectations for listings',
        'Setting up your development environment'
      ]
    },
    {
      number: 2,
      title: 'Google Places API for Listings',
      description: 'Master the Google Places API features specifically relevant to creating robust listing applications.',
      topics: [
        'Google Places API overview and authentication',
        'Place details and business information',
        'Reviews and ratings integration',
        'Photos and visual content management'
      ]
    },
    {
      number: 3,
      title: 'Search & Discovery',
      description: 'Build powerful search and discovery features for your listing applications.',
      topics: [
        'Implementing advanced search functionality',
        'Filtering and sorting mechanisms',
        'Category-based discovery',
        'Personalized recommendations'
      ]
    },
    {
      number: 4,
      title: 'User-Generated Content',
      description: 'Integrate user-generated content to enhance your listing applications.',
      topics: [
        'User reviews and ratings systems',
        'Photo uploads and management',
        'Comment and discussion features',
        'Moderation and content quality'
      ]
    },
    {
      number: 5,
      title: 'Monetization Strategies',
      description: 'Explore various monetization approaches for listing applications.',
      topics: [
        'Subscription models for listing apps',
        'Featured listings and premium placement',
        'Commission and referral systems',
        'Advertising integration'
      ]
    },
    {
      number: 6,
      title: 'Scaling & Growth',
      description: 'Learn to scale your listing application and grow your user base.',
      topics: [
        'Performance optimization for listing apps',
        'Database design for scalability',
        'User acquisition strategies',
        'Analytics and growth metrics'
      ]
    }
  ];
  
  const projects = [
    {
      title: 'Real Estate Listings',
      description: 'Build a comprehensive real estate listing application with property details, neighborhood information, and agent contacts.',
      icon: '🏠'
    },
    {
      title: 'Job Board Platform',
      description: 'Create a specialized job listing platform with company profiles, application tracking, and skill matching.',
      icon: '💼'
    },
    {
      title: 'Event Discovery App',
      description: 'Develop an event listing application with ticket purchasing, venue information, and personalized recommendations.',
      icon: '🎭'
    },
    {
      title: 'Marketplace Directory',
      description: 'Build a local marketplace listing app connecting buyers with sellers of products and services in their area.',
      icon: '🛒'
    }
  ];
  
  const apiFeatures = [
    {
      title: 'Business Details',
      description: 'Access comprehensive business information including contact details, hours, and attributes.',
      icon: '📝'
    },
    {
      title: 'Reviews & Ratings',
      description: 'Integrate authentic user reviews and ratings to build trust in your listings.',
      icon: '⭐'
    },
    {
      title: 'Business Photos',
      description: 'Display high-quality photos of businesses and locations to enhance your listings.',
      icon: '📸'
    },
    {
      title: 'Category Search',
      description: 'Enable users to browse listings by specific categories and subcategories.',
      icon: '🔍'
    },
    {
      title: 'Opening Hours',
      description: 'Show accurate business hours and real-time open/closed status.',
      icon: '🕒'
    },
    {
      title: 'Attribute Filtering',
      description: 'Allow users to filter listings based on specific attributes like price level, accessibility, etc.',
      icon: '🔢'
    }
  ];
  
  const instructors = [
    {
      name: 'Sarah Johnson',
      title: 'Lead Instructor, Product Manager',
      bio: 'Former product manager at Yelp with expertise in listing applications and marketplace platforms.',
      avatar: '👩‍💼'
    },
    {
      name: 'David Rodriguez',
      title: 'Technical Instructor, Backend Developer',
      bio: 'Backend developer specialized in API integration and database design for high-traffic listing platforms.',
      avatar: '👨‍💻'
    },
    {
      name: 'Aisha Patel',
      title: 'Guest Instructor, UX Researcher',
      bio: 'UX researcher focused on user behavior in search and discovery interfaces for listing applications.',
      avatar: '👩‍🔬'
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <SchoolEmoji>📋</SchoolEmoji>
          <SchoolTitle>Listing School</SchoolTitle>
          <SchoolDescription>
            Specialize in creating listing applications with the Google Places API. 
            Build practical tools that connect users with businesses, services, and locations 
            while developing marketable skills that solve real business problems.
          </SchoolDescription>
          
          <StatsGrid>
            <StatCard>
              <StatValue>6</StatValue>
              <StatLabel>Months Duration</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>15+</StatValue>
              <StatLabel>Projects Built</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>88%</StatValue>
              <StatLabel>Revenue Success</StatLabel>
            </StatCard>
          </StatsGrid>
          
          <div>
            <CTAButton to="/apply">Apply Now</CTAButton>
            <SecondaryButton to="/apply-to-lead">Lead This School</SecondaryButton>
          </div>
        </HeroContent>
        
        <HeroImage>
          📋
        </HeroImage>
      </HeroSection>
      
      <APISection>
        <APITitle>Google Places API for Listing Applications</APITitle>
        <APIDescription>
          The Listing School focuses on leveraging the Google Places API to build powerful 
          listing applications. You'll learn to create specialized tools that connect users 
          with businesses and services through robust search and discovery features.
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
        
        <CodeBlock>{`// Sample code for fetching and displaying business details
const getBusinessDetails = async (placeId) => {
  try {
    const response = await fetch(
      \`https://maps.googleapis.com/maps/api/place/details/json?place_id=\${placeId}&fields=name,formatted_address,formatted_phone_number,opening_hours,rating,reviews,photos,price_level&key=YOUR_API_KEY\`
    );
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error("Error fetching business details:", error);
    return null;
  }
};

// Display business hours with open/closed status
const renderBusinessHours = (openingHours) => {
  const today = new Date().getDay();
  const isOpen = openingHours.open_now;
  
  return (
    <div className="business-hours">
      <div className="status \${isOpen ? 'open' : 'closed'}">
        {isOpen ? 'Open Now' : 'Closed'}
      </div>
      <div className="hours-list">
        {openingHours.weekday_text.map((day, index) => (
          <div key={index} className={\`day \${index === today ? 'today' : ''}\`}>
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};`}</CodeBlock>
      </APISection>
      
      <ComparisonSection>
        <SectionTitle>Directory vs. Listing Applications</SectionTitle>
        <SectionDescription>
          While both Directory School and Listing School use the Google Places API, they focus on 
          different aspects of location-based applications. Understanding these differences will 
          help you choose the right specialization for your interests and career goals.
        </SectionDescription>
        
        <ComparisonTable>
          <TableHeader>
            <TableHeaderCell>Directory Applications</TableHeaderCell>
            <TableHeaderCell>Listing Applications</TableHeaderCell>
          </TableHeader>
          
          <TableRow>
            <TableCell>Focus on comprehensive collections of places</TableCell>
            <TableCell>Focus on detailed individual listings with rich content</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell>Emphasis on search and discovery</TableCell>
            <TableCell>Emphasis on detailed information and user engagement</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell>Often location-centric (maps, proximity)</TableCell>
            <TableCell>Often category-centric (filters, attributes)</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell>Examples: City guides, store locators</TableCell>
            <TableCell>Examples: Real estate listings, job boards</TableCell>
          </TableRow>
          
          <TableRow>
            <TableCell>Revenue models: Advertising, premium listings</TableCell>
            <TableCell>Revenue models: Subscriptions, commissions, featured placement</TableCell>
          </TableRow>
        </ComparisonTable>
      </ComparisonSection>
      
      <CurriculumSection>
        <SectionTitle>Curriculum</SectionTitle>
        <SectionDescription>
          Our comprehensive curriculum covers everything from listing application fundamentals to 
          advanced monetization strategies, with a focus on building practical, revenue-generating 
          listing platforms.
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
          Throughout the program, you'll build practical listing applications that connect users 
          with businesses and services. Here are some example projects from previous cohorts.
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
          Learn from industry experts with deep experience in listing applications, 
          marketplace platforms, and the Google Places API.
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
        <CTATitle>Lead the Listing School</CTATitle>
        <CTADescription>
          Are you experienced with building listing applications and passionate about teaching others? 
          Apply to lead the next Listing School cohort. As a school leader, you'll earn income while 
          building your own listing product with the support of motivated students.
        </CTADescription>
        <CTAButton to="/apply-to-lead">Apply to Lead</CTAButton>
      </CTASection>
    </PageContainer>
  );
};

export default ListingSchoolPage;
