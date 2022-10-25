import React from 'react';
import './style/Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const Widgets = () => {

  const newsArticle = (heading, subtitle) => (
    <div className='widgets__article'>
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>

      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className='widgets'>
        <div className="widgets__header">
          <h2>LinkedIn News</h2>
          <InfoIcon />
        </div>
        {newsArticle("William Koonz was here", 'Top News - 9099 readers')}
        {newsArticle("Adidas crashes 30%", 'Markets - 1943 readers')}
        {newsArticle("Saudi Arabia breaks ground on The Line", 'International News - 3189 readers')}
        {newsArticle("Rishi Sunak becomes Prime Minister", 'International News - 5382 readers')}
        {newsArticle("Bitcoin remains below $20K", 'Crypto - 938 readers')}
        {newsArticle("War in Ukraine continues", 'Geo Politics - 3829 readers')}
    </div>
  )
}

export default Widgets