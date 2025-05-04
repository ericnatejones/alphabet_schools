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
  background-color: #3498db;
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

const CohortsSection = styled.div`
  margin-bottom: var(--spacing-xxl);
`;

const CohortCard = styled.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-lg);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CohortContent = styled.div``;

const CohortTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
`;

const CohortDetails = styled.div`
  margin-bottom: var(--spacing-lg);
`;

const CohortDetail = styled.div`
  display: flex;
  margin-bottom: var(--spacing-sm);
`;

const DetailLabel = styled.div`
  font-weight: 600;
  width: 120px;
  color: var(--text-primary);
`;

const DetailValue = styled.div`
  color: var(--text-secondary);
`;

const CohortDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
`;

const CohortCTA = styled.div``;

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

const AISchoolPage = () => {
  const modules = [
    {
      number: 1,
      title: 'Foundations of AI in Creative Tools',
      description: 'Learn the fundamental concepts of AI and how they apply to creative tool development.',
      topics: [
        'Introduction to AI concepts and terminology',
        'History of AI in creative applications',
        'Ethics and responsible AI development',
        'Setting up your AI development environment'
      ]
    },
    {
      number: 2,
      title: 'Machine Learning Basics',
      description: 'Understand core machine learning concepts and implement basic algorithms for creative applications.',
      topics: [
        'Supervised vs. unsupervised learning',
        'Training and evaluation metrics',
        'Feature engineering for creative data',
        'Implementing simple ML models with TensorFlow/PyTorch'
      ]
    },
    {
      number: 3,
      title: 'Natural Language Processing',
      description: 'Explore NLP techniques for text generation, analysis, and interaction in creative tools.',
      topics: [
        'Text preprocessing and tokenization',
        'Word embeddings and language models',
        'Implementing text generation systems',
        'Building conversational interfaces for tools'
      ]
    },
    {
      number: 4,
      title: 'Computer Vision for Creators',
      description: 'Apply computer vision techniques to analyze, generate, and manipulate visual content.',
      topics: [
        'Image processing fundamentals',
        'Object detection and recognition',
        'Generative models for images (GANs, diffusion)',
        'Style transfer and image manipulation'
      ]
    },
    {
      number: 5,
      title: 'Generative AI Systems',
      description: 'Build advanced generative systems that can create new content based on user inputs.',
      topics: [
        'Architecture of generative models',
        'Prompt engineering and control mechanisms',
        'Multi-modal generation (text, image, audio)',
        'Evaluation and fine-tuning of generative outputs'
      ]
    },
    {
      number: 6,
      title: 'AI Tool Integration & Deployment',
      description: 'Learn to integrate AI capabilities into production-ready creative tools and platforms.',
      topics: [
        'API design for AI-powered features',
        'Performance optimization and scaling',
        'User experience considerations for AI tools',
        'Deployment strategies and monitoring'
      ]
    }
  ];
  
  const projects = [
    {
      title: 'AI-Powered Image Editor',
      description: 'Build an image editing tool that uses AI to enhance photos, generate backgrounds, and apply intelligent filters based on content.',
      icon: '🖼️'
    },
    {
      title: 'Creative Writing Assistant',
      description: 'Develop a tool that helps writers by generating ideas, continuing text, and providing feedback on style and structure.',
      icon: '✍️'
    },
    {
      title: 'Music Composition Helper',
      description: 'Create a system that assists musicians in composing by generating melodies, harmonies, and accompaniments based on user input.',
      icon: '🎵'
    },
    {
      title: 'Interactive Character Generator',
      description: 'Build a tool for game developers and storytellers to generate and animate characters based on text descriptions.',
      icon: '👾'
    }
  ];
  
  const instructors = [
    {
      name: 'Dr. Maya Chen',
      title: 'Lead Instructor, AI Research Scientist',
      bio: 'Former AI researcher at OpenAI with expertise in generative models and creative applications of machine learning.',
      avatar: '👩‍🔬'
    },
    {
      name: 'Jamal Washington',
      title: 'Technical Instructor, ML Engineer',
      bio: 'Machine learning engineer with 8 years of experience building AI-powered tools for creative industries.',
      avatar: '👨‍💻'
    },
    {
      name: 'Sofia Rodriguez',
      title: 'Guest Instructor, Creative Technologist',
      bio: 'Award-winning artist and technologist specializing in the intersection of AI and interactive media.',
      avatar: '👩‍🎨'
    }
  ];
  
  const cohorts = [
    {
      title: 'Summer 2025 Cohort',
      startDate: 'June 15, 2025',
      endDate: 'December 15, 2025',
      format: 'Hybrid (Online + 2 In-Person Workshops)',
      status: 'Open for Applications',
      spots: '25 spots available',
      description: 'Our summer cohort focuses on building AI tools for visual artists and designers. Perfect for those interested in computer vision and generative image models.'
    },
    {
      title: 'Fall 2025 Cohort',
      startDate: 'September 10, 2025',
      endDate: 'March 10, 2026',
      format: 'Fully Online',
      status: 'Coming Soon',
      spots: '30 spots will be available',
      description: 'The fall cohort will emphasize natural language processing and text generation tools. Ideal for those interested in writing assistants and conversational interfaces.'
    }
  ];

  return (
    <PageContainer>
      <HeroSection>
        <HeroContent>
          <SchoolEmoji>🤖</SchoolEmoji>
          <SchoolTitle>AI School</SchoolTitle>
          <SchoolDescription>
            Learn to integrate AI into creative tools and workflows. Explore machine learning, 
            natural language processing, and computer vision to enhance creative applications 
            and build the next generation of intelligent tools.
          </SchoolDescription>
          
          <StatsGrid>
            <StatCard>
              <StatValue>6</StatValue>
              <StatLabel>Months Duration</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>25+</StatValue>
              <StatLabel>Projects Built</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>94%</StatValue>
              <StatLabel>Completion Rate</StatLabel>
            </StatCard>
          </StatsGrid>
          
          <div>
            <CTAButton to="/apply">Apply Now</CTAButton>
            <SecondaryButton to="/apply-to-lead">Lead This School</SecondaryButton>
          </div>
        </HeroContent>
        
        <HeroImage>
          🤖
        </HeroImage>
      </HeroSection>
      
      <CurriculumSection>
        <SectionTitle>Curriculum</SectionTitle>
        <SectionDescription>
          Our comprehensive curriculum covers everything from AI fundamentals to advanced 
          generative systems, with a focus on practical applications for creative tools.
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
          Throughout the program, you'll build practical AI-powered tools that solve real problems 
          for creators. Here are some example projects from previous cohorts.
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
          Learn from industry experts with deep experience in both AI research and practical 
          applications in creative fields.
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
      
      <CohortsSection>
        <SectionTitle>Upcoming Cohorts</SectionTitle>
        <SectionDescription>
          Join one of our upcoming cohorts and start your journey to becoming an AI tool creator.
        </SectionDescription>
        
        {cohorts.map((cohort, index) => (
          <CohortCard key={index}>
            <CohortContent>
              <CohortTitle>{cohort.title}</CohortTitle>
              <CohortDetails>
                <CohortDetail>
                  <DetailLabel>Start Date:</DetailLabel>
                  <DetailValue>{cohort.startDate}</DetailValue>
                </CohortDetail>
                <CohortDetail>
                  <DetailLabel>End Date:</DetailLabel>
                  <DetailValue>{cohort.endDate}</DetailValue>
                </CohortDetail>
                <CohortDetail>
                  <DetailLabel>Format:</DetailLabel>
                  <DetailValue>{cohort.format}</DetailValue>
                </CohortDetail>
                <CohortDetail>
                  <DetailLabel>Status:</DetailLabel>
                  <DetailValue>{cohort.status}</DetailValue>
                </CohortDetail>
                <CohortDetail>
                  <DetailLabel>Availability:</DetailLabel>
                  <DetailValue>{cohort.spots}</DetailValue>
                </CohortDetail>
              </CohortDetails>
              <CohortDescription>{cohort.description}</CohortDescription>
            </CohortContent>
            <CohortCTA>
              {cohort.status === 'Open for Applications' ? (
                <CTAButton to="/apply">Apply Now</CTAButton>
              ) : (
                <SecondaryButton to="/notify-me">Get Notified</SecondaryButton>
              )}
            </CohortCTA>
          </CohortCard>
        ))}
      </CohortsSection>
      
      <CTASection>
        <CTATitle>Lead the AI School</CTATitle>
        <CTADescription>
          Are you an AI expert passionate about education? Apply to lead the next AI School cohort. 
          As a school leader, you'll earn income while building your own AI product with the support 
          of motivated students.
        </CTADescription>
        <CTAButton to="/apply-to-lead">Apply to Lead</CTAButton>
      </CTASection>
    </PageContainer>
  );
};

export default AISchoolPage;
