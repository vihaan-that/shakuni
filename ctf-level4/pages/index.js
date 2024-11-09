// pages/index.js
import { useEffect, useRef, useState } from 'react';
import ShlokaBox from '../components/ShlokaBox';
import styles from '../styles/VideoPage.module.css';

export default function VideoPage() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [teamName, setTeamName] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const toggleMute = () => {
    setMuted(!muted);
    if (videoRef.current) videoRef.current.muted = !muted;
  };

  const handleVideoEnd = () => {
    setTimeout(() => {
      if (videoRef.current) videoRef.current.play();
    }, 2000); // 2-second delay before looping
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://opsman.deploy.chakravyuh.live/verifyFinal?first=${firstNumber}&second=${secondNumber}&teamName=${teamName}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await response.text();
      setResponseMessage(result);
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Error: Couldn't fetch the response.");
    }
  };

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        src="/video.mp4"
        autoPlay
        muted={muted}
        onEnded={handleVideoEnd}
        className={`${styles.video} ${styles.fadeIn}`}
      />
      <div className={styles.overlay}>
        {/* Display response message in glowing text */}
        {responseMessage && <div className={styles.glowingText}>{responseMessage}</div>}

        {/* Mute/Unmute button */}
        <button onClick={toggleMute} className={styles.button}>
          {muted ? 'Unmute' : 'Mute'}
        </button>

        {/* Shloka Box with storyline, Shloka, meaning, transliteration, and hint */}
        <ShlokaBox
          storyline={[
            "Arjuna, caught in a web of doubt, yearns to understand the nature of his existence. Sensing his inner struggle, Krishna gently unveils the illusion of individuality. “Arjuna,” He says, “the self you cling to so dearly is like a wave upon the ocean. It rises and falls, yet it is never separate from the ocean itself.”",
            "As Krishna’s words resonate, Arjuna realizes that his soul is part of Krishna’s infinite soul, interwoven with all of existence. He is both the observer and the observed, the actor and the witness, his identity an inseparable part of Krishna’s grand design."
          ]}
          shloka="सद्भावे साधुभावे च सदसच्चाहमर्जुन।
अहमेवाक्षयं ब्रह्म तपाम्यहमहं वरिष्णु:॥"
          transliteration="Sadbhaave Saadhubhaave cha Sadasacchaaham Arjuna;
Ahamevaakshayam Brahma Tapaamyaham Aham Varishnu"
          meaning="I am existence and non-existence, goodness and badness, life and death. I am the eternal Brahman, the all-pervading reality."
          hint="You may have found the body of the key, but you must traverse the path you have taken to unite it with its soul. For the final truth in chakravyuh can only be reached with the complete key."
        />

        {/* Form with two input fields for 6-digit numbers */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            maxLength="6"
            value={firstNumber}
            onChange={(e) => setFirstNumber(e.target.value)}
            placeholder="Enter first 6-digit number"
            className={styles.input}
          />
          <input
            type="text"
            maxLength="6"
            value={secondNumber}
            onChange={(e) => setSecondNumber(e.target.value)}
            placeholder="Enter second 6-digit number"
            className={styles.input}
          />
          <input
          type="text"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          placeholder="Enter Team Name"
          className={styles.input}
        />
          <button type="submit" className={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
