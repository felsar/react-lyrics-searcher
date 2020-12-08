import React from 'react';

const Song = ({ lyrics }) => {
    if (lyrics.lengh === 0) return null;

    return ( 
        <div className="song">
            <h2>Lyrics</h2>
            <p className="letra">
                {lyrics}
            </p>
        </div>
            
     );
}
 
export default Song;