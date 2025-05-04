import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
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

const FilterSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

const FilterTabs = styled.div`
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const FilterTab = styled.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: ${props => props.active ? 'var(--primary)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  border: 1px solid ${props => props.active ? 'var(--primary)' : 'var(--border)'};
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary)' : 'rgba(0, 0, 0, 0.05)'};
  }
`;

const SearchBar = styled.div`
  position: relative;
  width: 300px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  padding-left: calc(var(--spacing-md) * 2 + 1em);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-md);
  background-color: var(--surface);
  color: var(--text-primary);
  
  &:focus {
    outline: none;
    border-color: var(--primary);
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  left: var(--spacing-md);
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
`;

const ToolCard = styled.div`
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

const ToolImage = styled.div`
  height: 200px;
  background-color: ${props => props.color || '#f0f0f0'};
  background-image: ${props => props.image ? `url(${props.image})` : 'none'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2.5rem;
`;

const ToolContent = styled.div`
  padding: var(--spacing-lg);
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ToolTitle = styled.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.5rem;
`;

const ToolDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
  flex: 1;
`;

const ToolTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
`;

const ToolTag = styled.span`
  padding: var(--spacing-xs) var(--spacing-sm);
  background-color: rgba(52, 152, 219, 0.1);
  color: var(--primary);
  border-radius: var(--border-radius-sm);
  font-size: 0.8rem;
`;

const ToolFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--border);
  padding-top: var(--spacing-md);
`;

const ToolButton = styled(Link)`
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--primary);
  color: white;
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--secondary);
  }
`;

const ToolCreator = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-xl);
`;

const PageButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-circle);
  border: 1px solid ${props => props.active ? 'var(--primary)' : 'var(--border)'};
  background-color: ${props => props.active ? 'var(--primary)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-primary)'};
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: ${props => props.active ? 'var(--primary)' : 'rgba(0, 0, 0, 0.05)'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ToolsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  
  const tools = [
    {
      id: 'fantasy-map-maker',
      name: 'Fantasy Map Maker',
      description: 'Create beautiful fantasy maps for RPGs, novels, and world-building with an intuitive drag-and-drop interface.',
      creator: 'AI School Alumni',
      image: null,
      icon: '🗺️',
      color: '#3498db',
      category: 'map-makers',
      tags: ['maps', 'fantasy', 'rpg']
    },
    {
      id: 'character-creator',
      name: 'Character Creator',
      description: 'Design detailed characters with customizable attributes, appearances, and backstories for your games and stories.',
      creator: 'Code School Alumni',
      image: null,
      icon: '👤',
      color: '#e74c3c',
      category: 'character-creators',
      tags: ['characters', 'rpg', 'customization']
    },
    {
      id: 'medieval-town-simulator',
      name: 'Medieval Town Simulator',
      description: 'Build and simulate medieval towns with dynamic economies, populations, and events that evolve over time.',
      creator: 'Business School Alumni',
      image: null,
      icon: '🏰',
      color: '#f39c12',
      category: 'town-simulators',
      tags: ['simulation', 'medieval', 'economy']
    },
    {
      id: 'pixel-art-studio',
      name: 'Pixel Art Studio',
      description: 'Create beautiful pixel art for games, animations, and digital collectibles with specialized tools and palettes.',
      creator: 'Code School Alumni',
      image: null,
      icon: '🎨',
      color: '#9b59b6',
      category: 'asset-editors',
      tags: ['pixel art', 'graphics', 'animation']
    },
    {
      id: 'tabletop-rpg-engine',
      name: 'Tabletop RPG Engine',
      description: 'Run tabletop RPG campaigns online with integrated character sheets, dice rolling, and storytelling tools.',
      creator: 'Innovation School Alumni',
      image: null,
      icon: '🎲',
      color: '#2ecc71',
      category: 'rpg-engines',
      tags: ['rpg', 'tabletop', 'multiplayer']
    },
    {
      id: 'npc-generator',
      name: 'NPC Generator',
      description: 'Generate detailed non-player characters with personalities, backgrounds, and dialogue for your games and stories.',
      creator: 'AI School Alumni',
      image: null,
      icon: '🧙',
      color: '#1abc9c',
      category: 'character-creators',
      tags: ['npc', 'generator', 'ai']
    },
    {
      id: 'dungeon-designer',
      name: 'Dungeon Designer',
      description: 'Design intricate dungeons with traps, treasures, and monsters for tabletop or digital RPGs.',
      creator: 'Code School Alumni',
      image: null,
      icon: '🏔️',
      color: '#34495e',
      category: 'map-makers',
      tags: ['dungeons', 'rpg', 'level design']
    },
    {
      id: 'fantasy-economy-simulator',
      name: 'Fantasy Economy Simulator',
      description: 'Simulate complex economic systems for fantasy worlds with trade routes, resources, and market dynamics.',
      creator: 'Financial School Alumni',
      image: null,
      icon: '💰',
      color: '#16a085',
      category: 'town-simulators',
      tags: ['economy', 'simulation', 'fantasy']
    }
  ];
  
  const categories = [
    { id: 'all', name: 'All Tools' },
    { id: 'map-makers', name: 'Map Makers' },
    { id: 'character-creators', name: 'Character Creators' },
    { id: 'town-simulators', name: 'Town Simulators' },
    { id: 'rpg-engines', name: 'RPG Engines' },
    { id: 'asset-editors', name: 'Asset Editors' }
  ];
  
  // Filter tools based on category and search query
  const filteredTools = tools.filter(tool => {
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });
  
  // Pagination
  const toolsPerPage = 6;
  const indexOfLastTool = currentPage * toolsPerPage;
  const indexOfFirstTool = indexOfLastTool - toolsPerPage;
  const currentTools = filteredTools.slice(indexOfFirstTool, indexOfLastTool);
  const totalPages = Math.ceil(filteredTools.length / toolsPerPage);
  
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Creative Tools</PageTitle>
        <PageDescription>
          Explore tools created by our students that work together in the Alphabet Schools ecosystem.
          All tools share assets seamlessly, allowing for a frictionless creative experience.
        </PageDescription>
      </PageHeader>
      
      <FilterSection>
        <FilterTabs>
          {categories.map(category => (
            <FilterTab 
              key={category.id}
              active={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id);
                setCurrentPage(1);
              }}
            >
              {category.name}
            </FilterTab>
          ))}
        </FilterTabs>
        
        <SearchBar>
          <SearchIcon>🔍</SearchIcon>
          <SearchInput 
            type="text" 
            placeholder="Search tools..." 
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </SearchBar>
      </FilterSection>
      
      {currentTools.length > 0 ? (
        <ToolsGrid>
          {currentTools.map(tool => (
            <ToolCard key={tool.id}>
              <ToolImage color={tool.color}>
                {tool.icon}
              </ToolImage>
              <ToolContent>
                <ToolTitle>{tool.name}</ToolTitle>
                <ToolDescription>{tool.description}</ToolDescription>
                <ToolTags>
                  {tool.tags.map(tag => (
                    <ToolTag key={tag}>{tag}</ToolTag>
                  ))}
                </ToolTags>
                <ToolFooter>
                  <ToolButton to={`/tools/${tool.id}`}>
                    Try It
                  </ToolButton>
                  <ToolCreator>By: {tool.creator}</ToolCreator>
                </ToolFooter>
              </ToolContent>
            </ToolCard>
          ))}
        </ToolsGrid>
      ) : (
        <div style={{ textAlign: 'center', padding: 'var(--spacing-xxl) 0' }}>
          <h3>No tools found matching your criteria</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Try adjusting your filters or search query</p>
        </div>
      )}
      
      {totalPages > 1 && (
        <Pagination>
          <PageButton 
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            ←
          </PageButton>
          
          {[...Array(totalPages)].map((_, index) => (
            <PageButton
              key={index}
              active={currentPage === index + 1}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </PageButton>
          ))}
          
          <PageButton 
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            →
          </PageButton>
        </Pagination>
      )}
    </PageContainer>
  );
};

export default ToolsPage;
