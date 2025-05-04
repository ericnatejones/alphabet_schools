import React, { useState } from 'react';
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xxl);
  margin-bottom: var(--spacing-xxl);
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const InfoSection = styled.div``;

const FormSection = styled.div``;

const SectionTitle = styled.h2`
  margin-bottom: var(--spacing-lg);
  font-size: 1.8rem;
  color: var(--primary);
`;

const InfoCard = styled.div`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-xl);
`;

const InfoCardTitle = styled.h3`
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
`;

const InfoCardContent = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
`;

const BenefitsList = styled.ul`
  padding-left: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
`;

const BenefitItem = styled.li`
  margin-bottom: var(--spacing-sm);
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Form = styled.form`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
`;

const FormGroup = styled.div`
  margin-bottom: var(--spacing-lg);
`;

const Label = styled.label`
  display: block;
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-md);
  background-color: var(--background);
  color: var(--text-primary);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-md);
  background-color: var(--background);
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: var(--spacing-md);
  border: 1px solid var(--border);
  border-radius: var(--border-radius-md);
  background-color: var(--background);
  color: var(--text-primary);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`;

const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-sm);
`;

const Checkbox = styled.input`
  margin-right: var(--spacing-sm);
`;

const CheckboxLabel = styled.label`
  color: var(--text-secondary);
`;

const SubmitButton = styled(motion.button)`
  display: inline-block;
  padding: var(--spacing-md) var(--spacing-xl);
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all var(--transition-fast);
  
  &:hover {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  &:disabled {
    background-color: var(--disabled);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: var(--success);
  color: white;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  margin-top: var(--spacing-lg);
  text-align: center;
`;

const ApplyToLeadPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    linkedIn: '',
    portfolio: '',
    preferredSchool: '',
    alternateSchool: '',
    experience: '',
    productIdea: '',
    availability: '',
    interests: []
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        interests: [...formData.interests, value]
      });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter(interest => interest !== value)
      });
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };
  
  const schools = [
    { id: 'journey', name: 'Journey School' },
    { id: 'kindness', name: 'Kindness School' },
    { id: 'leadership', name: 'Leadership School' },
    { id: 'mastery', name: 'Mastery School' },
    { id: 'network', name: 'Network School' },
    { id: 'opportunity', name: 'Opportunity School' },
    { id: 'purpose', name: 'Purpose School' },
    { id: 'quietude', name: 'Quietude School' },
    { id: 'resilience', name: 'Resilience School' }
  ];
  
  const interestOptions = [
    { value: 'teaching', label: 'Teaching & Mentorship' },
    { value: 'product', label: 'Product Development' },
    { value: 'community', label: 'Community Building' },
    { value: 'content', label: 'Content Creation' },
    { value: 'research', label: 'Research & Innovation' },
    { value: 'business', label: 'Business Development' }
  ];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Apply to Lead a School</PageTitle>
        <PageDescription>
          Lead a school cohort, earn income, and build your product with the support of motivated students
          and our community of creators.
        </PageDescription>
      </PageHeader>
      
      <ContentGrid>
        <InfoSection>
          <SectionTitle>Why Lead a School?</SectionTitle>
          
          <InfoCard>
            <InfoCardTitle>Build While You Earn</InfoCardTitle>
            <InfoCardContent>
              As a school leader, you'll guide a cohort of students through a structured curriculum while
              simultaneously building your own product with their support and feedback.
            </InfoCardContent>
            <BenefitsList>
              <BenefitItem>Earn $3,000-$8,000 per cohort, depending on enrollment</BenefitItem>
              <BenefitItem>Develop your product with the help of motivated students</BenefitItem>
              <BenefitItem>Establish yourself as an authority in your field</BenefitItem>
              <BenefitItem>Create a sustainable income stream through alumni payments</BenefitItem>
              <BenefitItem>Access our network of creators, investors, and industry experts</BenefitItem>
            </BenefitsList>
          </InfoCard>
          
          <InfoCard>
            <InfoCardTitle>What Makes a Great School Leader?</InfoCardTitle>
            <InfoCardContent>
              We're looking for passionate individuals who have expertise in their field and a desire to
              share their knowledge while building something meaningful.
            </InfoCardContent>
            <BenefitsList>
              <BenefitItem>Domain expertise in the school's subject area</BenefitItem>
              <BenefitItem>A clear vision for a product you want to build</BenefitItem>
              <BenefitItem>Strong communication and mentorship skills</BenefitItem>
              <BenefitItem>Commitment to student success and community values</BenefitItem>
              <BenefitItem>Entrepreneurial mindset and problem-solving abilities</BenefitItem>
            </BenefitsList>
          </InfoCard>
          
          <InfoCard>
            <InfoCardTitle>The Selection Process</InfoCardTitle>
            <InfoCardContent>
              After submitting your application, here's what you can expect:
            </InfoCardContent>
            <BenefitsList>
              <BenefitItem>Initial application review (1-2 weeks)</BenefitItem>
              <BenefitItem>Video interview with our school coordination team</BenefitItem>
              <BenefitItem>Product idea presentation and curriculum review</BenefitItem>
              <BenefitItem>Final selection and onboarding (if accepted)</BenefitItem>
              <BenefitItem>Pre-cohort preparation (4 weeks before launch)</BenefitItem>
            </BenefitsList>
          </InfoCard>
        </InfoSection>
        
        <FormSection>
          <SectionTitle>Application Form</SectionTitle>
          
          {submitted ? (
            <SuccessMessage
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3>Application Submitted!</h3>
              <p>Thank you for applying to lead a school. We'll review your application and get back to you within 1-2 weeks.</p>
            </SuccessMessage>
          ) : (
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="linkedIn">LinkedIn Profile</Label>
                <Input
                  type="url"
                  id="linkedIn"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="portfolio">Portfolio/Website</Label>
                <Input
                  type="url"
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  placeholder="https://yourwebsite.com"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="preferredSchool">Preferred School to Lead *</Label>
                <Select
                  id="preferredSchool"
                  name="preferredSchool"
                  value={formData.preferredSchool}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a school</option>
                  {schools.map(school => (
                    <option key={school.id} value={school.id}>
                      {school.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="alternateSchool">Alternate School Choice</Label>
                <Select
                  id="alternateSchool"
                  name="alternateSchool"
                  value={formData.alternateSchool}
                  onChange={handleChange}
                >
                  <option value="">Select a school</option>
                  {schools.map(school => (
                    <option key={school.id} value={school.id}>
                      {school.name}
                    </option>
                  ))}
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="experience">Relevant Experience *</Label>
                <TextArea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  placeholder="Describe your background and experience relevant to the school you want to lead."
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="productIdea">Product Idea *</Label>
                <TextArea
                  id="productIdea"
                  name="productIdea"
                  value={formData.productIdea}
                  onChange={handleChange}
                  placeholder="Describe the product you want to build while leading this school."
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="availability">Availability *</Label>
                <Select
                  id="availability"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select availability</option>
                  <option value="immediate">Immediate (next 1-2 months)</option>
                  <option value="soon">Soon (3-4 months)</option>
                  <option value="later">Later (5-6 months)</option>
                  <option value="flexible">Flexible/Open to discussion</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label>Areas of Interest</Label>
                {interestOptions.map(option => (
                  <CheckboxGroup key={option.value}>
                    <Checkbox
                      type="checkbox"
                      id={option.value}
                      name="interests"
                      value={option.value}
                      checked={formData.interests.includes(option.value)}
                      onChange={handleCheckboxChange}
                    />
                    <CheckboxLabel htmlFor={option.value}>{option.label}</CheckboxLabel>
                  </CheckboxGroup>
                ))}
              </FormGroup>
              
              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Application
              </SubmitButton>
            </Form>
          )}
        </FormSection>
      </ContentGrid>
    </PageContainer>
  );
};

export default ApplyToLeadPage;
