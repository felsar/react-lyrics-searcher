import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Form from './componenets/Form';
import Song from './componenets/Song';
import ArtistInfo from './componenets/ArtistInfo';

function App() {
  const [searchLyric, setSearchLyric] = useState({});
  const [lyrics, setLyrics] = useState('');
  const [artistInfo, setArtistInfo] = useState('');

  const [error, setError] = useState({
    status: '',
    data: '',
    error :false
  });


  useEffect(() => {
    if (Object.keys(searchLyric).length === 0) return;

    const callAPI = async () => {
      const { artist, song } = searchLyric;
      const URL_API_LYRICS = `https://api.lyrics.ovh/v1/${artist}/${song}`
      const URL_API_SINGER = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      
      const [lyrics_result, info_result] = await Promise.all([
        axios.get(URL_API_LYRICS)
          /*
          .then(response => {
            // Handle response
            if (response.status === 200) {
              setError({ status: response.status, data: response.statusText, error: false })
              //setLyrics(response.data.lyrics)
            }

          })
          .catch((error) => {
            if (error.response) {
              setError({ status: error.response.status, data: error.response.data.error, error: true })

            }
          })*/
        ,
        axios.get(URL_API_SINGER)
          /*
          .then(response => {
            if (response.status === 200) {
              setError({ status: response.status, data: response.statusText, error: false })
              //setArtistInfo(response.data.artists[0])
            }
          })*/
      ]);
      setLyrics(lyrics_result.data.lyrics)
      setArtistInfo(info_result.data.artists[0])

    }

    callAPI();

    
  }
    , [searchLyric]
  );

  return (
    <div className="App">
      { error.error ===true? <p>Song not found</p> : null}
      <Form
        setSearchLyric={setSearchLyric}
      />

      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <ArtistInfo
              artistInfo={artistInfo}
            />--
          </div>
          <div className="col-md-6">
            <Song
              lyrics={lyrics}
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
