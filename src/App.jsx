import { useState, useCallback, useEffect } from 'react'
import './App.css'
import Chat from './chat'
import Bubble from './bubble'
import BubbleInput from './bubble-input'
import useMessages from './use-messages'
import { motion, AnimatePresence } from 'framer-motion'
import typeSound from './typeSound'

function App() {
  const [messages, addMessage] = useMessages([])
  const [newMessage, setNewMessage] = useState('')
  const [keyboard, setKeyboard] = useState(false)
  const nonAudioKeys = ['Shift', 'Control', 'Capslock', 'Alt', 'AltGraph']

  const handleSubmit = useCallback(
    bubbleHeight => {
      if (newMessage.length > 0) {
        addMessage({
          id: +new Date(),
          text: newMessage,
          height: bubbleHeight
        })
        setNewMessage('')
      }
    },
    [newMessage, messages]
  )

  useEffect(() => {
    function onKeydown(event) {
      if (event.key === '0' && event.altKey) {
        // Open/Close settings menu
        setKeyboard(false);
      } else if (event.key == '1' && event.altKey) {
        setKeyboard('typewriter');
      } else if (event.key == '2' && event.altKey) {
        setKeyboard('raspberry');
      }
      if (keyboard && !nonAudioKeys.includes(event.key)) {
        if (event.key == "Enter"){
          typeSound(keyboard, 'enter')
        } else if (event.key == " ") {
          typeSound(keyboard, 'space')
        }else {
          typeSound(keyboard, '')
        }
      }
    }
    window.addEventListener('keydown', onKeydown)
    return () => {
      window.removeEventListener('keydown', onKeydown)
    }
  }, [keyboard])

  const lastMessage = messages[messages.length - 1]
  const dy = lastMessage ? lastMessage.height : 0

  return (
    <div className="App">
      <Chat>
        <AnimatePresence>
          {messages.map(m => (
            <Bubble key={m.id} id={m.id} dy={dy}>
              {m.text}
            </Bubble>
          ))}
        </AnimatePresence>
        <BubbleInput
          value={newMessage}
          onChange={setNewMessage}
          onSubmit={handleSubmit}
        />
      </Chat>
    </div>
  )
}

export default App
