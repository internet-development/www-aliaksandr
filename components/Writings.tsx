'use client';

import Company from './Company';
import Link from 'next/link';
import PageGutterWrapper from './PageGutterWrapper';
import styles from './Writings.module.scss';
import Script from 'next/script';

import { FadeInSection } from '@components/FadeInSection';

function Post({ article }) {
  if (!article) return;

  return (
    <div className={styles.post}>
      <div className={styles.left}>
        {article?.title && (
          <Link href={article.url} className={styles.h1}>
            <h1 className={styles.h1}>{article.title}</h1>
          </Link>
        )}
        {article?.author && (
          <div className={styles.row}>
            <div className={styles.rowRight}>
              <div className={styles.rowName}>
                <>{article.author}</> • {article?.date && <>{article.date}</>}
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={styles.right}>
        <Link href={article.url} className={styles.readMoreButton}>
          Read more
        </Link>
      </div>
    </div>
  );
}


export default function Writings({ articles }) {
  if (!articles) return null;

  return (
    <div className={styles.writingsContainer} id="writings">
      <PageGutterWrapper>
        <FadeInSection>
          <h2 className={styles.h2}>Writings</h2>
          <div className={styles.gridAlt}>
            {/* 
            {articles?.map((article, index) => {
              return <Post article={article} key={index} />;
            })}
            */}
            <div id="substack-feed-embed" >
              <Script id="substack-feed-embed">
                {`
              window.SubstackFeedWidget = {
                substackUrl: "sashapage.substack.com",
                posts: 3,
                filter: "top",
                hidden: ["reactions", "image"],
                colors: {
                  primary: "#FFF6E5",
                  secondary: "#909090",
                  background: "#000000",
                }
              };
            `}
              </Script>
              <Script src="https://substackapi.com/embeds/feed.js" strategy="lazyOnload" />
            </div>
          </div>
        </FadeInSection>
      </PageGutterWrapper>
    </div>
  );
}
