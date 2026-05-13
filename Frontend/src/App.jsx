import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let API_URL = import.meta.env.VITE_BACKEND_URL;
  console.log('All env vars:', import.meta.env);
  console.log('Backend URL:', import.meta.env.VITE_BACKEND_URL);  
  const fetchFunction = async () => {
    const res = await fetch(`${API_URL}/check-post`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        postId: "123",
        userId: "456"
      })
    });
    const data = await res.json();
    console.log(data)
  }
  useEffect(() => {
    fetchFunction();

  }, [])


  return (
    <>

    </>
  )
}

export default App
