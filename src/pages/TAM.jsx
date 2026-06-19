import { useState } from 'react'

const greetings = [
  "Hey there!",
  "Hello, champion!",
  "Hi, amazing soul!",
  "Greetings, warrior!",
  "What's up, legend?",
]

const verbs = [
  "Keep pushing forward",
  "Never stop growing",
  "Stay strong and steady",
  "Believe in your journey",
  "Rise above the challenge",
]

const subjects = [
  "because you are destined for greatness",
  "as every step counts",
  "since your potential is limitless",
  "because you've got what it takes",
  "as the universe is on your side",
]

const encouragements = [
  "No mountain is too high",
  "Every setback is a setup for a comeback",
  "You're doing better than you think",
  "Even small progress is progress",
  "Courage is your superpower",
]

const callsToAction = [
  "Now go make today amazing!",
  "Let your light shine!",
  "Take that first step!",
  "Inspire someone today!",
  "You've got this—go get it!",
]

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

export default function TAM() {
  const [message, setMessage] = useState('Click the button to receive your motivational message.')

  function generateMessage() {
    setMessage(
      `${getRandomItem(greetings)} ${getRandomItem(verbs)}, ${getRandomItem(subjects)}. ${getRandomItem(encouragements)}. ${getRandomItem(callsToAction)}`
    )
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f0f8ff', textAlign: 'center', padding: '50px', minHeight: '100vh' }}>
      <h1 style={{ color: '#333' }}>The Answering Machine (TAM)</h1>
      <button
        onClick={generateMessage}
        style={{
          padding: '12px 24px',
          fontSize: '1rem',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={e => e.target.style.backgroundColor = '#218838'}
        onMouseOut={e => e.target.style.backgroundColor = '#28a745'}
      >
        Generate Message
      </button>
      <div style={{
        margin: '30px auto',
        padding: '20px',
        maxWidth: '600px',
        fontSize: '1.25rem',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
      }}>
        {message}
      </div>
    </div>
  )
}
