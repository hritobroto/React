import React, { useEffect, useState } from 'react';
import './sidebar.css';
import SidebarButton from './sidebarButton';
import { MdFavorite, MdSpaceDashboard } from 'react-icons/md';
import { FaGripfire, FaPlay, FaSignOutAlt } from 'react-icons/fa';
import { IoLibrary } from 'react-icons/io5';
import apiClient from '../../spotify';

export default function Sidebar() {
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAUYxPTKpclkAAO2-xJJxkamzJ3MzdwBtQUA&usqp=CAU"
  );
  useEffect(() => {
    apiClient.get("me").then((response) => {console.log(response);
      setImage(response.data.images[0].url);
    });
  }, []);

  return (
    <div className='sidebar-container'>
        <img src={image} className="profile-img" alt="profile" />
        <div>
          <SidebarButton title = "Feed" to = "/feed" icon = {<MdSpaceDashboard />} />
          <SidebarButton title = "Trending" to = "/trending" icon = {<FaGripfire />} />
          <SidebarButton title = "Player" to = "/player" icon = {<FaPlay />} />
          <SidebarButton title = "Favourites" to = "/favourites" icon = {<MdFavorite />} />
          <SidebarButton title = "Library" to = "/library" icon = {<IoLibrary />} />
        </div>
        <SidebarButton title = "Sign Out" to = "" icon = {<FaSignOutAlt />} />
    </div>
  )
}
