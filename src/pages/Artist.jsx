import React from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import SongList from '../components/SongList'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

const Artist = () => {
  const { id } = useParams()

  const artistObj = artistArray.filter(
    (currentArtistObj) => 
      currentArtistObj.id === Number(id)
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (currentSongObj) => 
      currentSongObj.artist === artistObj.name 
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex].id;


  return (
    <div className='artist'>
      <div className="artist__header" style={{ backgroundImage: 
        `linear-gradient(to bottom, var(--_shade), var(--_shade)), url(${artistObj.banner})` }}>
        <h1 className='artist_title'>{artistObj.name}</h1>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromArtist}/>
      </div>

      <Link to={`/song/${randomIdFromArtist}`}>
        <FontAwesomeIcon className='single-item__icon single-item__icon--artist' 
        icon={faCirclePlay} />
      </Link>
    </div>
  )
}

export default Artist
