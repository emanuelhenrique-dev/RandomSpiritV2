import React from 'react';
import { useState } from 'react';

import './styles.css';

export const ButtonRank = (props) => {

  const {click, rank, selectedButtons} = props;



  return (
    <div className={selectedButtons.includes(rank) ? 'button active' : 'button'} id= {rank} onClick={click}>
      {rank}
    </div>
  );
}

