import React from 'react';
import erick from '../images/erick.png';
import greg from '../images/greg.png';
import taylor from '../images/taylor.png';
import scott from '../images/scott.png';
import stella from '../images/stella.png';
import '../styles/team.css';
import github from '../images/logo-github.svg';
import linkedin from '../images/logo-linkedin.svg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Erick Melendez',
      filePath: erick,
      handle: (
        <a href="https://github.com/mlndz-la">
          <img src={github} alt="github"></img>
        </a>
      ),
      linkHandle: (
        <a href="https://www.linkedin.com/in/erick-m/">
          <img src={linkedin} alt="linkedin"></img>
        </a>
      ),
    },
    {
      name: 'Greg',
      filePath: greg,
      handle: (
        <a href="https://github.com/greg-dixon">
          <img src={github} alt="github"></img>
        </a>
      ),
      linkHandle: (
        <a href="https://www.linkedin.com/in/gdixon529/">
          <img src={linkedin} alt="linkedin"></img>
        </a>
      ),
    },
    {
      name: 'Scott Burman',
      filePath: scott,
      handle: (
        <a href="https://github.com/scottburs">
          <img src={github} alt="github"></img>
        </a>
      ),
      linkHandle: (
        <a href="https://www.linkedin.com/in/scottburman847/">
          <img src={linkedin} alt="linkedin"></img>
        </a>
      ),
    },
    {
      name: 'Taylor Morgan',
      filePath: taylor,
      handle: (
        <a href="https://github.com/TaylorMorgan7">
          <img src={github} alt="github"></img>
        </a>
      ),
      linkHandle: (
        <a href="https://www.linkedin.com/in/taylor-morgan-3038b9201/">
          <img src={linkedin} alt="linkedin"></img>
        </a>
      ),
    },
    {
      name: 'Stella Liao',
      filePath: stella,
      handle: (
        <a href="https://github.com/stellaliao01">
          <img src={github} alt='github'></img>
        </a>
      ),
      linkHandle: (
        <a href="https://www.linkedin.com/in/stellaliao/">
          <img src={linkedin} alt="linkedin"></img>
        </a>
      ),
    },
  ];

  return (
    <>
      <div className="team-container">
        <p className="team-container__intro">Meet the Team</p>
        <div className="team-members-container">
          {teamMembers.map((person) => TeamMember(person))}
        </div>
      </div>
    </>
  );
};

const TeamMember = ({ name, filePath, handle, linkHandle }) => {
  return (
    <div className="team-member">
      <img loading="lazy" className="team-member__img" src={filePath} alt="" />
      <h4 className="team-member__name">{name}</h4>
      <div className='logo-container'>
        <h1 className='icon'>{handle}</h1>
        <h1 className='icon'>{linkHandle}</h1>
      </div>
    </div>
  );
};

export default Team;
