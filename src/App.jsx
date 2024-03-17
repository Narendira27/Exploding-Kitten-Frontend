import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './pages/home'
import PlayPage from './pages/play'
import LeaderBoardPage from './pages/leaderboard'
import NotFoundPage from './pages/notfound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/play" element={<PlayPage />} />
        <Route path="/leaderboard" element={<LeaderBoardPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
