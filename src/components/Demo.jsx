import React from 'react';
import GUIOne from '../images/gui-1.png';
import GUITwo from '../images/gui-2.png';
import GUIThree from '../images/gui-3.png';
import '../styles/demo.css';

const Demo = () => {
  return (
    <div className="demo-container">
      <div className="flex">
        <img
          src={GUIOne}
          alt="screenshot of artemis"
          className="screenshot one"
        />
        <p className="screenshot-text">
        Simply enter the <b>endpoint URL</b> you are testing on our <i><a href="https://project-artemis-v1.vercel.app/">online platform</a></i> and select the number of times to run the query, then watch as Artemis <i>visualizes</i> your results in real time.
        </p>
      </div>
      <div className="flex reverse">
        <img
          src={GUITwo}
          alt="screenshot of artemis"
          className="screenshot two"
        />
        <p className="screenshot-text">
        Analytics including <i>aggregate response time, success and error instance ratios, returned data size</i>, and <i>persistent individual snapshots</i> of each successful query results.
        </p>
      </div>
      <div className="flex">
        <img
          src={GUIThree}
          alt="screenshot of artemis"
          className="screenshot three"
        />
        <p className="screenshot-text">
        Artemis is an <b>invaluable tool</b> for <i>testing</i>, <i>analyzing</i> and <i>optimizing</i> your API during both development and deployment.
        </p>
      </div>
    </div>
  );
};

export default Demo;
