
// pages/index.js
import { useRouter } from 'next/router';
import ShlokaBox from '../components/ShlokaBox';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  const handlePageClick = () => {
    router.push('/shloka-second'); // Navigate to the second Shloka page
  };

  return (
    <div className={styles.container} onClick={handlePageClick}>
      <ShlokaBox
        storyline={[
          "As Arjuna gazes upon Krishna’s universal form, he is filled with awe, fear, and wonder. Within this vision, he perceives countless worlds and beings, but it is the streams of warriors, rushing toward Krishna’s blazing mouths, that seizes his heart with terror. Like rivers drawn irrevocably toward the ocean, the great heroes and warriors flow steadily toward Krishna, powerless against the force of destiny."
        ]}
        shloka="यथा नदीनां बहवोऽम्बुवेगाः
                समुद्रमेवाभिमुखा द्रवन्ति।
                तथा तवामी नरलोकवीरा
                विशन्ति वक्त्राण्यभिविज्वलन्ति॥"
        transliteration="Yatha nadinam bahavo ’mbu-vegah
                         Samudram evabhimukha dravanti;
                         Tatha tavami nara-loka-vira
                         Vishanti vaktranyabhivijvalanti."
        meaning="As the many waves of rivers flow rapidly toward the ocean, so do all these great warriors enter Your blazing mouths."
      />
    </div>
  );
}

