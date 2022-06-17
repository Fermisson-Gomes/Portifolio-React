import React from 'react';
import '../CSS/hardskills.css'
import { FaBootstrap, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiCss3, SiHtml5, SiJavascript, SiJest, SiRedux } from 'react-icons/si';
import Card from '../componentes/Card';
import Back from '../componentes/Back';

const HardSkills = () => {
  const techLIst = [
    {
      icon: <SiJavascript />,
      title: 'Javascript',
    },
    {
      icon: <SiHtml5 />,
      title: 'HTML',
    },
    {
      icon: <SiCss3 />,
      title: 'CSS',
    },
    {
      icon: <FaNodeJs />,
      title: 'Node',
    },
    {
      icon: <FaReact />,
      title: 'React',
    },
    {
      icon: <SiRedux />,
      title: 'Redux',
    },
    {
      icon: <SiJest />,
      title: 'Jest',
    },
    {
      icon: <FaBootstrap />,
      title: 'Bootstrap',
    },
  ];
  return (
    <main className='main'>
      <section className='hardskills'>
        <div className='hardskills-cards'>
        {
          techLIst.map(({icon, title}, index) => (
            <div key={index} className='card'>
              <Card icon={ icon } title={ title } />
            </div>
          ))
        }
        </div>
      <Back />
      </section>
    </main>
  )
}

export default HardSkills;
