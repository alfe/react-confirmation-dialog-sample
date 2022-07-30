import { useState } from 'react'
import './App.css'
import DeleteButtonWithConfirm from './components/DeleteButtonWithConfirm'
import EditButtonWithConfirm from './components/EditButtonWithConfirm';

function App() {
  const [text, setText] = useState('文字列');

  return (
    <div className="App">
      <span>{text}</span>
      <EditButtonWithConfirm
        tooltip="編集"
        onSubmit={(value, successCallback) => {
          setText(value.text);
          successCallback();
        }}
      />
      <DeleteButtonWithConfirm
        tooltip="削除"
        confirmTitle="削除確認ダイアログ"
        confirmText="対象の文字列を削除しますか？"
        onSubmit={() => setText('')}
      />
    </div>
  )
}

export default App
