// pages/shloka-video.js
import { useEffect, useRef, useState } from 'react';
import ShlokaBox from '../components/ShlokaBox';
import Timer from '../components/Timer';
import styles from '../styles/VideoPage.module.css';

export default function ShlokaVideoPage() {
  const videoRef = useRef(null);
  const audioRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [number, setNumber] = useState('');
  const [teamName, setTeamName] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isBlankScreen, setIsBlankScreen] = useState(false);

  const toggleMute = () => {
    setMuted(!muted);
    if (videoRef.current) videoRef.current.muted = !muted;
  };

  const toggleAudio = () => {
    if (audioPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setAudioPlaying(!audioPlaying);
  };

  const handleVideoEnd = () => {
    setTimeout(() => {
      if (videoRef.current) videoRef.current.play();
    }, 2000); // 2-second delay before looping
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://opsman.deploy.chakravyuh.live/verifyLevel?numbersval=${number}&level=1&teamName=${teamName}`, {
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

  // Handle timer expiration and blank the screen
  const handleTimerExpire = () => {
    setIsBlankScreen(true);

    // Wait 15 seconds, then show alert and reload
    setTimeout(() => {
      alert("GG! Please reload the page.");
      window.location.reload();
    }, 15000); // 15 seconds
  };

  return (
    <div className={isBlankScreen ? styles.blankScreen : styles.container}>
      {isBlankScreen ? null : (
        <>
          <video
            ref={videoRef}
            src="/video.mp4"
            autoPlay
            muted={muted}
            onEnded={handleVideoEnd}
            className={styles.video}
          />
          <div className={styles.overlay}>
            {responseMessage && (
              <div className={styles.glowingText}>{responseMessage}</div>
            )}
            <button onClick={toggleMute} className={styles.button}>
              {muted ? 'Unmute' : 'Mute'}
            </button>
            <button onClick={toggleAudio} className={styles.button}>
              {audioPlaying ? 'Pause Audio' : 'Play Audio'}
            </button>
            <a href="/audio.mp3" download className={styles.button}>
              Download Audio
            </a>
            <Timer initialMinutes={5} onExpire={handleTimerExpire} /> {/* 5-minute timer */}
            <ShlokaBox
              storyline={[
                "Krishna, the charioteer with an enigmatic smile, listens patiently. With compassion and profound insight, he reveals that life and death are mere aspects of a greater cosmic cycle beyond mortal understanding. Arjuna’s doubts, born from attachment and illusion, cannot grasp this depth. Krishna’s form is no mere mortal—he is the cosmic source itself.",
                "In response to Arjuna’s plea, Krishna offers him a rare gift: divine vision—a gaze that transcends the mortal realm. With this vision, Arjuna will behold the true, universal form of Krishna."
              ]}
              shloka="न तु मां शक्यसे द्रष्टुमनेनैव स्वचक्षुषा।
                     दिव्यं ददामि ते चक्षुः पश्य मे योगमैश्वरम्॥"
              transliteration="Na tu mam shakyase drashtum anenaiva svachakshusha;
                               Divyam dadami te chakshuh, pashya me yogam aishwaram."
              meaning="But you cannot see My cosmic form with your ordinary eyes; therefore I grant you divine vision. Behold My mystic opulence!"
            />
            <form onSubmit={handleSubmit} className={styles.form}>
              <input
                type="text"
                maxLength="2"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="Enter 2-digit number"
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
          <audio ref={audioRef} src="/audio.mp3" />
        </>
      )}
    </div>
  );
}
