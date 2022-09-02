// Original: TropicalBaron
import typewriterKeyEnter from "./audio/Typewriter/keyEnter.wav"
import typewriterKey1 from "./audio/Typewriter/key1.wav"
import typewriterKey2 from "./audio/Typewriter/key2.wav"
import typewriterKey3 from "./audio/Typewriter/key3.wav"
import typewriterKey4 from "./audio/Typewriter/key4.wav"
import typewriterKey5 from "./audio/Typewriter/key5.wav"
import typewriterKey6 from "./audio/Typewriter/key6.wav"
import typewriterKey7 from "./audio/Typewriter/key7.wav"
import typewriterKey8 from "./audio/Typewriter/key8.wav"
import typewriterKey9 from "./audio/Typewriter/key9.wav"
import typewriterKey10 from "./audio/Typewriter/key10.wav"

function typeSound(keyboard, keyType) {
    var keys = [];
    if (keyboard == "typewriter") {
        keys = [typewriterKey1, typewriterKey2, typewriterKey3, typewriterKey4, typewriterKey5, typewriterKey6, typewriterKey7, typewriterKey8, typewriterKey9, typewriterKey10];
    }

    var key = key = keys[Math.floor(Math.random()*keys.length)];
    
    let audio = null
    if (keyType == "enter") {
        audio = new Audio(typewriterKeyEnter);
    } else {
        audio = new Audio(key);
    }
    audio.play();
}

export default typeSound;