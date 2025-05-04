import React from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

// Import specific school pages
import AISchoolPage from './schools/AISchoolPage';
import DirectorySchoolPage from './schools/DirectorySchoolPage';
import ListingSchoolPage from './schools/ListingSchoolPage';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`;

const SchoolHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const SchoolIcon = styled.div`
  width: 120px;
  height: 120px;
  border-radius: var(--border-radius-lg);
  background-color: ${props => props.color || 'var(--primary)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
`;

const SchoolInfo = styled.div`
  flex: 1;
`;

const SchoolTitle = styled.h1`
  margin-bottom: var(--spacing-sm);
`;

const SchoolMeta = styled.div`
  display: flex;
  gap: var(--spacing-md);
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SchoolMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
`;

const SchoolActions = styled.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SchoolButton = styled(Link)`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: ${props => props.primary ? 'var(--primary)' : 'transparent'};
  color: ${props => props.primary ? 'white' : 'var(--text-primary)'};
  border: 1px solid ${props => props.primary ? 'var(--primary)' : 'var(--border)'};
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: ${props => props.primary ? 'var(--secondary)' : 'rgba(0, 0, 0, 0.05)'};
  }
`;

const SchoolContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-xl);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div``;

const SectionTitle = styled.h2`
  margin-bottom: var(--spacing-md);
  font-size: 1.8rem;
`;

const Description = styled.div`
  margin-bottom: var(--spacing-xl);
  line-height: 1.6;
`;

const Paragraph = styled.p`
  margin-bottom: var(--spacing-md);
`;

const CurriculumSection = styled.div`
  margin-bottom: var(--spacing-xl);
`;

const ModuleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const ModuleCard = styled.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-sm);
`;

const ModuleHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
`;

const ModuleTitle = styled.h3`
  font-size: 1.2rem;
`;

const ModuleDuration = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const ModuleDescription = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-sm);
`;

const TopicsList = styled.ul`
  padding-left: var(--spacing-lg);
`;

const TopicItem = styled.li`
  margin-bottom: var(--spacing-xs);
  font-size: 0.9rem;
`;

const Sidebar = styled.div``;

const SidebarCard = styled.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
  margin-bottom: var(--spacing-lg);
`;

const SidebarCardTitle = styled.h3`
  margin-bottom: var(--spacing-md);
  font-size: 1.2rem;
`;

const CohortList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const CohortItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--border);
  
  &:last-child {
    border-bottom: none;
  }
`;

const CohortDate = styled.div`
  font-weight: 500;
`;

const CohortStatus = styled.div`
  font-size: 0.9rem;
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  background-color: ${props => {
    switch(props.status) {
      case 'open': return 'rgba(46, 204, 113, 0.2)';
      case 'full': return 'rgba(231, 76, 60, 0.2)';
      case 'upcoming': return 'rgba(52, 152, 219, 0.2)';
      default: return 'rgba(0, 0, 0, 0.1)';
    }
  }};
  color: ${props => {
    switch(props.status) {
      case 'open': return '#27ae60';
      case 'full': return '#c0392b';
      case 'upcoming': return '#2980b9';
      default: return 'var(--text-secondary)';
    }
  }};
`;

const InstructorsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const InstructorCard = styled.div`
  display: flex;
  gap: var(--spacing-md);
`;

const InstructorAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: var(--border-radius-circle);
  background-color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 1.2rem;
`;

const InstructorInfo = styled.div`
  flex: 1;
`;

const InstructorName = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
`;

const InstructorBio = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const SchoolDetailPage = () => {
  const { schoolId } = useParams();
  
  // Map school IDs to their respective components
  const schoolComponents = {
    'ai': AISchoolPage,
    'directory': DirectorySchoolPage,
    'listing': ListingSchoolPage
  };
  
  // Render the specific school component if it exists
  if (schoolComponents[schoolId]) {
    const SchoolComponent = schoolComponents[schoolId];
    return <SchoolComponent />;
  }
  
  // For schools without a dedicated page, use the generic template
  const schoolData = {
    id: schoolId,
    name: schoolId.charAt(0).toUpperCase() + schoolId.slice(1) + ' School',
    emoji: getSchoolEmoji(schoolId),
    color: getSchoolColor(schoolId),
    description: 'This school focuses on teaching students the skills needed to build and contribute to the Alphabet Schools ecosystem.',
    duration: '6 months',
    nextCohort: 'Coming Soon',
    instructors: [
      {
        name: 'Lead Instructor',
        role: 'Curriculum Designer',
        avatar: '👨‍🏫'
      },
      {
        name: 'Assistant Instructor',
        role: 'Technical Mentor',
        avatar: '👩‍🏫'
      }
    ],
    modules: [
      {
        title: 'Introduction',
        duration: '2 weeks',
        description: 'Learn the fundamentals and get familiar with the tools and concepts.',
        topics: ['Overview', 'Setup', 'Basic concepts']
      },
      {
        title: 'Core Skills',
        duration: '8 weeks',
        description: 'Develop the core skills needed for this discipline.',
        topics: ['Fundamental techniques', 'Best practices', 'Practical exercises']
      },
      {
        title: 'Advanced Topics',
        duration: '8 weeks',
        description: 'Explore advanced concepts and specialized areas.',
        topics: ['Advanced techniques', 'Specialized tools', 'Case studies']
      },
      {
        title: 'Final Project',
        duration: '6 weeks',
        description: 'Apply your skills to build a comprehensive project.',
        topics: ['Project planning', 'Implementation', 'Presentation']
      }
    ],
    cohorts: [
      {
        name: 'Upcoming Cohort',
        startDate: 'TBD',
        format: 'Online',
        status: 'Coming Soon'
      }
    ]
  };

  return (
    <PageContainer>
      <SchoolHeader>
        <SchoolIcon color={schoolData.color}>{schoolData.emoji}</SchoolIcon>
        <SchoolInfo>
          <SchoolTitle>{schoolData.name}</SchoolTitle>
          <SchoolMeta>
            <SchoolMetaItem>
              <span>⏱️</span>
              <span>{schoolData.duration}</span>
            </SchoolMetaItem>
            <SchoolMetaItem>
              <span>📅</span>
              <span>Next cohort: {schoolData.nextCohort}</span>
            </SchoolMetaItem>
          </SchoolMeta>
          <SchoolActions>
            <SchoolButton to="/apply" primary>Apply Now</SchoolButton>
            <SchoolButton to="/apply-to-lead">Lead This School</SchoolButton>
          </SchoolActions>
        </SchoolInfo>
      </SchoolHeader>
      
      <SchoolContent>
        <MainContent>
          <Description>
            <Paragraph>{schoolData.description}</Paragraph>
            <Paragraph>
              Students in this school will learn by building real tools that are used by the community.
              The curriculum is project-based and focuses on practical skills that can be immediately applied.
            </Paragraph>
          </Description>
          
          <CurriculumSection>
            <SectionTitle>Curriculum</SectionTitle>
            <ModuleList>
              {schoolData.modules.map((module, index) => (
                <ModuleCard key={index}>
                  <ModuleHeader>
                    <ModuleTitle>{module.title}</ModuleTitle>
                    <ModuleDuration>{module.duration}</ModuleDuration>
                  </ModuleHeader>
                  <ModuleDescription>{module.description}</ModuleDescription>
                  <TopicsList>
                    {module.topics.map((topic, i) => (
                      <TopicItem key={i}>{topic}</TopicItem>
                    ))}
                  </TopicsList>
                </ModuleCard>
              ))}
            </ModuleList>
          </CurriculumSection>
        </MainContent>
        
        <Sidebar>
          <SidebarCard>
            <SidebarCardTitle>Upcoming Cohorts</SidebarCardTitle>
            {schoolData.cohorts.map((cohort, index) => (
              <CohortItem key={index}>
                <CohortDate>{cohort.startDate}</CohortDate>
                <CohortStatus status={cohort.status}>
                  {cohort.status.charAt(0).toUpperCase() + cohort.status.slice(1)}
                </CohortStatus>
              </CohortItem>
            ))}
          </SidebarCard>
          
          <SidebarCard>
            <SidebarCardTitle>Instructors</SidebarCardTitle>
            {schoolData.instructors.map((instructor, index) => (
              <InstructorCard key={index}>
                <InstructorAvatar>{instructor.avatar}</InstructorAvatar>
                <InstructorInfo>
                  <InstructorName>{instructor.name}</InstructorName>
                  <InstructorRole>{instructor.role}</InstructorRole>
                </InstructorInfo>
              </InstructorCard>
            ))}
          </SidebarCard>
          
          <SidebarCard>
            <SidebarCardTitle>Related Schools</SidebarCardTitle>
            <RelatedSchoolsList>
              <RelatedSchoolItem to="/schools/ai">AI School</RelatedSchoolItem>
              <RelatedSchoolItem to="/schools/directory">Directory School</RelatedSchoolItem>
              <RelatedSchoolItem to="/schools/listing">Listing School</RelatedSchoolItem>
            </RelatedSchoolsList>
          </SidebarCard>
        </Sidebar>
      </SchoolContent>
    </PageContainer>
  );
};

// Helper functions for generic school pages
const getSchoolEmoji = (schoolId) => {
  const emojiMap = {
    'business': '💼',
    'code': '💻',
    'dedication': '⏰',
    'earn': '💰',
    'financial': '📊',
    'gratitude': '🙏',
    'hosting': '🌐',
    'innovation': '💡',
    'journey': '🧭',
    'kindness': '❤️',
    'leadership': '👑',
    'mastery': '🏆',
    'network': '🔄',
    'opportunity': '🚪',
    'purpose': '🧿',
    'quietude': '🧘',
    'resilience': '🛡️'
  };
  
  return emojiMap[schoolId] || '🎓';
};

const getSchoolColor = (schoolId) => {
  const colorMap = {
    'business': '#2ecc71',
    'code': '#e74c3c',
    'dedication': '#f39c12',
    'earn': '#9b59b6',
    'financial': '#1abc9c',
    'gratitude': '#34495e',
    'hosting': '#16a085',
    'innovation': '#d35400',
    'journey': '#8e44ad',
    'kindness': '#e74c3c',
    'leadership': '#f1c40f',
    'mastery': '#2980b9',
    'network': '#27ae60',
    'opportunity': '#3498db',
    'purpose': '#8e44ad',
    'quietude': '#95a5a6',
    'resilience': '#e67e22'
  };
  
  return colorMap[schoolId] || '#3498db';
};

export default SchoolDetailPage;
