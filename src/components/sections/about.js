import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 100%;

  .about-content {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .intro-section {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 60px;
    align-items: start;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 30px;
    }
  }

  .intro-text {
    p {
      margin-bottom: 15px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .profile-highlight {
    background: rgba(100, 255, 218, 0.05);
    border: 1px solid rgba(100, 255, 218, 0.2);
    border-radius: var(--border-radius);
    padding: 30px;
    text-align: center;

    @media (max-width: 768px) {
      padding: 20px;
    }
  }

  .profile-pic-small {
    width: 150px;
    height: 150px;
    margin: 0 auto 20px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--green);
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:hover img {
      filter: none;
    }
  }

  .profile-stats {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;

    .stat-item {
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      color: var(--slate);

      .stat-value {
        color: var(--green);
        font-weight: 600;
        font-size: var(--fz-sm);
        margin-right: 8px;
      }
    }
  }

  .skills-showcase {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .skill-card {
    background: rgba(100, 255, 218, 0.03);
    border: 1px solid rgba(100, 255, 218, 0.1);
    border-radius: var(--border-radius);
    padding: 25px;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      border-color: var(--green);
      box-shadow: 0 10px 30px -15px var(--green-tint);
    }

    .card-header {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      padding-bottom: 15px;
      border-bottom: 1px solid rgba(100, 255, 218, 0.1);

      .card-icon {
        font-size: 24px;
        margin-right: 12px;
      }

      .card-title {
        font-family: var(--font-mono);
        font-size: var(--fz-md);
        color: var(--lightest-slate);
        font-weight: 600;
        margin: 0;
      }
    }

    .card-skills {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .skill-badge {
      display: inline-block;
      padding: 5px 12px;
      background-color: rgba(100, 255, 218, 0.1);
      color: var(--green);
      border-radius: 3px;
      font-family: var(--font-mono);
      font-size: 11px;
      font-weight: 500;
      transition: var(--transition);

      &:hover {
        background-color: rgba(100, 255, 218, 0.2);
      }
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const programmingSkills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'Python',
    'React',
    'Node.js',
    'FastAPI',
    'Flask',
    'Django',
    'Express',
    'Next.js',
    'GraphQL',
    'RESTful APIs',
  ];

  const aiSkills = [
    'LangChain',
    'Multi-Agent Systems',
    'OpenAI',
    'Gemini',
    'Google ADK',
    'FAISS',
    'Pinecone',
    'Qdrant',
    'RAG Pipelines',
    'Vector Search',
    'Prompt Engineering',
    'LLM Orchestration',
    'Guardrails',
  ];

  const cloudSkills = [
    'AWS Lambda',
    'EC2',
    'S3',
    'RDS',
    'ECS/EKS',
    'Google Cloud',
    'Cloud Run',
    'Pub/Sub',
    'Kinesis',
    'Neptune',
    'Kubernetes',
    'Docker',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="about-content">
        {/* Intro Section */}
        <div className="intro-section">
          <div className="intro-text">
            <p>
              Hello! My name is Pradip and I enjoy creating intelligent systems that solve
              real-world problems. My journey in software engineering began in 2013, and over the
              past 6+ years, I've evolved from building web applications to architecting AI-powered
              automation systems.
            </p>
            <p>
              My main focus these days is building and scaling intelligent automation solutions. I
              specialize in designing multiagent AI systems that automate complex business
              workflows, reduce manual effort, and deliver measurable efficiency gains across
              various domains.
            </p>
            <p>
              I'm passionate about building forward-looking AI-first architectures that align
              closely with business goals and deliver measurable impact.
            </p>
          </div>

          <div className="profile-highlight">
            <div className="profile-pic-small">
              <StaticImage
                src="../../images/me.jpg"
                width={300}
                quality={95}
                formats={['AUTO', 'WEBP', 'AVIF']}
                alt="Pradip Dhakal"
              />
            </div>
            <div className="profile-stats">
              <div className="stat-item">
                <span className="stat-value">6+</span>
                Years of Experience
              </div>
              <div className="stat-item">
                <span className="stat-value">Abu Dhabi</span>
                Current Location
              </div>
            </div>
          </div>
        </div>

        {/* Skills Cards */}
        <div className="skills-showcase">
          <div className="skill-card">
            <div className="card-header">
              <span className="card-icon">🤖</span>
              <h3 className="card-title">AI & ML</h3>
            </div>
            <div className="card-skills">
              {aiSkills.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <div className="card-header">
              <span className="card-icon">💻</span>
              <h3 className="card-title">Development</h3>
            </div>
            <div className="card-skills">
              {programmingSkills.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="skill-card">
            <div className="card-header">
              <span className="card-icon">☁️</span>
              <h3 className="card-title">Cloud & DevOps</h3>
            </div>
            <div className="card-skills">
              {cloudSkills.map((skill, i) => (
                <span key={i} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </StyledAboutSection>
  );
};

export default About;
