import Box from '@mui/material/Box'
import { useState } from 'react'
import './App.css'
import DeleteButtonWithConfirm from './components/DeleteButtonWithConfirm'

function App() {
  const [text, setText] = useState('削除対象文字列');

  return (
    <div className="App">
      <header className="App-header">
        <Box>
          <span>{text}</span>
          <DeleteButtonWithConfirm
            tooltip="削除"
            confirmText="削除しますか？"
            onSubmit={() => setText('')}
          />
        </Box>
      </header>
    </div>
  )
}

export default App
