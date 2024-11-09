
// pages/shloka-second.js
import { useRouter } from 'next/router';
import ShlokaBox from '../components/ShlokaBox';
import styles from '../styles/Home.module.css';

export default function ShlokaSecond() {
  const router = useRouter();

  const handlePageClick = () => {
    router.push('/shloka-third'); // Navigate to the third Shloka page
  };

  return (
    <div className={styles.container} onClick={handlePageClick}>
      <ShlokaBox
        storyline={[
          "As the warriors reach Krishna, they disappear into the fearsome, blazing mouths that fill the sky. From every direction, Krishna’s mouths devour all beings, swallowing them whole in a terrifying display of cosmic power. His mouths, filled with flames, embody the raw force of destruction, obliterating everything in their path."
        ]}
        shloka="लेलिह्यसे ग्रसमानः समन्तात्
                लोकान्समग्रान्वदनैर्ज्वलद्भिः।
                तेजोभिरापूर्य जगत्समग्रं
                भासस्तवोग्राः प्रतपन्ति विष्णो॥"
        transliteration="Lelihyase grasamanah samantat
                         Lokan samagran vadanair jvaladbhiḥ;
                         Tejobhir apurya jagat samagram
                         Bhasas tavograḥ pratapanti vishno."
        meaning="You lick up and swallow all beings from every direction with Your flaming mouths. Filling the entire universe with Your radiance, Your scorching rays are burning everything, O Vishnu."
      />
    </div>
  );
}

