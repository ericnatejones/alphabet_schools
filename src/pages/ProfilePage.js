import React, { useState } from 'react';
import styled from 'styled-components';
import { useAuth } from '../contexts/AuthContext';
import { useAssets } from '../contexts/AssetContext';
import { Navigate } from 'react-router-dom';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProfileAvatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: var(--border-radius-circle);
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  box-shadow: var(--shadow-md);
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const ProfileName = styled.h1`
  margin-bottom: var(--spacing-sm);
`;

const ProfileEmail = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
`;

const ProfileRole = styled.div`
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-md);
  background-color: var(--primary);
  color: white;
  border-radius: var(--border-radius-md);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-md);
`;

const ProfileActions = styled.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ProfileButton = styled.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: ${props => props.primary ? 'var(--primary)' : 'transparent'};
  color: ${props => props.primary ? 'white' : 'var(--text-primary)'};
  border: 1px solid ${props => props.primary ? 'var(--primary)' : 'var(--border)'};
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: ${props => props.primary ? 'var(--secondary)' : 'rgba(0, 0, 0, 0.05)'};
  }
`;

const TabsContainer = styled.div`
  margin-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--border);
`;

const TabsList = styled.div`
  display: flex;
  gap: var(--spacing-md);
  overflow-x: auto;
  padding-bottom: var(--spacing-sm);
  
  @media (max-width: 768px) {
    gap: var(--spacing-sm);
  }
`;

const Tab = styled.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background: none;
  border: none;
  color: ${props => props.active ? 'var(--primary)' : 'var(--text-secondary)'};
  font-weight: ${props => props.active ? '600' : '400'};
  border-bottom: 2px solid ${props => props.active ? 'var(--primary)' : 'transparent'};
  cursor: pointer;
  transition: all var(--transition-fast);
  white-space: nowrap;
  
  &:hover {
    color: var(--primary);
  }
`;

const TabContent = styled.div`
  margin-bottom: var(--spacing-xxl);
`;

const SectionTitle = styled.h2`
  margin-bottom: var(--spacing-lg);
  font-size: 1.5rem;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--spacing-xl) 0;
  color: var(--text-secondary);
`;

const AssetsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-lg);
`;

const AssetCard = styled.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`;

const AssetImage = styled.div`
  height: 150px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const AssetType = styled.div`
  position: absolute;
  top: var(--spacing-sm);
  left: var(--spacing-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  text-transform: capitalize;
`;

const NFTBadge = styled.div`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(155, 89, 182, 0.9);
  color: white;
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const AssetContent = styled.div`
  padding: var(--spacing-md);
`;

const AssetName = styled.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.1rem;
`;

const AssetDate = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
`;

const ProjectCard = styled.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`;

const ProjectHeader = styled.div`
  padding: var(--spacing-md);
  border-bottom: 1px solid var(--border);
`;

const ProjectTitle = styled.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.2rem;
`;

const ProjectStatus = styled.div`
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: ${props => {
    switch(props.status) {
      case 'completed': return 'rgba(46, 204, 113, 0.2)';
      case 'in-progress': return 'rgba(52, 152, 219, 0.2)';
      case 'planned': return 'rgba(155, 89, 182, 0.2)';
      default: return 'rgba(0, 0, 0, 0.1)';
    }
  }};
  color: ${props => {
    switch(props.status) {
      case 'completed': return '#27ae60';
      case 'in-progress': return '#2980b9';
      case 'planned': return '#8e44ad';
      default: return 'var(--text-secondary)';
    }
  }};
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
`;

const ProjectContent = styled.div`
  padding: var(--spacing-md);
`;

const ProjectDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  font-size: 0.9rem;
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);
`;

const CourseCard = styled.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`;

const CourseImage = styled.div`
  height: 120px;
  background-color: ${props => props.color || 'var(--primary)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;

const CourseContent = styled.div`
  padding: var(--spacing-md);
`;

const CourseTitle = styled.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.2rem;
`;

const CourseCompletion = styled.div`
  margin-bottom: var(--spacing-md);
`;

const ProgressBar = styled.div`
  height: 8px;
  background-color: var(--border);
  border-radius: var(--border-radius-sm);
  margin-bottom: var(--spacing-xs);
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  width: ${props => props.progress}%;
  background-color: var(--primary);
  border-radius: var(--border-radius-sm);
`;

const ProgressText = styled.div`
  font-size: 0.8rem;
  color: var(--text-secondary);
  display: flex;
  justify-content: space-between;
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  color: var(--text-secondary);
  border-top: 1px solid var(--border);
  padding-top: var(--spacing-sm);
  margin-top: var(--spacing-sm);
`;

const SettingsForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-lg);
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: var(--spacing-sm);
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-md);
  background-color: var(--surface);
  color: var(--text-primary);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-md);
  background-color: var(--surface);
  color: var(--text-primary);
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: var(--spacing-md);
`;

const ProfilePage = () => {
  const { currentUser, logout, updateProfile } = useAuth();
  const { assets } = useAssets();
  const [activeTab, setActiveTab] = useState('assets');
  const [formData, setFormData] = useState({
    name: currentUser?.name || '',
    email: currentUser?.email || '',
    bio: currentUser?.bio || ''
  });
  
  // Redirect to login if not authenticated
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  // Filter assets created by the current user
  const userAssets = assets.filter(asset => asset.creator === currentUser.id);
  
  // Mock projects data
  const projects = [
    {
      id: 'p1',
      title: 'Character Creator Tool',
      status: 'in-progress',
      description: 'A tool for creating and customizing RPG characters with various attributes and appearances.',
      school: 'Code School',
      lastUpdated: '2 days ago'
    },
    {
      id: 'p2',
      title: 'Asset Protocol Documentation',
      status: 'completed',
      description: 'Comprehensive documentation for the asset protocol, including examples and best practices.',
      school: 'Documentation Team',
      lastUpdated: '1 week ago'
    },
    {
      id: 'p3',
      title: 'Town Simulator Extension',
      status: 'planned',
      description: 'An extension for the Town Simulator tool adding economic simulation features.',
      school: 'Business School',
      lastUpdated: 'Not started'
    }
  ];
  
  // Mock courses data
  const courses = [
    {
      id: 'c1',
      title: 'AI School',
      emoji: '🤖',
      color: '#3498db',
      progress: 100,
      completed: true,
      cohort: 'January 2025',
      certificate: true
    },
    {
      id: 'c2',
      title: 'Code School',
      emoji: '💻',
      color: '#e74c3c',
      progress: 75,
      completed: false,
      cohort: 'March 2025',
      certificate: false
    },
    {
      id: 'c3',
      title: 'Business School',
      emoji: '💼',
      color: '#2ecc71',
      progress: 0,
      completed: false,
      cohort: 'Upcoming - July 2025',
      certificate: false
    }
  ];
  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
    alert('Profile updated successfully!');
  };
  
  return (
    <PageContainer>
      <ProfileHeader>
        <ProfileAvatar src={currentUser.avatar} />
        <ProfileInfo>
          <ProfileName>{currentUser.name}</ProfileName>
          <ProfileEmail>{currentUser.email}</ProfileEmail>
          <ProfileRole>{currentUser.role === 'student' ? `${currentUser.school} Student` : 'Creator'}</ProfileRole>
          <ProfileActions>
            <ProfileButton primary>Edit Profile</ProfileButton>
            <ProfileButton onClick={logout}>Log Out</ProfileButton>
          </ProfileActions>
        </ProfileInfo>
      </ProfileHeader>
      
      <TabsContainer>
        <TabsList>
          <Tab 
            active={activeTab === 'assets'} 
            onClick={() => setActiveTab('assets')}
          >
            My Assets
          </Tab>
          <Tab 
            active={activeTab === 'projects'} 
            onClick={() => setActiveTab('projects')}
          >
            Projects
          </Tab>
          <Tab 
            active={activeTab === 'courses'} 
            onClick={() => setActiveTab('courses')}
          >
            Courses
          </Tab>
          <Tab 
            active={activeTab === 'settings'} 
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </Tab>
        </TabsList>
      </TabsContainer>
      
      <TabContent>
        {activeTab === 'assets' && (
          <>
            <SectionTitle>My Assets</SectionTitle>
            {userAssets.length > 0 ? (
              <AssetsGrid>
                {userAssets.map(asset => (
                  <AssetCard key={asset.id}>
                    <AssetImage src={asset.imgUrl}>
                      <AssetType>{asset.type}</AssetType>
                      {asset.ownedByNFT && (
                        <NFTBadge>
                          <span>NFT</span>
                          <span>🔒</span>
                        </NFTBadge>
                      )}
                    </AssetImage>
                    <AssetContent>
                      <AssetName>{asset.name}</AssetName>
                      <AssetDate>Created: {new Date(asset.createdAt).toLocaleDateString()}</AssetDate>
                    </AssetContent>
                  </AssetCard>
                ))}
              </AssetsGrid>
            ) : (
              <EmptyState>
                <h3>No assets yet</h3>
                <p>Start creating assets with our tools to see them here</p>
              </EmptyState>
            )}
          </>
        )}
        
        {activeTab === 'projects' && (
          <>
            <SectionTitle>My Projects</SectionTitle>
            <ProjectsGrid>
              {projects.map(project => (
                <ProjectCard key={project.id}>
                  <ProjectHeader>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectStatus status={project.status}>
                      {project.status === 'completed' ? 'Completed' : 
                       project.status === 'in-progress' ? 'In Progress' : 'Planned'}
                    </ProjectStatus>
                  </ProjectHeader>
                  <ProjectContent>
                    <ProjectDescription>{project.description}</ProjectDescription>
                    <ProjectMeta>
                      <span>School: {project.school}</span>
                      <span>Updated: {project.lastUpdated}</span>
                    </ProjectMeta>
                  </ProjectContent>
                </ProjectCard>
              ))}
            </ProjectsGrid>
          </>
        )}
        
        {activeTab === 'courses' && (
          <>
            <SectionTitle>My Courses</SectionTitle>
            <CoursesGrid>
              {courses.map(course => (
                <CourseCard key={course.id}>
                  <CourseImage color={course.color}>
                    {course.emoji}
                  </CourseImage>
                  <CourseContent>
                    <CourseTitle>{course.title}</CourseTitle>
                    <CourseCompletion>
                      <ProgressBar>
                        <ProgressFill progress={course.progress} />
                      </ProgressBar>
                      <ProgressText>
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </ProgressText>
                    </CourseCompletion>
                    <CourseMeta>
                      <span>Cohort: {course.cohort}</span>
                      <span>{course.certificate ? '🏆 Certified' : ''}</span>
                    </CourseMeta>
                  </CourseContent>
                </CourseCard>
              ))}
            </CoursesGrid>
          </>
        )}
        
        {activeTab === 'settings' && (
          <>
            <SectionTitle>Profile Settings</SectionTitle>
            <SettingsForm onSubmit={handleFormSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleFormChange}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="bio">Bio</FormLabel>
                <FormTextarea 
                  id="bio" 
                  name="bio" 
                  value={formData.bio}
                  onChange={handleFormChange}
                />
              </FormGroup>
              
              <FormActions>
                <ProfileButton type="button">Cancel</ProfileButton>
                <ProfileButton type="submit" primary>Save Changes</ProfileButton>
              </FormActions>
            </SettingsForm>
          </>
        )}
      </TabContent>
    </PageContainer>
  );
};

export default ProfilePage;
