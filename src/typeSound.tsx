// Original: TropicalBaron
import typewriterKeyEnter from './audio/Typewriter/keyEnter.wav'
import typewriterKey1 from './audio/Typewriter/key1.wav'
import typewriterKey2 from './audio/Typewriter/key2.wav'
import typewriterKey3 from './audio/Typewriter/key3.wav'
import typewriterKey4 from './audio/Typewriter/key4.wav'
import typewriterKey5 from './audio/Typewriter/key5.wav'
import typewriterKey6 from './audio/Typewriter/key6.wav'
import typewriterKey7 from './audio/Typewriter/key7.wav'
import typewriterKey8 from './audio/Typewriter/key8.wav'
import typewriterKey9 from './audio/Typewriter/key9.wav'
import typewriterKey10 from './audio/Typewriter/key10.wav'

function typeSound(keyboard, keyType) {
  console.log(keyboard)
  var keys = []
  if (keyboard == 'typewriter') {
    keys = [
      typewriterKey1,
      typewriterKey2,
      typewriterKey3,
      typewriterKey4,
      typewriterKey5,
      typewriterKey6,
      typewriterKey7,
      typewriterKey8,
      typewriterKey9,
      typewriterKey10
    ]
    console.log('keys')
  }

  var key = (key = keys[Math.floor(Math.random() * keys.length)])
  console.log(key)

  let audio = null
  switch (keyType) {
    default: {
      audio = new Audio(typewriterKey2)
    }
    case 'enter': {
      audio = new Audio(typewriterKeyEnter)
    }
  }
  audio.play()
}

export default typeSound
