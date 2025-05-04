import React from 'react';
import styled from 'styled-components';
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

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto var(--spacing-xxl);
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: var(--border);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    
    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled.div`
  padding: var(--spacing-lg) 0;
  position: relative;
  width: 50%;
  left: ${props => props.position === 'left' ? '0' : '50%'};
  
  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    padding-left: 70px;
  }
`;

const TimelineContent = styled(motion.div)`
  padding: var(--spacing-lg);
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  position: relative;
  margin: 0 var(--spacing-xl);
  
  @media (max-width: 768px) {
    margin: 0;
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: var(--primary);
    border: 4px solid var(--surface);
    border-radius: 50%;
    top: 50%;
    ${props => props.position === 'left' ? 'right: -17px;' : 'left: -17px;'}
    transform: translateY(-50%);
    z-index: 1;
    
    @media (max-width: 768px) {
      left: -50px;
      right: auto;
    }
  }
`;

const TimelineDate = styled.div`
  color: var(--primary);
  font-weight: 600;
  margin-bottom: var(--spacing-sm);
`;

const TimelineTitle = styled.h3`
  margin-bottom: var(--spacing-sm);
`;

const TimelineDescription = styled.p`
  color: var(--text-secondary);
`;

const MilestoneList = styled.ul`
  margin-top: var(--spacing-md);
  padding-left: var(--spacing-lg);
`;

const MilestoneItem = styled.li`
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: var(--spacing-lg);
  font-size: 2rem;
`;

const PrinciplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
`;

const PrincipleCard = styled(motion.div)`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const PrincipleIcon = styled.div`
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  color: var(--primary);
`;

const PrincipleTitle = styled.h3`
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
`;

const PrincipleDescription = styled.p`
  color: var(--text-secondary);
`;

const CTASection = styled.section`
  text-align: center;
  padding: var(--spacing-xxl) var(--spacing-lg);
  background: linear-gradient(135deg, var(--secondary) 0%, var(--primary) 100%);
  color: white;
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-lg);
`;

const CTATitle = styled.h2`
  margin-bottom: var(--spacing-lg);
  font-size: 2.5rem;
`;

const CTADescription = styled.p`
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
  font-size: 1.2rem;
  opacity: 0.9;
`;

const CTAButton = styled.a`
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: white;
  color: var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all var(--transition-fast);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const RoadmapPage = () => {
  const roadmapItems = [
    {
      date: "Q2 2025",
      title: "Platform Launch",
      description: "Initial launch of the Alphabet Schools Studio platform with core functionality and first set of tools.",
      position: "left",
      milestones: [
        "Launch of the core platform infrastructure",
        "Release of the first three student-built tools",
        "Introduction of the shared asset protocol",
        "Opening of AI School and Code School cohorts"
      ]
    },
    {
      date: "Q3 2025",
      title: "Asset Protocol v1.0",
      description: "Stable release of the Asset Protocol with comprehensive documentation and validation tools.",
      position: "right",
      milestones: [
        "Finalization of asset type specifications",
        "Release of protocol validation tools",
        "Implementation of asset versioning system",
        "Launch of asset browsing and discovery features"
      ]
    },
    {
      date: "Q4 2025",
      title: "Community Marketplace",
      description: "Launch of the marketplace for sharing and trading assets created with platform tools.",
      position: "left",
      milestones: [
        "Asset marketplace with search and filtering",
        "Creator profiles and portfolios",
        "Rating and review system",
        "Basic NFT integration for asset ownership"
      ]
    },
    {
      date: "Q1 2026",
      title: "Advanced Tool Framework",
      description: "Enhanced framework for tool development with more integration options and capabilities.",
      position: "right",
      milestones: [
        "Tool development SDK with improved documentation",
        "Plugin system for extending existing tools",
        "Real-time collaboration features",
        "Advanced asset transformation capabilities"
      ]
    },
    {
      date: "Q2 2026",
      title: "Mobile Support",
      description: "Expanded platform support for mobile devices, allowing asset viewing and basic editing on the go.",
      position: "left",
      milestones: [
        "Mobile-responsive tool interfaces",
        "Native mobile apps for iOS and Android",
        "Offline asset access and synchronization",
        "Mobile-specific creative tools"
      ]
    },
    {
      date: "Q3 2026",
      title: "Enterprise Features",
      description: "Advanced features for professional teams and studios, including team collaboration tools.",
      position: "right",
      milestones: [
        "Team workspaces and permission systems",
        "Advanced asset management for large collections",
        "Integration with professional creative workflows",
        "Custom branding and white-label options"
      ]
    }
  ];
  
  const principles = [
    {
      icon: "🔄",
      title: "Seamless Integration",
      description: "All tools and assets work together without manual export/import processes, creating a frictionless creative experience."
    },
    {
      icon: "🎓",
      title: "Learning by Building",
      description: "Students learn development by creating actual tools used by real users, providing practical experience and immediate feedback."
    },
    {
      icon: "👥",
      title: "Community-Driven",
      description: "The platform grows through community contributions, with students becoming mentors and building upon each other's work."
    },
    {
      icon: "🔓",
      title: "Open Source",
      description: "Core platform components are open source, allowing for transparency, community contributions, and educational opportunities."
    },
    {
      icon: "🔒",
      title: "Creator Ownership",
      description: "Creators maintain ownership of their assets, with optional NFT integration for verifiable digital ownership."
    },
    {
      icon: "🌱",
      title: "Sustainable Growth",
      description: "The platform is designed for long-term sustainability, with a focus on building a self-sustaining educational ecosystem."
    }
  ];
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Platform Roadmap</PageTitle>
        <PageDescription>
          Our vision for the future of Alphabet Schools Studio and the key milestones we're working towards.
          This roadmap outlines our planned features and improvements over the coming years.
        </PageDescription>
      </PageHeader>
      
      <Timeline>
        {roadmapItems.map((item, index) => (
          <TimelineItem key={index} position={item.position}>
            <TimelineContent 
              position={item.position}
              initial={{ opacity: 0, x: item.position === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <TimelineDate>{item.date}</TimelineDate>
              <TimelineTitle>{item.title}</TimelineTitle>
              <TimelineDescription>{item.description}</TimelineDescription>
              <MilestoneList>
                {item.milestones.map((milestone, i) => (
                  <MilestoneItem key={i}>{milestone}</MilestoneItem>
                ))}
              </MilestoneList>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
      
      <SectionTitle>Our Guiding Principles</SectionTitle>
      <PrinciplesGrid>
        {principles.map((principle, index) => (
          <PrincipleCard
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
          >
            <PrincipleIcon>{principle.icon}</PrincipleIcon>
            <PrincipleTitle>{principle.title}</PrincipleTitle>
            <PrincipleDescription>{principle.description}</PrincipleDescription>
          </PrincipleCard>
        ))}
      </PrinciplesGrid>
      
      <CTASection>
        <CTATitle>Help Shape Our Future</CTATitle>
        <CTADescription>
          Our roadmap is a living document that evolves with community feedback and changing needs.
          We invite you to contribute your ideas and help shape the future of creative tools.
        </CTADescription>
        <CTAButton href="https://github.com/alphabet-schools/roadmap/issues">
          Submit Feature Ideas
        </CTAButton>
      </CTASection>
    </PageContainer>
  );
};

export default RoadmapPage;
