import React, {useState} from 'react';

const Form = ({ setSearchLyric }) => {

    const [error, setError] = useState(false);
    const [search, setSearch] = useState({
        artist: '',
        song: '',
    });

    const { artist, song } = search;

    const handleInputChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (artist.trim() === '' || song.trim() === '') {
            setError(true);
            return;
        } 
        else setError(false);

        //call API
        setSearchLyric(search);
    }

    return ( 
        <div className="bg-info">
            {error ?
                <p className="alert alert-danger text-center p-2">
                    All Fields are required
                        </p>
                : null
            }
            <div className="container">
                <div className="row">
                    
                    <form onSubmit={handleSubmit}
                        className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    >
                        <fieldset>
                            <legend className="text-center">
                                Lyrics Browser
                            </legend>
                            <div className="row">
                                <div className="col md-6">
                                    <div className="form-group">
                                        <label>Artist: </label>
                                        <input type="text"
                                            className="form-control"
                                            name="artist"
                                            placeholder="Artist"
                                            value={artist}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="col md-6">
                                    <div className="form-group">
                                        <label>Song: </label>
                                        <input type="text"
                                            className="form-control"
                                            name="song"
                                            placeholder="Song"
                                            value={song}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button type="submit"
                                className="btn btn-primary float-right"
                            >
                                Search
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Form;