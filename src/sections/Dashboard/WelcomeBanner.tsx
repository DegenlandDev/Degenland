"use client";

import { FaXTwitter } from "react-icons/fa6";
import React from "react";
import styled from "styled-components";
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  width: 100%;
  text-align: center;
  gap: 1.5rem;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    width: 100px;
    height: 100px;
    transition: transform 0.3s ease;
  }

  h1 {
    font-size: 2rem;
    margin: 0;
    font-weight: 600;
  }

  @media (max-width: 640px) {
    img {
      width: 60px;
      height: 60px;
    }

    h1 {
      font-size: 1.5rem;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    transition: all 0.2s ease;
    font-size: 0.9rem;

    &:hover {
      opacity: 0.8;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 640px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Description = styled.p`
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
  opacity: 0.9;
  line-height: 1.6;

  @media (max-width: 640px) {
    font-size: 1rem;
    padding: 0 1rem;
  }
`;

export function WelcomeBanner() {
  return (
    <Header>
      <Logo>
        <img src="/full-logo-transparent.png" alt="Degen Land" />
        <h1>Degen Land</h1>
      </Logo>
      <Description>
        A fair, simple and decentralized casino on Solana 🎰🎲
      </Description>
      <SocialLinks>
        <a
          href="https://x.com/degenlandcasino"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter size={20} />
          Follow us on X
        </a>
      </SocialLinks>
    </Header>
  );
}
