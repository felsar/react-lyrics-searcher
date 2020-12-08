import React from 'react';

const ArtistInfo = (artistInfo) => {
    //console.log(artistInfo.artistInfo)
    //console.log(artistInfo.strArtistThumb)
    //console.log(Object.keys(artistInfo))
    if (Object.keys(artistInfo).length === 0) return null;
    return ( 
        <div className="card border-light">
            <div className="card-header bg-primary text-light font-weight-bold">
                Artist Information
            </div>
            <div className="card-body">
                <img src={artistInfo.artistInfo.strArtistThumb} alt={artistInfo.artistInfo.strArtist} />
            </div>
        </div>
     );
}
 
export default ArtistInfo;