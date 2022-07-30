import Box from '@mui/material/Box'
import { useState } from 'react'
import './App.css'
import DeleteButtonWithConfirm from './components/DeleteButtonWithConfirm'

function App() {
  const [text, setText] = useState('削除対象文字列');

  return (
    <div className="App">
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <span>{text}</span>
        <DeleteButtonWithConfirm
          tooltip="削除"
          confirmTitle="削除確認"
          confirmText="対象の文字列を削除しますか？"
          onSubmit={() => setText('')}
        />
      </Box>
    </div>
  )
}

export default App
