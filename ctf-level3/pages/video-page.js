// pages/video-page.js
import { useEffect, useRef, useState } from 'react';
import ShlokaBox from '../components/ShlokaBox';
import Timer from '../components/Timer';
import styles from '../styles/VideoPage.module.css';

export default function VideoPage() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [inputData, setInputData] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [teamName, setTeamName] = useState('');
  const [isBlank, setIsBlank] = useState(false);

  const toggleMute = () => {
    setMuted(!muted);
    if (videoRef.current) videoRef.current.muted = !muted;
  };

  const handleVideoTimeUpdate = () => {
    const video = videoRef.current;
    if (video && video.duration - video.currentTime <= 2 && !isFadingOut) {
      setIsFadingOut(true);
    }
  };

  const handleVideoEnd = () => {
    setIsFadingOut(false);
    if (videoRef.current) videoRef.current.play();
  };

  const handleTimerExpire = () => {
    setTimeout(() => setIsBlank(true), 240000); // Set to blank after timer expires
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://opsman.deploy.chakravyuh.live/verifyShloka?shloka=${encodeURIComponent(inputData)}&teamName=${encodeURIComponent(teamName)}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      const result = await response.json();
      setResponseMessage(result.message || "Verification complete.");
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("Error: Couldn't fetch the response.");
    }
  };
  

  if (isBlank) {
    return <div className={styles.blankPage}></div>; // Blank screen if the timer expires
  }

  return (
    <div className={styles.container}>
      <video
        ref={videoRef}
        src="/video.mp4"
        autoPlay
        muted={muted}
        onEnded={handleVideoEnd}
        onTimeUpdate={handleVideoTimeUpdate}
        className={`${styles.video} ${isFadingOut ? styles.fadeOut : ''}`}
      />
      <div className={styles.overlay}>
        {responseMessage && <div className={styles.glowingText}>{responseMessage}</div>}
        <button onClick={toggleMute} className={styles.button}>{muted ? 'Unmute' : 'Mute'}</button>
        <Timer initialMinutes={4} onExpire={handleTimerExpire} />
        
        <div className={styles.shlokaBox}>
          <ShlokaBox
            storyline={[
              "Overwhelmed by this vision of destruction, Arjuna’s mind fills with questions. Who is this all-consuming form? Why has Krishna revealed this terrifying aspect? Sensing Arjuna’s fear, Krishna finally reveals His true identity as Kala, the personification of Time, and the inexorable destroyer of all that exists."
            ]}
            shloka="कालोऽस्मि ███████ प्रवृद्धो\n\
                    लोकान्समाहर्तुमिह ██████।\n\
                    ऋतेऽपि ███ न भविष्यन्ति सर्वे\n\
                    येऽवस्थिताः प्रत्यनीकेषु █████॥"
            transliteration="Kalosmi █████ kshaya krit ██████\n\
                             Lokan █████ iha pravrittah;\n\
                             Rite pi tvam █████████ sarve\n\
                             Ye ███████ pratyanikeshu ████"
            meaning="I am Time, the great destroyer of the world, and I have come here to annihilate all people. With the exception of you [the Pandavas], all the soldiers here on both sides will be slain."
          />

          <p className={styles.hintText}>
            Death is but a moment in the eyes of eternal time, echo out the shloka into the heart of the cosmos, and find your path in the stride of the abyss.
          </p>
        </div>

        <form onSubmit={handleSubmit} className={styles.hiddenForm}>
          {/* Hidden "Enter Data" Input */}
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
            placeholder="Enter data"
            className={styles.hiddenOverlayInput}
          />
          <input
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Enter Team Name"
            className={styles.input}
          />
          {/* Hidden Submit Button */}
          <button type="submit" className={styles.hiddenOverlayButton}>Submit</button>
        </form>
      </div>
    </div>
  );
}
