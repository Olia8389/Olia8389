import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container text-center">
        <Heading as="h1" className="hero__title">
          Welcome to {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Explore our documentation hub to learn more.">
      <HomepageHeader />
      <main className="mainContent">
        <div className="contentBox">
          <p className="introText">
            Clear and effective punctuation is key to professional and accessible communication. This microsite provides a comprehensive review of punctuation guidelines based on the Microsoft Style Guide. Whether you're crafting technical documentation, business reports, or everyday content, understanding proper punctuation will enhance clarity and readability.
          </p>
          <p className="subText">
            Explore the different punctuation rules, see practical examples, and learn best practices to elevate your writing. Start with the basics, or dive into advanced usage cases tailored for technical writing and formal documentation.
          </p>
        </div>
      </main>
    </Layout>
  );
}
