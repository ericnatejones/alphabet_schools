import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DocContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: var(--spacing-lg);
`;

const DocHeader = styled.div`
  margin-bottom: var(--spacing-xl);
  border-bottom: 1px solid var(--border);
  padding-bottom: var(--spacing-lg);
`;

const DocTitle = styled.h1`
  margin-bottom: var(--spacing-md);
`;

const DocDescription = styled.p`
  color: var(--text-secondary);
  font-size: 1.2rem;
  margin-bottom: var(--spacing-md);
`;

const LastUpdated = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const DocContent = styled.div`
  line-height: 1.7;
`;

const Section = styled.section`
  margin-bottom: var(--spacing-xl);
`;

const SectionTitle = styled.h2`
  margin-bottom: var(--spacing-md);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--border);
`;

const SubsectionTitle = styled.h3`
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-md);
`;

const Paragraph = styled.p`
  margin-bottom: var(--spacing-md);
`;

const CodeBlock = styled.pre`
  background-color: ${props => props.theme === 'dark' ? '#2d2d2d' : '#f5f5f5'};
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  overflow-x: auto;
  margin-bottom: var(--spacing-md);
  font-family: var(--font-family-mono);
  font-size: 0.9rem;
`;

const Code = styled.code`
  font-family: var(--font-family-mono);
  background-color: ${props => props.theme === 'dark' ? '#2d2d2d' : '#f5f5f5'};
  padding: 0.2em 0.4em;
  border-radius: var(--border-radius-sm);
  font-size: 0.9em;
`;

const List = styled.ul`
  margin-bottom: var(--spacing-md);
  padding-left: var(--spacing-lg);
`;

const ListItem = styled.li`
  margin-bottom: var(--spacing-sm);
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: var(--spacing-lg);
`;

const TableHeader = styled.th`
  text-align: left;
  padding: var(--spacing-sm);
  border-bottom: 2px solid var(--border);
`;

const TableCell = styled.td`
  padding: var(--spacing-sm);
  border-bottom: 1px solid var(--border);
`;

const Note = styled.div`
  background-color: rgba(52, 152, 219, 0.1);
  border-left: 4px solid var(--primary);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  border-radius: var(--border-radius-sm);
`;

const Warning = styled.div`
  background-color: rgba(231, 76, 60, 0.1);
  border-left: 4px solid var(--accent);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  border-radius: var(--border-radius-sm);
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-xl);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border);
`;

const NavButton = styled(Link)`
  display: flex;
  align-items: center;
  padding: var(--spacing-sm) var(--spacing-md);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-md);
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--primary);
    color: white;
    border-color: var(--primary);
  }
`;

const AssetProtocolPage = () => {
  return (
    <DocContainer>
      <DocHeader>
        <DocTitle>Asset Protocol Documentation</DocTitle>
        <DocDescription>
          Understanding how assets are shared across the Alphabet Schools Studio ecosystem
        </DocDescription>
        <LastUpdated>Last updated: May 3, 2025</LastUpdated>
      </DocHeader>
      
      <DocContent>
        <Section>
          <SectionTitle>Introduction</SectionTitle>
          <Paragraph>
            The Asset Protocol is the foundation of the Alphabet Schools Studio ecosystem. It defines how creative assets are structured, stored, and shared between different tools created by students. This protocol ensures that assets created in one tool (such as a character designer) can be seamlessly used in another tool (such as a map maker) without requiring manual export/import processes.
          </Paragraph>
          <Paragraph>
            By adhering to this protocol, student-built tools can participate in a unified creative ecosystem, providing users with a frictionless experience across the entire platform.
          </Paragraph>
        </Section>
        
        <Section>
          <SectionTitle>Core Concepts</SectionTitle>
          
          <SubsectionTitle>Asset Identity</SubsectionTitle>
          <Paragraph>
            Each asset in the system has a unique identifier that remains consistent across all tools. This identifier is used to reference the asset regardless of which tool is currently using it.
          </Paragraph>
          <CodeBlock>{`// Example asset identifier
{
  "id": "asset_c7f8e9d2-3b5a-4f16-8a9c-1d2e3f4a5b6c",
  "type": "character",
  "version": "1.2.0",
  "creator": "user_8a7b6c5d-4e3f-2a1b-9c8d-7e6f5d4c3b2a"
}`}</CodeBlock>
          
          <SubsectionTitle>Asset Types</SubsectionTitle>
          <Paragraph>
            The protocol defines several standard asset types, each with its own set of required and optional properties. Tools can extend these types with additional properties while maintaining compatibility with the core protocol.
          </Paragraph>
          <List>
            <ListItem><Code>character</Code> - Characters for RPGs, stories, or games</ListItem>
            <ListItem><Code>map</Code> - Maps, locations, or environments</ListItem>
            <ListItem><Code>item</Code> - Items, equipment, or objects</ListItem>
            <ListItem><Code>texture</Code> - Textures, patterns, or materials</ListItem>
            <ListItem><Code>sound</Code> - Sound effects or music</ListItem>
            <ListItem><Code>animation</Code> - Character or object animations</ListItem>
            <ListItem><Code>story</Code> - Narrative elements or scripts</ListItem>
          </List>
          
          <SubsectionTitle>Property Schema</SubsectionTitle>
          <Paragraph>
            Each asset type has a defined schema of properties. Properties can be primitive values (strings, numbers, booleans) or complex objects (nested properties, arrays).
          </Paragraph>
          <Table>
            <thead>
              <tr>
                <TableHeader>Property Type</TableHeader>
                <TableHeader>Description</TableHeader>
                <TableHeader>Example</TableHeader>
              </tr>
            </thead>
            <tbody>
              <tr>
                <TableCell>Primitive</TableCell>
                <TableCell>Basic data types</TableCell>
                <TableCell><Code>name: "Elven Ranger"</Code></TableCell>
              </tr>
              <tr>
                <TableCell>Reference</TableCell>
                <TableCell>Reference to another asset</TableCell>
                <TableCell><Code>equippedItem: "asset_1a2b3c4d"</Code></TableCell>
              </tr>
              <tr>
                <TableCell>Image</TableCell>
                <TableCell>URL or data URI for images</TableCell>
                <TableCell><Code>portrait: "https://..."</Code></TableCell>
              </tr>
              <tr>
                <TableCell>Geometry</TableCell>
                <TableCell>Spatial information</TableCell>
                <TableCell><Code>position: {'{'}x: 10, y: 20{'}'}</Code></TableCell>
              </tr>
              <tr>
                <TableCell>Collection</TableCell>
                <TableCell>Arrays of values or objects</TableCell>
                <TableCell><Code>inventory: [...]</Code></TableCell>
              </tr>
            </tbody>
          </Table>
        </Section>
        
        <Section>
          <SectionTitle>Storage and Persistence</SectionTitle>
          
          <SubsectionTitle>Shared Storage</SubsectionTitle>
          <Paragraph>
            Assets are stored in a shared storage system accessible to all tools in the ecosystem. This storage system provides:
          </Paragraph>
          <List>
            <ListItem><strong>Persistence</strong> - Assets remain available across user sessions</ListItem>
            <ListItem><strong>Versioning</strong> - Changes to assets are tracked with version history</ListItem>
            <ListItem><strong>Access Control</strong> - Permissions determine who can view or modify assets</ListItem>
            <ListItem><strong>Conflict Resolution</strong> - Mechanisms to handle simultaneous edits</ListItem>
          </List>
          
          <SubsectionTitle>Local vs. Cloud Storage</SubsectionTitle>
          <Paragraph>
            The protocol supports both local storage (for offline use and personal assets) and cloud storage (for shared and collaborative assets). Tools should implement both storage types and provide synchronization between them.
          </Paragraph>
          
          <Note>
            When implementing local storage, ensure that assets are stored in a standardized location that other tools can access. The recommended path is <Code>~/AlphabetSchools/assets/</Code> with subdirectories for each asset type.
          </Note>
        </Section>
        
        <Section>
          <SectionTitle>Asset Lifecycle</SectionTitle>
          
          <SubsectionTitle>Creation</SubsectionTitle>
          <Paragraph>
            When a new asset is created, the tool must generate a unique identifier and initialize the asset with required properties for its type. The tool should then register the asset with the shared storage system.
          </Paragraph>
          <CodeBlock>{`// Example asset creation
function createCharacterAsset(name, race, characterClass) {
  const assetId = generateUniqueId();
  
  const asset = {
    id: assetId,
    type: "character",
    version: "1.0.0",
    creator: getCurrentUserId(),
    createdAt: new Date().toISOString(),
    properties: {
      name,
      race,
      class: characterClass,
      level: 1,
      attributes: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10
      },
      inventory: [],
      imgUrl: getDefaultCharacterImage(race, characterClass)
    }
  };
  
  // Register with storage system
  AssetStorage.register(asset);
  
  return assetId;
}`}</CodeBlock>
          
          <SubsectionTitle>Modification</SubsectionTitle>
          <Paragraph>
            When modifying an asset, tools should create a new version rather than directly mutating the existing one. This ensures that other tools using the asset aren't affected by unexpected changes.
          </Paragraph>
          
          <SubsectionTitle>Sharing</SubsectionTitle>
          <Paragraph>
            Assets can be shared between users through the platform's sharing mechanisms. When an asset is shared, the recipient receives a copy or a reference depending on the sharing settings.
          </Paragraph>
          
          <Warning>
            Tools should never modify assets created by other tools unless they have explicit permission to do so. Instead, they should create derived assets that reference the original.
          </Warning>
        </Section>
        
        <Section>
          <SectionTitle>NFT Integration</SectionTitle>
          
          <Paragraph>
            The Asset Protocol includes optional integration with blockchain technology to provide verifiable ownership through NFTs (Non-Fungible Tokens).
          </Paragraph>
          
          <SubsectionTitle>Minting Process</SubsectionTitle>
          <Paragraph>
            Users can choose to mint their assets as NFTs, which creates a permanent record of ownership on the blockchain. The minting process:
          </Paragraph>
          <List>
            <ListItem>Generates a unique token ID on the selected blockchain</ListItem>
            <ListItem>Creates metadata that links to the asset's content</ListItem>
            <ListItem>Records the transaction in the asset's history</ListItem>
            <ListItem>Updates the asset with its NFT information</ListItem>
          </List>
          
          <SubsectionTitle>Ownership Verification</SubsectionTitle>
          <Paragraph>
            Tools can verify ownership of assets by checking the blockchain record. This is particularly useful for premium assets or assets that grant special permissions within tools.
          </Paragraph>
          
          <Note>
            NFT integration is entirely optional. Users can create, share, and use assets without ever interacting with blockchain technology.
          </Note>
        </Section>
        
        <Section>
          <SectionTitle>Implementing the Protocol</SectionTitle>
          
          <SubsectionTitle>Required Endpoints</SubsectionTitle>
          <Paragraph>
            Tools must implement the following endpoints to participate in the asset ecosystem:
          </Paragraph>
          <List>
            <ListItem><Code>listSupportedAssetTypes()</Code> - Returns the asset types the tool can work with</ListItem>
            <ListItem><Code>importAsset(assetId)</Code> - Imports an asset from the shared storage</ListItem>
            <ListItem><Code>exportAsset(assetId)</Code> - Exports an asset to the shared storage</ListItem>
            <ListItem><Code>getAssetCapabilities(assetType)</Code> - Returns what the tool can do with a given asset type</ListItem>
          </List>
          
          <SubsectionTitle>Testing Compatibility</SubsectionTitle>
          <Paragraph>
            Before submitting your tool to the platform, use the Asset Protocol Validator to ensure compatibility with the ecosystem. The validator checks that your tool correctly implements all required endpoints and handles assets according to the protocol.
          </Paragraph>
          <CodeBlock>{`// Example validation command
$ alphabet-schools validate-tool --path ./my-tool --asset-types character,item`}</CodeBlock>
        </Section>
        
        <NavButtons>
          <NavButton to="/docs/architecture">← Architecture Overview</NavButton>
          <NavButton to="/docs/tool-development">Tool Development →</NavButton>
        </NavButtons>
      </DocContent>
    </DocContainer>
  );
};

export default AssetProtocolPage;
