import styles from './InfoSection.module.scss';

interface InfoSectionProps {
  title: string;
  content: string;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, content }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <span className={styles.content}>{content}</span>
    </div>
  );
};

export default InfoSection;
