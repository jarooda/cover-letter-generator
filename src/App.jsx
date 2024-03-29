import React, { useState, useEffect } from 'react'
import { Input, Output } from './components'

function App() {
  const [input, setInput] = useState({
    hiringManager: '',
    appliedPosition: '',
    companyName: '',
    appliedCity: '',
    forBackend: false
  })

  useEffect(() => {
    const existedInput = {
      hiringManager: localStorage.getItem('hiringManager') || '',
      appliedPosition: localStorage.getItem('appliedPosition') || '',
      companyName: localStorage.getItem('companyName') || '',
      appliedCity: localStorage.getItem('appliedCity') || '',
      forBackend: localStorage.getItem('forBackend') === 'true' ? true : false
    }

    setInput(existedInput)
  }, [])

  return (
    <div className="container p-2">
      <div className="row">
        <Input input={input} setInput={setInput} />
        <Output input={input} />
      </div>
    </div>
  );
}

export default App;
