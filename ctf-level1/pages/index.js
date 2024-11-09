// pages/index.js
import { useRouter } from 'next/router';
import ShlokaBox from '../components/ShlokaBox';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  const handlePageClick = () => {
    router.push('/shloka-video');
  };

  return (
    <div className={styles.container} onClick={handlePageClick}>
      <ShlokaBox
        storyline={[
          "As the sun rises over the battlefield of Kurukshetra, the air is charged with the anticipation of impending war. Warriors, ready with armor and weapons, stand in formation. But at the heart of this scene is an unexpected pause: Arjuna, the mighty warrior, is stricken with a powerful inner turmoil. He sees before him not an enemy, but his own family, revered teachers, and beloved friends. His heart quivers, his bow slips from his hand, and his spirit falters.",
          "In this moment, Arjuna confides in Krishna, his charioteer and friend. He questions the very purpose of the war, overwhelmed by sorrow and compassion."
        ]}
        shloka="न चैतद्विद्मः कतरन्नो गरीयो
               यद्वा जयेम यदि वा नो जयेयुः।
               यानेव हत्वा न जिजीविषामः
               तेषामवस्थिताः प्रमुखे धार्तराष्ट्राः॥"
        transliteration="Na chaitad vidmah kataranno gareeyo
                         Yadva jayema yadi va no jayeyuh;
                         Yaaneva hatvaa na jijeevishama
                         Teshama avasthitah pramukhe dhartarashtraah."
        meaning="We do not know which is better for us — conquering them or being conquered by them. The sons of Dhritarashtra, whom we would not wish to kill even if it meant survival, now stand before us on this battlefield."
      />
    </div>
  );
}
