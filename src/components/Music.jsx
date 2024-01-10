import React, { useState, useEffect } from "react";
import { Howl } from "howler";
import EbruGundes from "../music/Ebru Gündeş - Yakışıklı (Official Audio).mp3";
import NesetErtas from "../music/Neşet Ertaş - Tatlı Dile Güler Yüze [ Doyulur mu ].mp3";
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
    if (sound) sound.stop();

    const selectedSong = songs[currentSongIndex];

    const newSound = new Howl({
      src: [selectedSong?.url],
      onend: () => {
        currentSongIndex < songs.length - 1
          ? setCurrentSongIndex(currentSongIndex + 1)
          : setCurrentSongIndex(0);
      },
    });

    setSound(newSound);

    if (count > 0) newSound.play();

    setCount((previousCount) => (previousCount = previousCount + 1));

    return () => sound?.stop();
  }, [currentSongIndex]);

  return (
    <div className={styles.musicContainer}>
      <p>{songs[currentSongIndex]?.title}</p>
      <div className={styles.musicButtons}>
        <button
          onClick={() =>
            setCurrentSongIndex((state) => {
              state === 0 ? (state = 2) : (state = state - 1);
              sound?.stop();
              sound?.play();
              return state;
            })
          }
          className={styles.musicButton}
        >
          <FaFastBackward />
        </button>
        <button
          onClick={() => {
            sound.stop();
            sound.play();
            if (pausedAt) {
              sound.seek(pausedAt);
            }
            setPausedAt(null);
          }}
          className={`${styles.musicButton} ${styles.play}`}
        >
          <FaPlay />
        </button>
        <button
          onClick={() => {
            sound?.pause();
            setPausedAt(sound.seek());
          }}
          className={styles.musicButton}
        >
          <FaPause />
        </button>
        <button
          onClick={() =>
            setCurrentSongIndex((state) => {
              state === 2 ? (state = 0) : (state = state + 1);
              sound?.stop();
              sound?.play();
              return state;
            })
          }
          className={styles.musicButton}
        >
          <FaFastForward />
        </button>
      </div>
    </div>
  );
}

export default Music;
