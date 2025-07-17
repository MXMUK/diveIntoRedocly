import React from 'react';
import styled from 'styled-components';

import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Container = styled.div`
  font-family: 'Arial', sans-serif;
`;

const HeroSection = styled.section`
  color: white;
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 477px;
  max-width: 1100px;
`;

const HeroSectionWrap = styled.div`
  background-color: #0a2c44;
  display: flex;
  justify-content: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin: 60px auto 20px;
`;

const SubTitle = styled.h2`
  font-size: 1.2rem;
  text-align: start;
  margin: 0 20px 20px;
`;

const HeroButton = styled.button`
  padding: 12px 24px;
  background-color: #ffc107;
  color: #000;
  font-weight: bold;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1rem;
  max-width: 260px;
  height: 60px;

  &:hover {
    background-color: #e0a800;
  }
`;

const FeaturesSection = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
`;

const FeaturesTitle = styled.h2`
  font-size: 2.9rem;
  padding: 64px 0px 32px;
  font-family: 'DM Sans';
  font-weight: 500;
  letter-spacing: -0.01em;
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  max-width: 1100px;
  margin: 0 auto;
`;

const Card = styled.div`
  background-color: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  font-family: 'DM Sans';
  cursor: pointer;

  &:hover {
    background-color: rgb(235, 238, 240);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const CardDescription = styled.p`
  color: rgb(75, 87, 94);
  margin-bottom: 40px;
  line-height: 28px;
`;

const LearnMore = styled.a`
  color: #007bff;
  font-weight: bold;
  text-decoration: none;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const features = [
  {
    title: 'Messaging',
    description:
      'Communicate with customers via single SMS, scheduled batch sending, rich formats, WhatsApp, and more.',
  },
  {
    title: 'Voice & Video',
    description:
      'Make, receive, and control your voice calling using our Voice REST API or SIP trunks.',
  },
  {
    title: 'Email',
    description:
      "Start sending emails in minutes from your application via Mailgun's email API or SMTP.",
  },
  {
    title: 'Numbers & Connectivity',
    description:
      'Get local, national, mobile and toll-free numbers to connect with customers through voice and SMS applications.',
  },
  {
    title: 'Verification',
    description:
      'Secure your login and signups by verifying phone numbers using SMS, Voice, or flashcalls.',
  },
];

export default function () {
  return (
    <Container>
      <Swiper pagination={true} modules={[Pagination]} spaceBetween={2} slidesPerView={1} o>
        <SwiperSlide>
          <HeroSectionWrap>
            <HeroSection>
              <SubTitle>SMS API</SubTitle>
              <HeroTitle>Messaging apps that break through the noise</HeroTitle>
              <HeroButton>Get started</HeroButton>
            </HeroSection>
          </HeroSectionWrap>
        </SwiperSlide>

        <SwiperSlide>
          <HeroSectionWrap>
            <HeroSection>
              <SubTitle>VOICE & VIDEO</SubTitle>
              <HeroTitle>Build deeper connections with video and voice calling</HeroTitle>
              <HeroButton>Get started</HeroButton>
            </HeroSection>
          </HeroSectionWrap>
        </SwiperSlide>

        <SwiperSlide>
          <HeroSectionWrap>
            <HeroSection>
              <SubTitle>EMAIL</SubTitle>
              <HeroTitle>High-performing email programs start here</HeroTitle>
              <HeroButton>Get started</HeroButton>
            </HeroSection>
          </HeroSectionWrap>
        </SwiperSlide>
      </Swiper>

      <FeaturesSection>
        <FeaturesTitle>Building blocks to enable rich customer communication</FeaturesTitle>
        <CardsGrid>
          {features.map((f, index) => (
            <Card key={index}>
              <CardTitle>{f.title}</CardTitle>
              <CardDescription>{f.description}</CardDescription>
              <LearnMore href="#">Learn More →</LearnMore>
            </Card>
          ))}
        </CardsGrid>
      </FeaturesSection>
    </Container>
  );
}
