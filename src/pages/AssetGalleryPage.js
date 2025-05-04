import React, { useState } from 'react';
import styled from 'styled-components';
import { useAssets } from '../contexts/AssetContext';

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

const AssetsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xxl);
`;

const AssetCard = styled.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all var(--transition-normal);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
  }
`;

const AssetImage = styled.div`
  height: 200px;
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
  font-size: 1.2rem;
`;

const AssetCreator = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
`;

const AssetProperties = styled.div`
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--border);
`;

const PropertyRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-xs);
  font-size: 0.9rem;
`;

const PropertyLabel = styled.span`
  color: var(--text-secondary);
`;

const PropertyValue = styled.span`
  color: var(--text-primary);
  font-weight: 500;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: var(--spacing-xxl) 0;
`;

const LoadingIndicator = styled.div`
  text-align: center;
  padding: var(--spacing-xxl) 0;
  color: var(--text-secondary);
`;

const AssetGalleryPage = () => {
  const { assets, loading, error } = useAssets();
  const [activeType, setActiveType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  const assetTypes = [
    { id: 'all', name: 'All Assets' },
    { id: 'character', name: 'Characters' },
    { id: 'map', name: 'Maps' },
    { id: 'item', name: 'Items' }
  ];
  
  // Filter assets based on type and search query
  const filteredAssets = assets.filter(asset => {
    const matchesType = activeType === 'all' || asset.type === activeType;
    const matchesSearch = searchQuery === '' || 
      asset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      asset.creator.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesType && matchesSearch;
  });
  
  // Helper function to render property values based on type
  const renderPropertyValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    } else if (typeof value === 'object') {
      return JSON.stringify(value).substring(0, 20) + '...';
    } else {
      return value;
    }
  };
  
  // Helper function to get top 3 properties for preview
  const getTopProperties = (properties) => {
    const entries = Object.entries(properties);
    return entries.slice(0, 3);
  };
  
  if (loading) {
    return (
      <PageContainer>
        <PageHeader>
          <PageTitle>Asset Gallery</PageTitle>
        </PageHeader>
        <LoadingIndicator>
          <h3>Loading assets...</h3>
          <p>Please wait while we fetch the latest assets</p>
        </LoadingIndicator>
      </PageContainer>
    );
  }
  
  if (error) {
    return (
      <PageContainer>
        <PageHeader>
          <PageTitle>Asset Gallery</PageTitle>
        </PageHeader>
        <EmptyState>
          <h3>Error loading assets</h3>
          <p>{error}</p>
        </EmptyState>
      </PageContainer>
    );
  }
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Asset Gallery</PageTitle>
        <PageDescription>
          Browse assets created with our platform tools. All assets can be used seamlessly across different tools without manual exports or imports.
        </PageDescription>
      </PageHeader>
      
      <FilterSection>
        <FilterTabs>
          {assetTypes.map(type => (
            <FilterTab 
              key={type.id}
              active={activeType === type.id}
              onClick={() => setActiveType(type.id)}
            >
              {type.name}
            </FilterTab>
          ))}
        </FilterTabs>
        
        <SearchBar>
          <SearchIcon>🔍</SearchIcon>
          <SearchInput 
            type="text" 
            placeholder="Search assets..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </SearchBar>
      </FilterSection>
      
      {filteredAssets.length > 0 ? (
        <AssetsGrid>
          {filteredAssets.map(asset => (
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
                <AssetCreator>Created by: {asset.creator}</AssetCreator>
                
                <AssetProperties>
                  {getTopProperties(asset.properties).map(([key, value]) => (
                    <PropertyRow key={key}>
                      <PropertyLabel>{key}:</PropertyLabel>
                      <PropertyValue>{renderPropertyValue(value)}</PropertyValue>
                    </PropertyRow>
                  ))}
                </AssetProperties>
              </AssetContent>
            </AssetCard>
          ))}
        </AssetsGrid>
      ) : (
        <EmptyState>
          <h3>No assets found</h3>
          <p>Try adjusting your filters or search query</p>
        </EmptyState>
      )}
    </PageContainer>
  );
};

export default AssetGalleryPage;
