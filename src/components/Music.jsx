import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import EbruGundes from "../music/Ebru Gündeş - Yakışıklı (Official Audio).mp3";
import NesetErtas from "../music/Tatlı Dile Güler Yüze.mp3";
import ModernTalking from "../music/Modern Talking - Youre My Heart, Youre My Soul (Official Music Video).mp3";
import styles from "../styles/Music.module.css";
import { FaPlay, FaPause, FaFastBackward, FaFastForward } from "react-icons/fa";
import { configs } from "../config";

const songs = [
  { title: "Ebru Gündeş - Yakışıklı", url: EbruGundes },
  { title: "Neşet Ertaş - Tatlı Dile Güler Yüze", url: NesetErtas },
  { title: "Modern Talking - You're my heart", url: ModernTalking },
];

function Music() {
  const random = configs.randomMusic;
  const index = random ? Math.floor(Math.random() * 3) : 0;
  const [currentSongIndex, setCurrentSongIndex] = useState(index);
  const [sound, setSound] = useState(null);
  const [count, setCount] = useState(0);
  const [pausedAt, setPausedAt] = useState(null);

  useEffect(() => {
    if (sound) {
      sound.stop();
    }

    const selectedSong = songs[currentSongIndex];

    const newSound = new Howl({
      src: [selectedSong?.url],
      html5: true,
      onend: () => {
        currentSongIndex < songs.length - 1
          ? setCurrentSongIndex((index) => index + 1)
          : setCurrentSongIndex(0);
      },
    });

    setSound(newSound);

    if (count > 0) {
      newSound.play();
    }

    return () => newSound.stop();
  }, [currentSongIndex, count]);

  const handleFastBackward = () => {
    setPausedAt(null);
    setCurrentSongIndex((index) =>
      index === 0 ? songs.length - 1 : index - 1
    );
    setCount((prevCount) => prevCount + 1);
  };

  const handlePlay = () => {
    sound.stop();
    sound.play();
    if (pausedAt) {
      sound.seek(pausedAt);
    }
    setPausedAt(null);
  };

  const handlePause = () => {
    sound.pause();
    setPausedAt(sound.seek());
  };

  const handleFastForward = () => {
    setPausedAt(null);
    setCurrentSongIndex((index) =>
      index === songs.length - 1 ? 0 : index + 1
    );
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className={styles.musicContainer}>
      <p>{songs[currentSongIndex]?.title}</p>
      <div className={styles.musicButtons}>
        <button onClick={handleFastBackward} className={styles.musicButton}>
          <FaFastBackward />
        </button>
        <button
          onClick={handlePlay}
          className={`${styles.musicButton} ${styles.play}`}
        >
          <FaPlay />
        </button>
        <button onClick={handlePause} className={styles.musicButton}>
          <FaPause />
        </button>
        <button onClick={handleFastForward} className={styles.musicButton}>
          <FaFastForward />
        </button>
      </div>
    </div>
  );
}

export default Music;
