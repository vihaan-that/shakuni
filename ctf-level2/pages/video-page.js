// pages/video-page.js
import { useEffect, useRef, useState } from 'react';
import ShlokaBox from '../components/ShlokaBox';
import Timer from '../components/Timer';
import Modal from '../components/Modal';
import styles from '../styles/VideoPage.module.css';

export default function VideoPage() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [number, setNumber] = useState('');
  const [teamName, setTeamName] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [isFadingOut, setIsFadingOut] = useState(false);

  const toggleMute = () => {
    setMuted(!muted);
    if (videoRef.current) videoRef.current.muted = !muted;
  };

  const handleVideoTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      if (video.duration - video.currentTime <= 2 && !isFadingOut) {
        setIsFadingOut(true);
      }
    }
  };

  const handleVideoEnd = () => {
    setIsFadingOut(false); 
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

//uggcf://330x.tuoho.vb/zvfp_gbbzf/havpbqr_fgntnabtenobl.ugzy
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://opsman.deploy.chakravyuh.live/verifyLevel?numbersval=${number}&level=2&teamName=${teamName}`, {
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
/*
 In the‌‌‌‌‍‬‬‌ ‌‌‌‌‍﻿‍‌‌‌‌‌‍﻿‍‌grand tapestry ‌‌‌‌‍﻿‌‌of creation, Vishnu‌‌‌‌‍﻿‌﻿’s multiversal form embodies‌‌‌‌‌﻿‬‬ all realms, ‌‌‌‌‌‬﻿﻿transcending ‌‌‌‌‌‬﻿﻿time and ‌‌‌‌‍﻿‌﻿space. ‌‌‌‌‍﻿‍‌His cosmic presence ‌‌‌‌‍﻿‬‍fills‌‌‌‌‍‬﻿‌ each ‌‌‌‌‍‬‍‍dimension, unveiling‌‌‌‌‍﻿‌﻿ the cyclical nature of‌‌‌‌‍﻿‍‍‌‌‌‌‍﻿‬‌ life‌‌‌‌‍﻿‬‌ and‌‌‌‌‌‬﻿‬ death in every particle‌‌‌‌‍‬‍﻿ and being. Vishnu‌‌‌‌‍‬‬‍’s eyes‌‌‌‌‍﻿‍‌, radiant‌‌‌‌‍‬‬‌ as galaxies, behold the‌‌‌‌‍﻿‍‍ cosmos with compassion‌‌‌‌‍‬‌‬ and ‌‌‌‌‌‬﻿‬wisdom, silently‌‌‌‌‍‬‬‍ guiding all‌‌‌‌‍‬﻿﻿ souls‌‌‌‌‌‬﻿﻿ towards ‌‌‌‌‍﻿‌﻿enlightenment.‌‌‌‌‍﻿‍‌ It is ‌‌‌‌‍‬‍‍said that his form encompasses every universe,‌‌‌‌‍‬‍﻿ every star, and every breath‌‌‌‌‍‬‌‍ of existence,‌‌‌‌‍‬﻿‬ reflecting the eternal dance of ‌‌‌‌‍‬﻿﻿creation and dissolution‌‌‌‌‍‬‍﻿. Those ‌‌‌‌‍﻿‌‬who truly ‌‌‌‌‍‬‌‍see his‌‌‌‌‍﻿‌‌‌‌‌‌‍‬‬‌ form‌‌‌‌‍﻿‬‍‌‌‌‌‌‬﻿﻿ understand the divine rhythm, realizing that all paths eventually lead back to the source.
 */
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
        {responseMessage && (
          <div className={styles.glowingText}>{responseMessage}</div>
        )}
        <button onClick={toggleMute} className={styles.button}>
          {muted ? 'Unmute' : 'Mute'}
        </button>
        <button onClick={() => setIsModalOpen(true)} className={styles.button}>
          Show Image
        </button>
        <a href="/image.png" download="image.png" className={styles.button}>
          Download Image
        </a>
        <Timer initialMinutes={4} />
        <ShlokaBox
          storyline={[
            "In this vision, Arjuna witnesses Krishna’s form spreading across the heavens, filling the space between earth and sky. The sight is awe-inspiring and yet terrifying. Krishna’s faces are countless, each one gazing upon the universe with eyes like burning coals.",
            "His heart trembles, and he begins to realize the profound truth of Krishna’s divine role. All beings, all worlds, and all realms exist within Him. The three worlds are filled with Krishna’s presence, and even the heavens themselves tremble at the sight."
          ]}
          shloka="द्यावापृथिव्योरिदमन्तरं हि
                  व्याप्तं त्वयैकेन दिशश्च सर्वाः।
                  दृष्ट्वाद्भुतं रूपमुग्रं तवेदं
                  लोकत्रयं प्रव्यथितं महात्मन्॥"
          transliteration="Dyava-prithivyor idam antaram hi
                           Vyaptam tvayaikena dishash cha sarvah;
                           Drishtvadbhutam rupam ugram tavedam
                           Loka-trayam pravyathitam mahatman."
          meaning="The space between heaven and earth and all the directions are pervaded by You alone. Seeing Your wondrous and terrible form, O great-souled One, the three worlds are trembling with fear."
        />
        
        {/* Hint Text */}
        <p className={styles.hintText}>
          Within the eternal cosmos encompassed by the undying Vishnu, lies your path.
        </p>

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

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <img src="/image.png" alt="Shloka Image" className={styles.modalImage} />
        </Modal>
      )}
    </div>
  );
}
