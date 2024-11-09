// components/ShlokaBox.js
import styles from '../styles/ShlokaBox.module.css';

export default function ShlokaBox({ storyline, shloka, meaning, transliteration, hint }) {
  return (
    <div className={styles.shlokaBox}>
      {/* Storyline */}
      {storyline && (
        <div className={styles.storyline}>
          {storyline.map((paragraph, index) => (
            <p key={index} className={styles.storyText}>{paragraph}</p>
          ))}
        </div>
      )}
      
      {/* Shloka and Translation */}
      <h1 className={styles.shloka}>{shloka}</h1>
      <p className={styles.transliteration}>{transliteration}</p>
      <p className={styles.meaning}>{meaning}</p>
      
      {/* Hint */}
      {hint && <p className={styles.hint}>{hint}</p>}
    </div>
  );
}
