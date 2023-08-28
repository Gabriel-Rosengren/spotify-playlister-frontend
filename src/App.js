import axios from 'axios'

function App() {
  const getPlaylists = () => {
    axios.post('/playlist', {
      user_id: 'gabbe1010',
      limit: 10,
      offset: 0
    })
    .then(res => {
      console.log(res.data)
    })
  }

  const getUser = () => {
    axios.get('/user')
    .then(res => {
      console.log(res.data)
    })
  }

  return (
    <div className="App">
      <a href='http://localhost:4000/login'>Log in</a>
      <button onClick={getUser}>Get User</button>
      <button onClick={getPlaylists}>Get Playlists</button>
    </div>
  );
}

export default App;
