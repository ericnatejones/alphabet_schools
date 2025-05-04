import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`;

const ToolHeader = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ToolIcon = styled.div`
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

const ToolInfo = styled.div`
  flex: 1;
`;

const ToolTitle = styled.h1`
  margin-bottom: var(--spacing-sm);
`;

const ToolCreator = styled.div`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
`;

const ToolTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ToolTag = styled.span`
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(52, 152, 219, 0.1);
  color: var(--primary);
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
`;

const ToolActions = styled.div`
  display: flex;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ToolButton = styled.button`
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

const ToolContent = styled.div`
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

const ToolPreview = styled.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-xl);
`;

const PreviewHeader = styled.div`
  padding: var(--spacing-md);
  background-color: var(--primary);
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PreviewTitle = styled.h3`
  font-size: 1.2rem;
`;

const PreviewControls = styled.div`
  display: flex;
  gap: var(--spacing-sm);
`;

const PreviewControl = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background-color: ${props => props.color};
  cursor: pointer;
`;

const PreviewContent = styled.div`
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  color: var(--text-secondary);
  font-size: 1.2rem;
`;

const FeaturesSection = styled.div`
  margin-bottom: var(--spacing-xl);
`;

const FeaturesList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: var(--spacing-lg);
`;

const FeatureCard = styled.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  box-shadow: var(--shadow-sm);
`;

const FeatureIcon = styled.div`
  font-size: 2rem;
  margin-bottom: var(--spacing-sm);
  color: var(--primary);
`;

const FeatureTitle = styled.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.2rem;
`;

const FeatureDescription = styled.p`
  color: var(--text-secondary);
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

const AssetTypesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
`;

const AssetTypeItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--border);
  
  &:last-child {
    border-bottom: none;
  }
`;

const AssetTypeName = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
`;

const AssetTypeIcon = styled.span`
  font-size: 1.2rem;
`;

const AssetTypeCapabilities = styled.div`
  font-size: 0.8rem;
  display: flex;
  gap: 5px;
`;

const Capability = styled.span`
  padding: 2px 6px;
  border-radius: var(--border-radius-sm);
  background-color: ${props => props.type === 'create' ? 'rgba(46, 204, 113, 0.2)' : 
                               props.type === 'edit' ? 'rgba(52, 152, 219, 0.2)' : 
                               'rgba(155, 89, 182, 0.2)'};
  color: ${props => props.type === 'create' ? '#27ae60' : 
                    props.type === 'edit' ? '#2980b9' : 
                    '#8e44ad'};
`;

const RelatedToolsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`;

const RelatedToolItem = styled(Link)`
  display: flex;
  gap: var(--spacing-md);
  text-decoration: none;
  color: var(--text-primary);
  
  &:hover {
    h4 {
      color: var(--primary);
    }
  }
`;

const RelatedToolIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: var(--border-radius-md);
  background-color: ${props => props.color || 'var(--primary)'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: white;
`;

const RelatedToolInfo = styled.div`
  flex: 1;
`;

const RelatedToolTitle = styled.h4`
  margin-bottom: 5px;
  transition: color var(--transition-fast);
`;

const RelatedToolDescription = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
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
  
  &:hover {
    color: var(--primary);
  }
`;

const ToolDetailPage = () => {
  const { toolId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock tool data - in a real app, this would come from an API
  const tools = {
    'fantasy-map-maker': {
      name: 'Fantasy Map Maker',
      description: 'Create beautiful fantasy maps for RPGs, novels, and world-building with an intuitive drag-and-drop interface.',
      longDescription: 'Fantasy Map Maker is a powerful tool for creating detailed fantasy maps for your RPGs, novels, and world-building projects. With an intuitive drag-and-drop interface, you can easily create mountains, forests, rivers, cities, and more. The tool includes a variety of pre-made assets and styles, allowing you to create maps in different artistic styles from hand-drawn to realistic. Maps created with this tool can be seamlessly used in other Alphabet Schools Studio tools, such as the Tabletop RPG Engine or Town Simulator.',
      creator: 'AI School Alumni',
      image: null,
      icon: '🗺️',
      color: '#3498db',
      category: 'map-makers',
      tags: ['maps', 'fantasy', 'rpg', 'world-building'],
      features: [
        {
          icon: '🖌️',
          title: 'Intuitive Drawing Tools',
          description: 'Easy-to-use brushes and tools for creating terrain, landmarks, and details.'
        },
        {
          icon: '🏔️',
          title: 'Terrain Generation',
          description: 'Procedural terrain generation with customizable parameters for mountains, forests, and more.'
        },
        {
          icon: '🏙️',
          title: 'Settlement Builder',
          description: 'Create detailed cities, towns, and villages with automatic building placement.'
        },
        {
          icon: '🎨',
          title: 'Multiple Art Styles',
          description: 'Choose from various art styles, from hand-drawn to realistic.'
        },
        {
          icon: '📤',
          title: 'Asset Integration',
          description: 'Maps integrate with other tools in the ecosystem, allowing characters and items to be placed on them.'
        },
        {
          icon: '🔍',
          title: 'Zoom Levels',
          description: 'Create maps with multiple zoom levels, from world maps to detailed city layouts.'
        }
      ],
      assetTypes: [
        {
          name: 'Map',
          icon: '🗺️',
          capabilities: ['create', 'edit', 'view']
        },
        {
          name: 'Location',
          icon: '📍',
          capabilities: ['create', 'edit', 'view']
        },
        {
          name: 'Terrain',
          icon: '🏔️',
          capabilities: ['create', 'edit', 'view']
        },
        {
          name: 'Character',
          icon: '👤',
          capabilities: ['view', 'place']
        },
        {
          name: 'Item',
          icon: '🗡️',
          capabilities: ['view', 'place']
        }
      ],
      relatedTools: [
        {
          id: 'tabletop-rpg-engine',
          name: 'Tabletop RPG Engine',
          description: 'Run RPG campaigns using maps created in Fantasy Map Maker',
          icon: '🎲',
          color: '#2ecc71'
        },
        {
          id: 'dungeon-designer',
          name: 'Dungeon Designer',
          description: 'Create detailed dungeon maps with traps and treasures',
          icon: '🏔️',
          color: '#34495e'
        },
        {
          id: 'medieval-town-simulator',
          name: 'Medieval Town Simulator',
          description: 'Simulate towns that can be placed on your fantasy maps',
          icon: '🏰',
          color: '#f39c12'
        }
      ]
    },
    // Additional tools would be defined here
  };
  
  const tool = tools[toolId] || {
    name: 'Tool Not Found',
    description: 'The requested tool could not be found.',
    longDescription: 'Please check the URL and try again, or browse our available tools.',
    creator: 'Unknown',
    icon: '❓',
    color: '#95a5a6',
    category: 'unknown',
    tags: [],
    features: [],
    assetTypes: [],
    relatedTools: []
  };
  
  return (
    <PageContainer>
      <ToolHeader>
        <ToolIcon color={tool.color}>
          {tool.icon}
        </ToolIcon>
        <ToolInfo>
          <ToolTitle>{tool.name}</ToolTitle>
          <ToolCreator>Created by: {tool.creator}</ToolCreator>
          <ToolTags>
            {tool.tags.map((tag, index) => (
              <ToolTag key={index}>{tag}</ToolTag>
            ))}
          </ToolTags>
          <ToolActions>
            <ToolButton primary>Launch Tool</ToolButton>
            <ToolButton>View Source</ToolButton>
          </ToolActions>
        </ToolInfo>
      </ToolHeader>
      
      <TabsContainer>
        <TabsList>
          <Tab 
            active={activeTab === 'overview'} 
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </Tab>
          <Tab 
            active={activeTab === 'documentation'} 
            onClick={() => setActiveTab('documentation')}
          >
            Documentation
          </Tab>
          <Tab 
            active={activeTab === 'examples'} 
            onClick={() => setActiveTab('examples')}
          >
            Examples
          </Tab>
          <Tab 
            active={activeTab === 'community'} 
            onClick={() => setActiveTab('community')}
          >
            Community
          </Tab>
        </TabsList>
      </TabsContainer>
      
      {activeTab === 'overview' && (
        <ToolContent>
          <MainContent>
            <Description>
              <SectionTitle>About {tool.name}</SectionTitle>
              <Paragraph>{tool.longDescription}</Paragraph>
            </Description>
            
            <ToolPreview>
              <PreviewHeader>
                <PreviewTitle>{tool.name} Preview</PreviewTitle>
                <PreviewControls>
                  <PreviewControl color="#e74c3c" />
                  <PreviewControl color="#f39c12" />
                  <PreviewControl color="#2ecc71" />
                </PreviewControls>
              </PreviewHeader>
              <PreviewContent>
                {tool.name} Interface Preview
              </PreviewContent>
            </ToolPreview>
            
            <FeaturesSection>
              <SectionTitle>Features</SectionTitle>
              <FeaturesList>
                {tool.features.map((feature, index) => (
                  <FeatureCard key={index}>
                    <FeatureIcon>{feature.icon}</FeatureIcon>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </FeatureCard>
                ))}
              </FeaturesList>
            </FeaturesSection>
          </MainContent>
          
          <Sidebar>
            <SidebarCard>
              <SidebarCardTitle>Supported Asset Types</SidebarCardTitle>
              <AssetTypesList>
                {tool.assetTypes.map((assetType, index) => (
                  <AssetTypeItem key={index}>
                    <AssetTypeName>
                      <AssetTypeIcon>{assetType.icon}</AssetTypeIcon>
                      <span>{assetType.name}</span>
                    </AssetTypeName>
                    <AssetTypeCapabilities>
                      {assetType.capabilities.map((capability, i) => (
                        <Capability key={i} type={capability}>
                          {capability}
                        </Capability>
                      ))}
                    </AssetTypeCapabilities>
                  </AssetTypeItem>
                ))}
              </AssetTypesList>
            </SidebarCard>
            
            <SidebarCard>
              <SidebarCardTitle>Related Tools</SidebarCardTitle>
              <RelatedToolsList>
                {tool.relatedTools.map((relatedTool, index) => (
                  <RelatedToolItem key={index} to={`/tools/${relatedTool.id}`}>
                    <RelatedToolIcon color={relatedTool.color}>
                      {relatedTool.icon}
                    </RelatedToolIcon>
                    <RelatedToolInfo>
                      <RelatedToolTitle>{relatedTool.name}</RelatedToolTitle>
                      <RelatedToolDescription>{relatedTool.description}</RelatedToolDescription>
                    </RelatedToolInfo>
                  </RelatedToolItem>
                ))}
              </RelatedToolsList>
            </SidebarCard>
          </Sidebar>
        </ToolContent>
      )}
      
      {activeTab === 'documentation' && (
        <div>
          <SectionTitle>Documentation</SectionTitle>
          <Paragraph>Detailed documentation for {tool.name} is coming soon.</Paragraph>
        </div>
      )}
      
      {activeTab === 'examples' && (
        <div>
          <SectionTitle>Examples</SectionTitle>
          <Paragraph>Example projects created with {tool.name} will be displayed here.</Paragraph>
        </div>
      )}
      
      {activeTab === 'community' && (
        <div>
          <SectionTitle>Community</SectionTitle>
          <Paragraph>Community discussions and contributions related to {tool.name} will be shown here.</Paragraph>
        </div>
      )}
    </PageContainer>
  );
};

export default ToolDetailPage;
