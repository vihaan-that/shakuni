// components/ShlokaBox.js
export default function ShlokaBox({ storyline, shloka, meaning, transliteration }) {
  return (
    <div style={styles.shlokaBox}>
      {storyline && (
        <div style={styles.storyline}>
          {storyline.map((paragraph, index) => (
            <p key={index} style={styles.storyText}>{paragraph}</p>
          ))}
        </div>
      )}
      <h1 style={styles.shloka}>{shloka}</h1>
      <p style={styles.transliteration}>{transliteration}</p>
      <p style={styles.meaning}>{meaning}</p>
    </div>
  );
}

const styles = {
  shlokaBox: {
    backgroundColor: '#FFF4B7',
    color: '#000B58',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    border: '2px solid #006A67',
    maxWidth: '80%',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
  },
  storyline: {
    marginBottom: '20px',
    color: '#000B58',
    textAlign: 'justify',
  },
  storyText: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  shloka: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginTop: '15px',
  },
  transliteration: {
    fontSize: '1rem',
    color: '#006A67',
    marginTop: '10px',
  },
  meaning: {
    fontSize: '1rem',
    marginTop: '10px',
    color: '#000B58',
  },
};
