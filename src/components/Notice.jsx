import React from 'react';
import '../styles/notice.css';

const Notice = () => {
  return (
    <div className='noticeWrapper'>
      <p><span class="redText">**</span>Artemis is undergoing a major re-write, if you notice any bugs please report an issue <a href="https://github.com/oslabs-beta/projectArtemis/issues"> here</a>. Thank you for your patience! <span class="redText">**</span> </p>
    </div>
  );
};

export default Notice;
