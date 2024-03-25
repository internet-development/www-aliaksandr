import styles from './InfoSection.module.scss';

interface InfoSectionProps {
  title: string;
  content: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, content }) => {
  const paragraphs = content.split('\n\n');

  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <div className={styles.content}>
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p> // Render each paragraph in a <p> tag
        ))}
      </div>
    </div>
  );
};


export default InfoSection;
