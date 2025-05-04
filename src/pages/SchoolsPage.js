import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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

const SchoolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
`;

const SchoolCard = styled(Link)`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  text-decoration: none;
  color: var(--text-primary);
  display: flex;
  flex-direction: column;
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const SchoolImage = styled.div`
  height: 160px;
  background-color: ${props => props.color || 'var(--primary)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
`;

const SchoolContent = styled.div`
  padding: var(--spacing-lg);
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const SchoolTitle = styled.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
`;

const SchoolDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  flex: 1;
`;

const SchoolMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--text-secondary);
  font-size: 0.9rem;
  border-top: 1px solid var(--border);
  padding-top: var(--spacing-md);
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
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const AlumniSection = styled.div`
  margin-bottom: var(--spacing-xxl);
`;

const AlumniCard = styled.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AlumniContent = styled.div``;

const AlumniTitle = styled.h2`
  margin-bottom: var(--spacing-md);
  font-size: 2rem;
`;

const AlumniDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
`;

const AlumniPoints = styled.ul`
  padding-left: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`;

const AlumniPoint = styled.li`
  margin-bottom: var(--spacing-sm);
  color: var(--text-primary);
`;

const AlumniImage = styled.div`
  background-color: #f0f0f0;
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  color: var(--primary);
`;

const SectionTitle = styled.h2`
  margin-bottom: var(--spacing-md);
  font-size: 2rem;
`;

const SchoolsPage = () => {
  const schools = [
    {
      id: 'ai',
      name: 'AI School',
      emoji: '🤖',
      color: '#3498db',
      description: 'Learn to integrate AI into creative tools and workflows. Explore machine learning, natural language processing, and computer vision to enhance creative applications.',
      duration: '6 months',
      nextCohort: 'June 2025'
    },
    {
      id: 'business',
      name: 'Business School',
      emoji: '💼',
      color: '#2ecc71',
      description: 'Master the business aspects of digital product development. Learn product management, marketing, and monetization strategies for creative tools.',
      duration: '6 months',
      nextCohort: 'July 2025'
    },
    {
      id: 'code',
      name: 'Code School',
      emoji: '💻',
      color: '#e74c3c',
      description: 'Develop core programming skills for creative applications. Focus on software architecture, performance optimization, and cross-platform development.',
      duration: '12 months',
      nextCohort: 'May 2025'
    },
    {
      id: 'directory',
      name: 'Directory School',
      emoji: '📂',
      color: '#9b59b6',
      description: 'Learn to build comprehensive directory applications using the Google Places API. Create location-based tools that help users discover and navigate places of interest.',
      duration: '6 months',
      nextCohort: 'June 2025',
      featured: true
    },
    {
      id: 'dedication',
      name: 'Dedication School',
      emoji: '⏰',
      color: '#f39c12',
      description: 'Build commitment and project management strategies. Learn techniques for maintaining focus, overcoming obstacles, and seeing projects through to completion.',
      duration: '6 months',
      nextCohort: 'August 2025'
    },
    {
      id: 'earn',
      name: 'Earn School',
      emoji: '💰',
      color: '#9b59b6',
      description: 'Explore revenue models and creator economics. Understand different monetization strategies, pricing models, and sustainable income approaches.',
      duration: '6 months',
      nextCohort: 'September 2025'
    },
    {
      id: 'financial',
      name: 'Financial School',
      emoji: '📊',
      color: '#1abc9c',
      description: 'Master funding, budgeting, and financial planning for creative projects and businesses. Learn investment strategies, cost management, and financial forecasting.',
      duration: '6 months',
      nextCohort: 'October 2025'
    },
    {
      id: 'gratitude',
      name: 'Gratitude School',
      emoji: '🙏',
      color: '#34495e',
      description: 'Learn the art of appreciation and giving back to the community. Explore how gratitude enhances creativity, collaboration, and personal fulfillment.',
      duration: '6 months',
      nextCohort: 'November 2025'
    },
    {
      id: 'hosting',
      name: 'Hosting School',
      emoji: '🌐',
      color: '#16a085',
      description: 'Master deployment, scaling, and maintenance of creative tools. Learn cloud infrastructure, performance optimization, and reliability engineering.',
      duration: '6 months',
      nextCohort: 'December 2025'
    },
    {
      id: 'innovation',
      name: 'Innovation School',
      emoji: '💡',
      color: '#d35400',
      description: 'Explore advanced concepts and future technologies in creative tools. Learn design thinking, rapid prototyping, and emerging technology integration.',
      duration: '6 months',
      nextCohort: 'January 2026'
    },
    {
      id: 'journey',
      name: 'Journey School',
      emoji: '🧭',
      color: '#8e44ad',
      description: 'Navigate personal and professional growth through storytelling and narrative techniques. Map your path and guide others on their creative journeys.',
      duration: '6 months',
      nextCohort: 'February 2026',
      status: 'recruiting-leaders'
    },
    {
      id: 'kindness',
      name: 'Kindness School',
      emoji: '❤️',
      color: '#e74c3c',
      description: 'Build empathetic design practices and community-focused development approaches. Create tools that prioritize user wellbeing and positive social impact.',
      duration: '6 months',
      nextCohort: 'March 2026',
      status: 'recruiting-leaders'
    },
    {
      id: 'listing',
      name: 'Listing School',
      emoji: '📋',
      color: '#27ae60',
      description: 'Specialize in creating listing applications with the Google Places API. Build practical tools that connect users with businesses, services, and locations.',
      duration: '6 months',
      nextCohort: 'April 2026',
      featured: true
    },
    {
      id: 'leadership',
      name: 'Leadership School',
      emoji: '👑',
      color: '#f1c40f',
      description: 'Develop leadership skills for creative teams and communities. Learn to inspire, guide, and grow teams while fostering innovation and collaboration.',
      duration: '6 months',
      nextCohort: 'April 2026',
      status: 'recruiting-leaders'
    },
    {
      id: 'mastery',
      name: 'Mastery School',
      emoji: '🏆',
      color: '#2980b9',
      description: 'Refine your skills to an expert level in your chosen domain. Focus on deliberate practice, feedback loops, and continuous improvement methodologies.',
      duration: '6 months',
      nextCohort: 'May 2026',
      status: 'recruiting-leaders'
    },
    {
      id: 'network',
      name: 'Network School',
      emoji: '🔄',
      color: '#27ae60',
      description: 'Build meaningful professional connections and collaborative relationships. Learn community building, networking strategies, and partnership development.',
      duration: '6 months',
      nextCohort: 'June 2026',
      status: 'recruiting-leaders'
    },
    {
      id: 'opportunity',
      name: 'Opportunity School',
      emoji: '🚪',
      color: '#3498db',
      description: 'Identify and create opportunities in the creative tools market. Learn to spot gaps, validate ideas, and transform concepts into viable products.',
      duration: '6 months',
      nextCohort: 'July 2026',
      status: 'recruiting-leaders'
    },
    {
      id: 'purpose',
      name: 'Purpose School',
      emoji: '🧿',
      color: '#8e44ad',
      description: 'Align your work with your deeper values and mission. Develop tools with intention and create meaningful impact through your creative projects.',
      duration: '6 months',
      nextCohort: 'August 2026',
      status: 'recruiting-leaders'
    },
    {
      id: 'quietude',
      name: 'Quietude School',
      emoji: '🧘',
      color: '#95a5a6',
      description: 'Cultivate focus, mindfulness, and deep work practices. Learn to create in states of flow and maintain creative energy through mindful practices.',
      duration: '6 months',
      nextCohort: 'September 2026',
      status: 'recruiting-leaders'
    },
    {
      id: 'resilience',
      name: 'Resilience School',
      emoji: '🛡️',
      color: '#e67e22',
      description: 'Build mental toughness and adaptability for creative challenges. Develop strategies for overcoming setbacks and thriving through uncertainty.',
      duration: '6 months',
      nextCohort: 'October 2026',
      status: 'recruiting-leaders'
    }
  ];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Our Schools</PageTitle>
        <PageDescription>
          Progress through our alphabet of schools, each focusing on different aspects of creation and development. 
          Students learn by building actual tools used by the community.
        </PageDescription>
      </PageHeader>
      
      <CTASection>
        <CTATitle>Lead a School, Build Your Product</CTATitle>
        <CTADescription>
          We're recruiting leaders for upcoming schools! As a school leader, you'll earn income while building your own product.
          Alumni can direct payments to you as you guide the next generation of creators.
        </CTADescription>
        <CTAButton to="/apply-to-lead">Apply to Lead a School</CTAButton>
      </CTASection>
      
      <SectionTitle>Featured Schools</SectionTitle>
      <SchoolsGrid>
        {schools.filter(school => school.featured).map((school) => (
          <SchoolCard to={`/schools/${school.id}`} key={school.id}>
            <SchoolImage color={school.color}>
              {school.emoji}
            </SchoolImage>
            <SchoolContent>
              <SchoolTitle>{school.name}</SchoolTitle>
              <SchoolDescription>{school.description}</SchoolDescription>
              <SchoolMeta>
                <span>Duration: {school.duration}</span>
                <span>
                  {school.status === 'recruiting-leaders' 
                    ? '👑 Seeking Leaders' 
                    : `Next: ${school.nextCohort}`}
                </span>
              </SchoolMeta>
            </SchoolContent>
          </SchoolCard>
        ))}
      </SchoolsGrid>
      
      <SectionTitle>All Schools</SectionTitle>
      <SchoolsGrid>
        {schools.map((school) => (
          <SchoolCard to={`/schools/${school.id}`} key={school.id}>
            <SchoolImage color={school.color}>
              {school.emoji}
            </SchoolImage>
            <SchoolContent>
              <SchoolTitle>{school.name}</SchoolTitle>
              <SchoolDescription>{school.description}</SchoolDescription>
              <SchoolMeta>
                <span>Duration: {school.duration}</span>
                <span>
                  {school.status === 'recruiting-leaders' 
                    ? '👑 Seeking Leaders' 
                    : `Next: ${school.nextCohort}`}
                </span>
              </SchoolMeta>
            </SchoolContent>
          </SchoolCard>
        ))}
      </SchoolsGrid>
      
      <AlumniSection>
        <AlumniCard>
          <AlumniContent>
            <AlumniTitle>Alumni Payment System</AlumniTitle>
            <AlumniDescription>
              Our unique alumni payment system ensures that those who contribute to the education of others are fairly compensated for their expertise and time.
            </AlumniDescription>
            <AlumniPoints>
              <AlumniPoint>Alumni receive direct payments from students they mentor</AlumniPoint>
              <AlumniPoint>School leaders earn income while building their products</AlumniPoint>
              <AlumniPoint>Revenue sharing model creates sustainable income streams</AlumniPoint>
              <AlumniPoint>Transparent payment tracking through the platform</AlumniPoint>
              <AlumniPoint>Optional cryptocurrency and NFT integration for global payments</AlumniPoint>
            </AlumniPoints>
            <CTAButton to="/alumni-payments">Learn More</CTAButton>
          </AlumniContent>
          <AlumniImage>💸</AlumniImage>
        </AlumniCard>
      </AlumniSection>
    </PageContainer>
  );
};

export default SchoolsPage;
