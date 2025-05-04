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

const ContributeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
`;

const ContributeCard = styled(motion.div)`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const CardHeader = styled.div`
  background: linear-gradient(135deg, var(--primary) 0%, #9b59b6 100%);
  color: white;
  padding: var(--spacing-lg);
  position: relative;
`;

const CardIcon = styled.div`
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
`;

const CardTitle = styled.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
`;

const CardSubtitle = styled.p`
  opacity: 0.8;
`;

const CardContent = styled.div`
  padding: var(--spacing-lg);
  flex: 1;
`;

const CardDescription = styled.p`
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
`;

const CardList = styled.ul`
  margin-bottom: var(--spacing-md);
  padding-left: var(--spacing-lg);
`;

const CardListItem = styled.li`
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
`;

const CardFooter = styled.div`
  padding: 0 var(--spacing-lg) var(--spacing-lg);
  margin-top: auto;
`;

const CardButton = styled(Link)`
  display: inline-block;
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--primary);
  color: white;
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--secondary);
  }
`;

const RoadmapSection = styled.section`
  margin-bottom: var(--spacing-xxl);
`;

const SectionTitle = styled.h2`
  margin-bottom: var(--spacing-lg);
  text-align: center;
  font-size: 2rem;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
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

const TimelineContent = styled.div`
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

const FAQSection = styled.section`
  margin-bottom: var(--spacing-xxl);
`;

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: var(--spacing-md);
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  overflow: hidden;
`;

const FAQQuestion = styled.button`
  width: 100%;
  text-align: left;
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: var(--surface);
  border: none;
  border-bottom: ${props => props.isOpen ? '1px solid var(--border)' : 'none'};
  font-weight: 600;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  color: var(--text-primary);
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
  
  &:after {
    content: '${props => props.isOpen ? '−' : '+'}';
    font-size: 1.2rem;
    font-weight: 700;
  }
`;

const FAQAnswer = styled.div`
  padding: ${props => props.isOpen ? 'var(--spacing-lg)' : '0 var(--spacing-lg)'};
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all var(--transition-normal);
  color: var(--text-secondary);
`;

const CTASection = styled.section`
  text-align: center;
  padding: var(--spacing-xxl) 0;
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
  max-width: 600px;
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
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ContributePage = () => {
  const [openFAQ, setOpenFAQ] = React.useState(null);
  
  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };
  
  const contributeOptions = [
    {
      icon: "🧑‍💻",
      title: "Tool Development",
      subtitle: "Build creative tools for the ecosystem",
      description: "Create new tools that integrate with our asset protocol, allowing users to create and modify assets in innovative ways.",
      items: [
        "Character creators",
        "Map makers",
        "Town simulators",
        "RPG engines",
        "Asset editors"
      ],
      link: "/docs/tool-development",
      linkText: "Development Guide"
    },
    {
      icon: "🎨",
      title: "Asset Creation",
      subtitle: "Create assets for the community",
      description: "Design and share assets that can be used across the platform's tools, from character sprites to environment textures.",
      items: [
        "Character designs",
        "Environment assets",
        "UI elements",
        "Sound effects",
        "Animations"
      ],
      link: "/assets/contribute",
      linkText: "Asset Guidelines"
    },
    {
      icon: "📝",
      title: "Documentation",
      subtitle: "Help document the platform",
      description: "Contribute to our documentation, tutorials, and guides to help others understand and use the platform effectively.",
      items: [
        "API documentation",
        "Tutorials",
        "User guides",
        "Code examples",
        "Best practices"
      ],
      link: "/docs/contributing",
      linkText: "Documentation Guide"
    },
    {
      icon: "🔍",
      title: "Quality Assurance",
      subtitle: "Test and improve the platform",
      description: "Help identify and fix bugs, improve performance, and ensure the platform works smoothly across different devices and browsers.",
      items: [
        "Bug reporting",
        "Feature testing",
        "Performance optimization",
        "Accessibility testing",
        "Cross-browser compatibility"
      ],
      link: "/qa/contribute",
      linkText: "QA Guidelines"
    },
    {
      icon: "🌍",
      title: "Community Building",
      subtitle: "Grow and nurture our community",
      description: "Help build a vibrant and supportive community through events, forums, social media, and other community initiatives.",
      items: [
        "Organizing events",
        "Moderating forums",
        "Creating tutorials",
        "Mentoring newcomers",
        "Social media management"
      ],
      link: "/community/contribute",
      linkText: "Community Guidelines"
    },
    {
      icon: "📚",
      title: "School Curriculum",
      subtitle: "Help develop our educational content",
      description: "Contribute to the curriculum of our various schools, creating lessons, exercises, and projects that help students learn effectively.",
      items: [
        "Lesson plans",
        "Coding exercises",
        "Project ideas",
        "Assessment methods",
        "Learning resources"
      ],
      link: "/schools/contribute",
      linkText: "Curriculum Guidelines"
    }
  ];
  
  const roadmapItems = [
    {
      date: "Q2 2025",
      title: "Platform Launch",
      description: "Initial launch of the Alphabet Schools Studio platform with core functionality and first set of tools.",
      position: "left"
    },
    {
      date: "Q3 2025",
      title: "Asset Protocol v1.0",
      description: "Stable release of the Asset Protocol with comprehensive documentation and validation tools.",
      position: "right"
    },
    {
      date: "Q4 2025",
      title: "Community Marketplace",
      description: "Launch of the marketplace for sharing and trading assets created with platform tools.",
      position: "left"
    },
    {
      date: "Q1 2026",
      title: "Advanced Tool Framework",
      description: "Enhanced framework for tool development with more integration options and capabilities.",
      position: "right"
    },
    {
      date: "Q2 2026",
      title: "Mobile Support",
      description: "Expanded platform support for mobile devices, allowing asset viewing and basic editing on the go.",
      position: "left"
    },
    {
      date: "Q3 2026",
      title: "Enterprise Features",
      description: "Advanced features for professional teams and studios, including team collaboration tools.",
      position: "right"
    }
  ];
  
  const faqItems = [
    {
      question: "How do I get started contributing to Alphabet Schools Studio?",
      answer: "The best way to get started is to explore the platform, understand the asset protocol, and identify an area where you'd like to contribute. Then, check out our contribution guides for specific instructions on how to contribute in your chosen area. If you're a developer, you might want to start by building a simple tool that integrates with our asset protocol."
    },
    {
      question: "Do I need to be a student to contribute?",
      answer: "No, anyone can contribute to the platform! While our educational programs are structured around schools and cohorts, the platform itself is open to contributions from developers, artists, writers, and enthusiasts of all backgrounds."
    },
    {
      question: "How does the review process work for contributions?",
      answer: "All contributions go through a peer review process. For code contributions, this involves code review by maintainers. For assets, documentation, and other contributions, the review process varies depending on the type of contribution. The goal is to ensure quality, consistency, and alignment with the platform's goals and standards."
    },
    {
      question: "Can I contribute if I'm not a programmer?",
      answer: "Absolutely! We need contributions in many areas beyond programming, including asset creation, documentation, quality assurance, community building, and curriculum development. Everyone has valuable skills to offer!"
    },
    {
      question: "How do I get recognition for my contributions?",
      answer: "All contributors are recognized in our CONTRIBUTORS.md file and on our website. Significant contributions may be highlighted in release notes, community showcases, and social media. We also have a badge system that recognizes different types and levels of contributions."
    },
    {
      question: "Is there a code of conduct for contributors?",
      answer: "Yes, we have a Code of Conduct that all contributors are expected to follow. It ensures that our community is respectful, inclusive, and welcoming to everyone. You can find it in our CONTRIBUTING.md file and on our website."
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
        <PageTitle>Contribute to Alphabet Schools Studio</PageTitle>
        <PageDescription>
          Join our community of creators, developers, and educators to build the future of creative tools and education.
        </PageDescription>
      </PageHeader>
      
      <ContributeGrid>
        {contributeOptions.map((option, index) => (
          <ContributeCard
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
          >
            <CardHeader>
              <CardIcon>{option.icon}</CardIcon>
              <CardTitle>{option.title}</CardTitle>
              <CardSubtitle>{option.subtitle}</CardSubtitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{option.description}</CardDescription>
              <CardList>
                {option.items.map((item, i) => (
                  <CardListItem key={i}>{item}</CardListItem>
                ))}
              </CardList>
            </CardContent>
            <CardFooter>
              <CardButton to={option.link}>{option.linkText}</CardButton>
            </CardFooter>
          </ContributeCard>
        ))}
      </ContributeGrid>
      
      <RoadmapSection>
        <SectionTitle>Project Roadmap</SectionTitle>
        <Timeline>
          {roadmapItems.map((item, index) => (
            <TimelineItem key={index} position={item.position}>
              <TimelineContent position={item.position}>
                <TimelineDate>{item.date}</TimelineDate>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </RoadmapSection>
      
      <CTASection>
        <CTATitle>Ready to Make an Impact?</CTATitle>
        <CTADescription>
          Your contributions help shape the future of creative tools and education for the next generation of creators.
        </CTADescription>
        <CTAButton to="/signup">Join Our Community</CTAButton>
      </CTASection>
      
      <FAQSection>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <FAQList>
          {faqItems.map((item, index) => (
            <FAQItem key={index}>
              <FAQQuestion 
                isOpen={openFAQ === index}
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
              </FAQQuestion>
              <FAQAnswer isOpen={openFAQ === index}>
                {item.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQSection>
    </PageContainer>
  );
};

export default ContributePage;
