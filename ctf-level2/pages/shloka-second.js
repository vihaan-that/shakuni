// pages/shloka-second.js
import { useRouter } from 'next/router';
import ShlokaBox from '../components/ShlokaBox';
import styles from '../styles/Home.module.css';

export default function ShlokaSecond() {
  const router = useRouter();

  const handlePageClick = () => {
    router.push('/video-page'); // Navigate to video page
  };

  return (
    <div className={styles.container} onClick={handlePageClick}>
      <ShlokaBox
        storyline={[
          "As Arjuna’s gaze deepens, he perceives within Krishna’s form a mesmerizing array of expressions, weapons, and wonders. Faces upon faces, eyes upon eyes—each conveying a different emotion, from joy and compassion to fury and terror. Celestial beings, adorned in divine garments and fragrant scents, surround Krishna, worshipping Him in awe.",
          "Arjuna’s heart trembles, caught between wonder and fear. He realizes he is witnessing not only Krishna’s physical form but the essence of every being, every object, and every cosmic force unified within Him."
        ]}
        shloka="अनेकवक्त्रनयनमनेकाद्भुतदर्शनम्।
               अनेकदिव्याभरणं दिव्यानेकोद्यतायुधम्॥
               दिव्यमाल्याम्बरधरं दिव्यगन्धानुलेपनम्।
               सर्वाश्चर्यमयं देवमनन्तं विश्वतोमुखम्॥"
        transliteration="Aneka-vaktra-nayanam anekadbhuta-darshanam;
                         Aneka-divya-abharanam divya-aneka-udyata-ayudham;
                         Divya-malya-ambara-dharam divya-gandha-anulepanam;
                         Sarvashcharyam-ayam devam anantam vishvato-mukham."
        meaning="With numerous mouths and eyes, presenting many wondrous sights, adorned with divine ornaments, holding many uplifted divine weapons; Wearing celestial garlands and apparel, anointed with heavenly fragrances, He appeared as the marvelous, infinite Being whose faces were everywhere."
      />
    </div>
  );
}
