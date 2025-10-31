/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { email } from '@config';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 0;
  padding-top: 100px;
  max-width: 1000px;

  @media (max-width: 768px) {
    padding-top: 80px;
  }

  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
    padding-top: 60px;
  }

  .hero-content {
    width: 100%;
  }

  .greeting {
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    margin: 0 0 20px 4px;

    @media (max-width: 480px) {
      margin: 0 0 10px 2px;
    }
  }

  .hero-title {
    margin: 0;
    font-size: clamp(35px, 6vw, 55px);
    line-height: 1.1;

    .name {
      color: var(--lightest-slate);
      display: block;
      margin-bottom: 10px;
    }

    .role {
      color: var(--slate);
      display: block;
      font-size: clamp(28px, 5vw, 50px);
      margin-top: 5px;
    }

    .highlight {
      color: var(--green);
      position: relative;
      display: inline-block;

      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background: var(--green);
        opacity: 0.3;
      }
    }
  }

  .hero-description {
    margin-top: 30px;
    max-width: 650px;
    font-size: var(--fz-lg);
    line-height: 1.6;
    color: var(--slate);

    strong {
      color: var(--lightest-slate);
      font-weight: 600;
    }

    a {
      ${({ theme }) => theme.mixins.inlineLink};
      font-weight: 600;
    }
  }

  .hero-highlights {
    display: flex;
    gap: 20px;
    margin-top: 40px;
    flex-wrap: wrap;

    @media (max-width: 600px) {
      gap: 15px;
    }
  }

  .highlight-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    background: rgba(100, 255, 218, 0.05);
    border: 1px solid rgba(100, 255, 218, 0.2);
    border-radius: 6px;
    font-family: var(--font-mono);
    font-size: var(--fz-xs);
    color: var(--slate);
    transition: all 0.3s ease;

    &:hover {
      background: rgba(100, 255, 218, 0.1);
      border-color: var(--green);
      transform: translateY(-2px);
    }

    .badge-icon {
      font-size: 18px;
    }

    .badge-text {
      display: flex;
      flex-direction: column;
      gap: 2px;

      .badge-label {
        font-size: 10px;
        color: var(--green);
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }

      .badge-value {
        font-size: var(--fz-sm);
        color: var(--lightest-slate);
        font-weight: 600;
      }
    }
  }

  .hero-cta {
    display: flex;
    gap: 20px;
    margin-top: 50px;
    align-items: center;
    flex-wrap: wrap;

    .cta-button {
      ${({ theme }) => theme.mixins.bigButton};
      padding: 1.25rem 2rem;
      font-size: var(--fz-md);
    }

    .cta-link {
      font-family: var(--font-mono);
      font-size: var(--fz-sm);
      color: var(--green);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: var(--transition);

      &:hover {
        transform: translateX(5px);
      }

      &:after {
        content: '→';
        font-size: var(--fz-lg);
      }
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <div className="greeting">👋 Hi, my name is</div>;

  const two = (
    <h1 className="hero-title">
      <span className="name">Pradip Dhakal</span>
      <span className="role">
        I build <span className="highlight">AI-powered</span> systems
      </span>
    </h1>
  );

  const three = (
    <p className="hero-description">
      I'm a <strong>full-stack engineer and AI systems architect</strong> with 6+ years of
      experience building and scaling intelligent automation solutions. I specialize in designing{' '}
      <strong>multiagent AI systems</strong> that automate complex business workflows, reduce manual
      effort, and deliver measurable efficiency gains. Currently at{' '}
      <a href="https://www.wealthy.in/" target="_blank" rel="noreferrer">
        Wealthy
      </a>
      , driving AI-first architectures that deliver real business impact.
    </p>
  );

  const four = (
    <div className="hero-highlights">
      <div className="highlight-badge">
        <span className="badge-icon">🚀</span>
        <div className="badge-text">
          <span className="badge-label">Experience</span>
          <span className="badge-value">6+ Years</span>
        </div>
      </div>
      <div className="highlight-badge">
        <span className="badge-icon">🤖</span>
        <div className="badge-text">
          <span className="badge-label">Specialty</span>
          <span className="badge-value">AI Systems</span>
        </div>
      </div>
      <div className="highlight-badge">
        <span className="badge-icon">💼</span>
        <div className="badge-text">
          <span className="badge-label">Current</span>
          <span className="badge-value">Wealthy</span>
        </div>
      </div>
      <div className="highlight-badge">
        <span className="badge-icon">📍</span>
        <div className="badge-text">
          <span className="badge-label">Location</span>
          <span className="badge-value">Abu Dhabi</span>
        </div>
      </div>
    </div>
  );

  const five = (
    <div className="hero-cta">
      <a href={`mailto:${email}`} className="cta-button">
        Get In Touch
      </a>
      <a href="/#projects" className="cta-link">
        View My Work
      </a>
    </div>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <div className="hero-content">
        {prefersReducedMotion ? (
          <>
            {items.map((item, i) => (
              <div key={i}>{item}</div>
            ))}
          </>
        ) : (
          <TransitionGroup component={null}>
            {isMounted &&
              items.map((item, i) => (
                <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                  <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
                </CSSTransition>
              ))}
          </TransitionGroup>
        )}
      </div>
    </StyledHeroSection>
  );
};

export default Hero;
