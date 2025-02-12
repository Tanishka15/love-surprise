import React, { useState } from "react";

function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    const audio = document.getElementById("love-song");
    if (audio) {
      audio.play()
        .then(() => console.log("Music is playing 🎶"))
        .catch((error) => console.log("Autoplay blocked:", error));
    }
  };

  return (
    <section className="love-letter">
      <h2>💌 A Letter for You 💌</h2>
      
      {!isOpen ? (
        <div className="envelope" onClick={handleOpen}>
          <p>Click to Open</p>
        </div>
      ) : (
        <div className="letter">
          <p>My Love,</p>
          <p>
            From miles apart, yet always close in my heart—you are the one I see and smile, 
            a feeling that lasts more than a while. 💖
          </p>
          <p>
            Every night, I close my eyes and find myself gazing into your deep brown eyes, 
            getting lost in the endless skies. No matter how far we are, the thought of you 
            wraps around me like a warm embrace, reminding me that love knows no distance.
          </p>
          <p>
            I long for the day when I can finally hold you close, feel your heartbeat against mine, 
            and whisper all the words my heart has been keeping for you. But even in the distance, 
            you are with me in every step, every thought, every little moment.
          </p>
          <p>
            Being apart isn't easy, but somehow, knowing that you are there—waiting for me, missing me—
            makes me love you even more. Every "I miss you," every late-night call, every memory we cherish 
            makes the wait worthwhile. Your cute smile is enough to make my day shine, and I carry it with me always.
          </p>
          <p>
            Until we meet again, my love, keep me in your heart as I keep you in mine. 
            No matter how many miles separate us, you are always my home.  
          </p>
          <p><strong>I love you, forever and always. 💙✨</strong></p>
        </div>
      )}

      {/* Hidden Audio (Plays When Letter Opens) */}
      <audio id="love-song" preload="auto">
  <source src="https://drive.google.com/file/d/1Ljw7SXXMWnUL8m58kfHbVz0NDDfO36O5/view?usp=drive_link" type="audio/mpeg" />
</audio>

    </section>
  );
}

export default LoveLetter;
