// pages/index.js
import { useRouter } from 'next/router';
import ShlokaBox from '../components/ShlokaBox';
import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();

  const handlePageClick = () => {
    router.push('/shloka-second'); // Navigate to second Shloka page
  };

  return (
    <div className={styles.container} onClick={handlePageClick}>
      <ShlokaBox
        storyline={[
          "As Arjuna stands on the battlefield, questioning the righteousness of war, Krishna, his friend and charioteer, senses his inner turmoil. With compassion, Krishna offers Arjuna a gift—a vision that transcends mortal understanding. He grants Arjuna “divya chakshu,” divine sight, so he may see Krishna’s true, universal form, encompassing all creation, sustenance, and destruction within itself.",
          "As the divine sight takes hold, Arjuna gasps in awe, his eyes widening to behold the magnificent spectacle before him. Krishna’s form begins to expand, encompassing countless realms and dimensions. The essence of time, space, and infinity unfold within Krishna’s being, revealing Him as the eternal force of the cosmos, present across the entire universe."
        ]}
        shloka="अनादिमध्यान्तमनन्तवीर्य-
                मनन्तबाहुं शशिसूर्यनेत्रम्।
                पश्यामि त्वां दीप्तहुताशवक्त्रं
                स्वतेजसा विश्वमिदं तपन्तम्॥"
        transliteration="Anadi-madhya-antam ananta-viryam
                         Ananta-bahum shashi-surya-netram;
                         Pashyami tvam dipta-hutasha-vaktram
                         Svatejasa vishvam-idam tapantam."
        meaning="I see You without beginning, middle, or end, with infinite power, with countless arms, with the sun and moon as Your eyes, and blazing fire coming from Your mouth, scorching this entire universe with Your radiance."
      />
    </div>
  );
}
