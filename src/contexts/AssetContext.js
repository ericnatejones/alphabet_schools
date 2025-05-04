import React, { createContext, useContext, useState, useEffect } from 'react';

const AssetContext = createContext();

export const useAssets = () => useContext(AssetContext);

export const AssetProvider = ({ children }) => {
  const [assets, setAssets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Mock function to fetch assets - in a real implementation, this would connect to your backend
  const fetchAssets = async () => {
    setLoading(true);
    try {
      // Simulating API call with mock data
      setTimeout(() => {
        const mockAssets = [
          {
            id: '1',
            name: 'Fantasy Character',
            type: 'character',
            creator: 'student1',
            imgUrl: 'https://via.placeholder.com/300/3498db/ffffff?text=Character',
            properties: {
              race: 'Elf',
              class: 'Ranger',
              level: 5
            },
            ownedByNFT: true,
            nftId: 'eth:0x123...456:1'
          },
          {
            id: '2',
            name: 'Medieval Town',
            type: 'map',
            creator: 'student2',
            imgUrl: 'https://via.placeholder.com/300/2ecc71/ffffff?text=Town+Map',
            properties: {
              size: 'medium',
              biome: 'temperate',
              population: 'medium'
            },
            ownedByNFT: false
          },
          {
            id: '3',
            name: 'Magic Sword',
            type: 'item',
            creator: 'student3',
            imgUrl: 'https://via.placeholder.com/300/e74c3c/ffffff?text=Magic+Item',
            properties: {
              damage: '1d8+2',
              type: 'slashing',
              magical: true
            },
            ownedByNFT: true,
            nftId: 'eth:0x789...012:42'
          }
        ];
        setAssets(mockAssets);
        setLoading(false);
      }, 1000);
    } catch (err) {
      setError('Failed to fetch assets');
      setLoading(false);
    }
  };

  // Create a new asset
  const createAsset = (assetData) => {
    const newAsset = {
      id: Date.now().toString(),
      ...assetData,
      ownedByNFT: false
    };
    setAssets(prev => [...prev, newAsset]);
    return newAsset;
  };

  // Mint an asset as NFT
  const mintAssetAsNFT = (assetId) => {
    setAssets(prev => prev.map(asset => 
      asset.id === assetId 
        ? { 
            ...asset, 
            ownedByNFT: true, 
            nftId: `eth:0x${Math.random().toString(16).slice(2, 10)}...${Math.random().toString(16).slice(2, 10)}:${Math.floor(Math.random() * 1000)}`
          } 
        : asset
    ));
  };

  // Update an existing asset
  const updateAsset = (assetId, updates) => {
    setAssets(prev => prev.map(asset => 
      asset.id === assetId ? { ...asset, ...updates } : asset
    ));
  };

  // Delete an asset
  const deleteAsset = (assetId) => {
    setAssets(prev => prev.filter(asset => asset.id !== assetId));
  };

  // Load assets on initial mount
  useEffect(() => {
    fetchAssets();
  }, []);

  return (
    <AssetContext.Provider value={{ 
      assets, 
      loading, 
      error, 
      createAsset, 
      updateAsset, 
      deleteAsset,
      mintAssetAsNFT,
      refreshAssets: fetchAssets
    }}>
      {children}
    </AssetContext.Provider>
  );
};
