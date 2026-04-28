import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Exercise from './Exercise.jsx'
import PostCard from './PostCard.jsx'
import Postlist from './PostList.jsx'
import PostList from './PostList.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostList/>
  </StrictMode>,
)
