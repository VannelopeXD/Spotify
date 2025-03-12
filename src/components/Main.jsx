import React from 'react'
import ItemList from './itemList'
import { artistArray } from '../assets/database/artists'
import { songsArray } from '../assets/database/songs'

function Main({ type }) {
  return ( 
    <div className='main'>

      {/* Item List para artistas */}
        {type === 'Artists' || type === undefined ? (
        <ItemList title='Artistas' 
        items={10} 
        itemsArray={artistArray} 
        path="/artists"
        idPath="/artist"
        /> 
         ) : ( 
         <></>)}

      {/* Item List para músicas */}
      {type === 'Songs' || type === undefined ? (
        <ItemList title='Musicas' 
        items={20} 
        itemsArray={songsArray} 
        path="/songs"
        idPath="/song"
        />
       ) : (
       <></>)}
    </div>
  )
}

export default Main
