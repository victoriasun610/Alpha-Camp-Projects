const BASE_URL = 'https://api.lyrics.ovh/v1/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
  artist: 'Adele',
  album: '25',
  tracks: [
    'Hello',
    'Send My Love (To Your New Lover)',
    'I Miss You',
    'When We Were Young',
    'Remedy',
    'Water Under the Bridge',
    'River Lea',
    'Love in the Dark',
    'Million Years Ago',
    'All I Ask',
    'Sweetest Devotion'
  ]
}

for (let track of album.tracks) {
  let li = document.createElement('li') 
  li.innerHTML = `<a class='nav-link data-toggle='pill' href='#'>${track}</a>`
  songList.appendChild(li)
}

songList.addEventListener('click', event=> {
  const song = event.target.innerText
  
  axios.get(`${BASE_URL}${album.artist}/${song}`)
  .then(response=>
       {
    const lyrics = response.data.lyrics
    lyricsPanel.innerHTML = `

      <div class="lyrics-box">
        <h2>${song}</h2>
        <pre>${lyrics}</pre>
      </div>
` 
  })
 .catch(error =>console.log(err))
  })