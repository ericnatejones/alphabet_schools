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

const SectionTitle = styled.h2`
  margin-bottom: var(--spacing-lg);
  font-size: 2.2rem;
  text-align: center;
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
  color: var(--primary);
`;

const InfoCardContent = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: var(--spacing-md);
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xxl);
`;

const FeatureCard = styled(motion.div)`
  background-color: var(--surface);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-md);
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  color: var(--primary);
`;

const FeatureTitle = styled.h3`
  margin-bottom: var(--spacing-md);
  font-size: 1.5rem;
`;

const FeatureDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  flex: 1;
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
  text-decoration: none;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const PaymentFlowSection = styled.div`
  margin-bottom: var(--spacing-xxl);
`;

const PaymentFlowSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`;

const PaymentFlowStep = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-lg);
`;

const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.3rem;
`;

const StepDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const FAQSection = styled.div`
  margin-bottom: var(--spacing-xxl);
`;

const FAQItem = styled.div`
  margin-bottom: var(--spacing-lg);
`;

const FAQQuestion = styled.h3`
  margin-bottom: var(--spacing-sm);
  font-size: 1.3rem;
  color: var(--primary);
`;

const FAQAnswer = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const AlumniPaymentsPage = () => {
  const features = [
    {
      icon: '💰',
      title: 'Direct Payments',
      description: "Receive payments directly from students you mentor or from users of tools you've created within the platform."
    },
    {
      icon: '👑',
      title: 'School Leadership',
      description: 'Lead a school cohort and earn income while building your own product with the support of students and the community.'
    },
    {
      icon: '🔄',
      title: 'Revenue Sharing',
      description: 'Participate in our revenue sharing model where a percentage of platform fees goes back to alumni who contribute to the ecosystem.'
    },
    {
      icon: '📊',
      title: 'Transparent Tracking',
      description: 'Access detailed analytics and payment tracking through your dashboard to monitor your income streams.'
    },
    {
      icon: '🌐',
      title: 'Global Payments',
      description: 'Receive payments from anywhere in the world through traditional payment methods or cryptocurrency options.'
    },
    {
      icon: '🔐',
      title: 'NFT Integration',
      description: 'Monetize your digital assets and educational content through NFTs, with built-in royalty mechanisms for ongoing income.'
    }
  ];

  const paymentSteps = [
    {
      title: 'Complete a School Program',
      description: 'Graduate from one or more of our alphabet schools to qualify for the alumni payment system.'
    },
    {
      title: 'Create Value in the Ecosystem',
      description: 'Contribute by leading courses, creating tools, mentoring students, or developing educational content.'
    },
    {
      title: 'Set Up Your Payment Profile',
      description: 'Configure your payment preferences, including payout methods, revenue sharing options, and NFT settings.'
    },
    {
      title: 'Promote Your Contributions',
      description: 'Market your tools, courses, or mentorship services within the platform to attract students and users.'
    },
    {
      title: 'Receive Direct Payments',
      description: 'Get paid directly when users access your premium content, use your tools, or enroll in your courses.'
    },
    {
      title: 'Earn Ongoing Royalties',
      description: 'Continue to earn from your contributions through our royalty system, even as you develop new projects.'
    }
  ];

  const faqs = [
    {
      question: 'How much can I earn as a school leader?',
      answer: "School leaders typically earn between $3,000-$8,000 per cohort, depending on enrollment numbers and the specific school. Additionally, you'll be building your own product with student support, which can generate its own revenue stream."
    },
    {
      question: 'Do I need technical skills to lead a school?',
      answer: 'Different schools require different skill sets. While technical schools like Code School require programming expertise, others like Business School or Purpose School focus more on strategy, creativity, and leadership. We match leaders to schools that align with their strengths.'
    },
    {
      question: 'How are payments distributed?',
      answer: 'Payments are processed bi-weekly through your chosen payment method (bank transfer, PayPal, or cryptocurrency). Our platform automatically calculates your earnings based on student enrollments, tool usage, and other contributions.'
    },
    {
      question: 'What percentage of revenue do alumni receive?',
      answer: 'Alumni typically receive 70-80% of direct revenue from their courses and tools. For platform-wide revenue sharing, alumni receive a portion based on their level of contribution and engagement with the ecosystem.'
    },
    {
      question: 'How does the NFT integration work?',
      answer: 'Alumni can mint educational assets as NFTs, which students can purchase or earn. Each time an NFT is resold on the secondary market, the creator receives automatic royalties (typically 5-10%) through smart contracts.'
    },
    {
      question: 'Can I lead multiple schools simultaneously?',
      answer: 'While possible, we generally recommend focusing on one school at a time to ensure quality. However, experienced leaders may run concurrent cohorts for complementary schools (e.g., AI School and Code School) after demonstrating success.'
    }
  ];

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Alumni Payment System</PageTitle>
        <PageDescription>
          Our innovative payment system ensures that alumni who contribute to the education of others
          are fairly compensated for their expertise and time.
        </PageDescription>
      </PageHeader>

      <InfoCard>
        <InfoCardTitle>Build While You Earn</InfoCardTitle>
        <InfoCardContent>
          The Alphabet Schools Studio is built on the principle that education should be mutually beneficial.
          Our alumni payment system allows graduates to earn income while continuing to build their own products
          and contribute to the educational ecosystem. Whether you're leading a school, mentoring students,
          or creating tools, you'll be fairly compensated for the value you provide.
        </InfoCardContent>
      </InfoCard>

      <SectionTitle>Key Features</SectionTitle>
      <FeatureGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeatureGrid>

      <CTASection>
        <CTATitle>Ready to Lead and Earn?</CTATitle>
        <CTADescription>
          Apply now to lead one of our upcoming schools. As a leader, you'll earn income while building
          your product with the support of motivated students and our community of creators.
        </CTADescription>
        <CTAButton to="/apply-to-lead">Apply to Lead a School</CTAButton>
      </CTASection>

      <PaymentFlowSection>
        <SectionTitle>How It Works</SectionTitle>
        <PaymentFlowSteps>
          {paymentSteps.map((step, index) => (
            <PaymentFlowStep key={index}>
              <StepNumber>{index + 1}</StepNumber>
              <StepContent>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepContent>
            </PaymentFlowStep>
          ))}
        </PaymentFlowSteps>
      </PaymentFlowSection>

      <FAQSection>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <FAQQuestion>{faq.question}</FAQQuestion>
            <FAQAnswer>{faq.answer}</FAQAnswer>
          </FAQItem>
        ))}
      </FAQSection>
    </PageContainer>
  );
};

export default AlumniPaymentsPage;
