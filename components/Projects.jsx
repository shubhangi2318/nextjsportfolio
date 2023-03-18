import React from 'react';
import miCloneImg from '../public/assets/projects/miclone.jpg';


import ProjectItem from './ProjectItem';
import lyricliousImg from '../public/assets/projects/lyriclious.jpg'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Mi Clone'
            backgroundImg={miCloneImg}
            projectUrl='/miclone'
            tech='React JS'
          />
          <ProjectItem
            title='Lyriclious Website'
            backgroundImg={lyricliousImg}
            projectUrl='/lyriclious'
            tech='PHP'

          />
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
