// Inspiration: TropicalBaron
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
import raspberryKeyEnter from "./audio/Raspberry/keyEnter.wav"
import raspberryKeySpace from "./audio/Raspberry/keySpace.wav"
import raspberryKey1 from "./audio/Raspberry/key1.wav"
import raspberryKey2 from "./audio/Raspberry/key2.wav"
import raspberryKey3 from "./audio/Raspberry/key3.wav"
import raspberryKey4 from "./audio/Raspberry/key4.wav"
import raspberryKey5 from "./audio/Raspberry/key5.wav"
import raspberryKey6 from "./audio/Raspberry/key6.wav"
import raspberryKey7 from "./audio/Raspberry/key7.wav"
import raspberryKey8 from "./audio/Raspberry/key8.wav"
import raspberryKey9 from "./audio/Raspberry/key9.wav"
import raspberryKey10 from "./audio/Raspberry/key10.wav"
import macbookproKeyEnter from "./audio/Macbook pro/keyEnter.wav"
import macbookproKeySpace from "./audio/Macbook pro/keySpace.wav"
import macbookproKey1 from "./audio/Macbook pro/key1.wav"
import macbookproKey2 from "./audio/Macbook pro/key2.wav"
import macbookproKey3 from "./audio/Macbook pro/key3.wav"
import macbookproKey4 from "./audio/Macbook pro/key4.wav"

function typeSound(keyboard, keyType) {
    var keys = [];
    var enterkey;
    var spacekey;
    if (keyboard == "typewriter") {
        keys = [typewriterKey1, typewriterKey2, typewriterKey3, typewriterKey4, typewriterKey5, typewriterKey6, typewriterKey7, typewriterKey8, typewriterKey9, typewriterKey10];
        enterkey = typewriterKeyEnter
        spacekey = keys[Math.floor(Math.random()*keys.length)];
    } else if (keyboard == "raspberry") {
        keys = [raspberryKey2,
            raspberryKey3,
            raspberryKey5,
            raspberryKey10];
        // raspberryKey9, raspberryKey8, raspberryKey7, raspberryKeySpace, raspberryKey6, raspberryKey4, raspberryKey1 have been removed from the code because they cause a big sort of pop when they finish playing maybe because they are to short?
        enterkey = raspberryKeyEnter
        spacekey = raspberryKeyEnter
    } else if (keyboard == "macbook pro") {
        keys = [macbookproKey1, macbookproKey2, macbookproKey3, macbookproKey4]
        enterkey = macbookproKeyEnter
        spacekey = macbookproKeySpace
    }

    var key = keys[Math.floor(Math.random()*keys.length)];
    
    let audio = null
    if (keyType == "enter") {
        audio = new Audio(enterkey);
    } else if (keyType == "space") {
        audio = new Audio(spacekey);
    } else {
        console.log(key)
        audio = new Audio(key);
    }
    audio.play();
}

export default typeSound;