import React, {useState} from 'react'

function AnalyzerForm({onAnalyze}) {
  const [url, setUrl] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    onAnalyze(url)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={url}
        onChange={e => setUrl(e.target.value)}
        placeholder="Enter website URL"
        required
      />
      <button type="submit">Analyze</button>
    </form>
  )
}

export default AnalyzerForm
