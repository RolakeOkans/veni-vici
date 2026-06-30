import { useState } from 'react'
import './App.css'

const API_URL = 'https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${import.meta.env.VITE_CAT_API_KEY}'

const App = () => {
  const [cat, setCat] = useState(null)
  const [banList, setBanList] = useState([])
  const [history, setHistory] = useState([])

  const fetchCat = async () => {
    let data = null
    let attempts = 0

    while (attempts < 50) {
      const response = await fetch(API_URL)
      const result = await response.json()
      const item = result[0]

      if (!item.breeds || item.breeds.length === 0) {
        attempts++
        continue
      }

      const breed = item.breeds[0]
      const origin = breed.origin || 'Unknown'
      const temperament = breed.temperament?.split(',')[0].trim() || 'Unknown'
      const lifeSpan = breed.life_span || 'Unknown'

      if (
        banList.includes(origin) ||
        banList.includes(temperament) ||
        banList.includes(lifeSpan)
      ) {
        attempts++
        continue
      }

      data = {
        image: item.url,
        name: breed.name,
        origin,
        temperament,
        lifeSpan,
      }
      break
    }

    if (data) {
      setCat(data)
      setHistory(prev => [data, ...prev])
    } else {
      alert('No results found outside your ban list! Try removing some bans.')
    }
  }

  const addToBan = (value) => {
    if (!banList.includes(value)) {
      setBanList([...banList, value])
    }
  }

  const removeFromBan = (value) => {
    setBanList(banList.filter(item => item !== value))
  }

  return (
    <div className="App">
      <h1>🐱 Veni Vici!</h1>
      <p>Discover cats from around the world- click an attribute to ban it!</p>

      <button className="discover-btn" onClick={fetchCat}>
        🐾 Discover!
      </button>

      {cat && (
        <div className="cat-card">
          <h2>{cat.name}</h2>
          <img src={cat.image} alt={cat.name} className="cat-image" />
          <div className="attributes">
            <span className="attr" onClick={() => addToBan(cat.origin)}>
              🌍 {cat.origin}
            </span>
            <span className="attr" onClick={() => addToBan(cat.temperament)}>
              😸 {cat.temperament}
            </span>
            <span className="attr" onClick={() => addToBan(cat.lifeSpan)}>
              ⏳ {cat.lifeSpan} years
            </span>
          </div>
        </div>
      )}

      {banList.length > 0 && (
        <div className="ban-section">
          <h3>🚫 Ban List</h3>
          <p>Click to remove from ban list</p>
          <div className="ban-list">
            {banList.map((item, index) => (
              <span key={index} className="ban-item" onClick={() => removeFromBan(item)}>
                {item}
              </span>
            ))}
          </div>
        </div>
      )}

      {history.length > 0 && (
        <div className="history-section">
          <h3>📜 History</h3>
          <div className="history-list">
            {history.map((item, index) => (
              <div key={index} className="history-item">
                <img src={item.image} alt={item.name} className="history-img" />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default App