
// pages/shloka-third.js
import { useRouter } from 'next/router';
import ShlokaBox from '../components/ShlokaBox';
import styles from '../styles/Home.module.css';

export default function ShlokaThird() {
  const router = useRouter();

  const handlePageClick = () => {
    router.push('/video-page'); // Navigate to the video page
  };

  return (
    <div className={styles.container} onClick={handlePageClick}>
      <ShlokaBox
        storyline={[
          "In the midst of this fearsome sight, Arjuna sees specific figures—legendary warriors and leaders known across the land. There are the sons of Dhritarashtra, his own relatives, and revered mentors like Bhishma and Drona, as well as Karna, who has been Arjuna’s rival. These heroes, once invincible on the battlefield, now rush with terrifying speed into Krishna’s jaws, some being crushed between His terrible teeth."
        ]}
        shloka="अमी च त्वां धृतराष्ट्रस्य पुत्राः
                सर्वे सहैवावनिपालसङ्घैः।
                भीष्मो द्रोणः सूतपुत्रस्तथासौ
                सहास्मदीयैरपि योधमुख्यैः॥
                वक्‍त्राणि ते त्वरमाणा विशन्ति
                दंष्ट्राकरालानि भयङ्कराणि॥"
        transliteration="Ami cha tvam dhritarashtrasya putrah
                         Sarve sahaivavani-pala-sanghaih;
                         Bhishmo dronah sutaputrastathasau
                         Sahasmadiyairapi yodha-mukhyaih.
                         Vaktrani te tvaramana vishanti
                         Damshtra-karalani bhayankarani."
        meaning="All the sons of Dhritarashtra, along with their allied kings, Bhishma, Drona, and Karna, and also our principal warriors, are rushing into Your fearful mouths. And some, I see, are being crushed between Your terrible teeth."
      />
    </div>
  );
}

