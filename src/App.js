import { useState } from "react";
import "./styles.css";

var emojipedia = {
  "😀": "Grinning Face",
  "😅": "Grinning Face with Sweat",
  "🤣": "Rolling on the Floor Laughing",
  "🙃": "Upside-Down Face",
  "😍": "Smiling Face with Heart-Eyes",
  "😘": "Face Blowing a Kiss",
  "😬": "Grimacing Face",
  "😪": "Sleepy Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face"
};
var emojiList = Object.keys(emojipedia);
export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojipedia[userInput];
    if (meaning === undefined) {
      meaning = "Meaning not available";
    }
    setMeaning(meaning);
  }

  function emojiclickHandler(emoji) {
    var meaning = emojipedia[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>EMOJI LIST</h1>
      <input onChange={emojiInputHandler}></input>

      <div style={{ fontWeight: "bold", padding: "1rem" }}>{meaning}</div>
      <h3>Click on the emojis below</h3>
      {emojiList.map((emoji) => {
        return (
          <span
            onClick={() => emojiclickHandler(emoji)}
            key={emoji}
            style={{
              padding: "0.5rem 1rem",
              fontSize: "2rem",
              cursor: "pointer"
            }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
