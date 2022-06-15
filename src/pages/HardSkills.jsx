import React from 'react';
import '../CSS/hardskills.css'
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiCss3, SiHtml5, SiJavascript } from 'react-icons/si';
import { Link } from 'react-router-dom';
import Card from '../componentes/Card';

const HardSkills = () => {
  const icons = [
    <FaReact />,
    <SiJavascript />,
    <SiHtml5 />,
    <SiCss3 />,
    <FaNodeJs />
  ];
  const titles = [
    'React',
    'Javascript',
    'HTML',
    'CSS',
    'Node Js',
  ]
  return (
    <main className='main'>
      <section className='hardskills'>
        <div className='hardskills-cards'>
        {
          icons.map((icon, index) => (
            <div key={index} className='card'>
              <Card icon={ icon } title={ titles[index] } />
            </div>
          ))
        }
        </div>
      <div className="back">
          <Link to='/' ><p>Back</p></Link>
        </div>
      </section>
    </main>
  )
}

export default HardSkills;
