import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Shubhangi | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Shubhangi Sonker</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/shubhangisonker/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/shubhangi2318'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Full Stack Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Bootstrap
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Vue
            <span className='px-2'>|</span>Vuetify
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> RESTAPI
            <span className='px-2'>|</span>Node
          </p>
          <p className='py-2'>
            <span className='font-bold'>Hostinger</span>
            <span className='px-2'>|</span>Netlify
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            SHESHI.AI
            </span>
            <span className='px-2'>|</span>BANGLORE, INDIA
          </p>
          <p className='py-1 italic'>SDE-I(2022-Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive responsive UI layouts with
              understanding of HTML, CSS, JavaScript. and Vue
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked on creating and implementing APIs and there operations in various 
              fragments of product.
            </li>
         
          </ul>
        </div>
        

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            The NorthCap University
            </span>
            <span className='px-2'>|</span>GURGAON, INDIA
          </p>
          <p className='py-1 italic'>Web Developer(2021-2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive responsive UI layouts with
              understanding of HTML, CSS, JavaScript, Wordpress and Php.
            </li>
            <li>
              Worked on multiple products and micro-services like SPA - student
              placement portal and photo gallery etc.
            </li>
            <li>
              Worked on creating and implementing APIs and there operations in various 
              fragments of product.
            </li>
            <li>
              Plugin configration , SEO optimization and bug fixing .
            </li>
            
         
          </ul>
        </div>
        

     

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>LYRICLIOUS </span>
            <span className='px-2'>|</span>INDIA
          </p>
          <p className='py-1 italic'>Teaching Web development (2020 – Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              I have been teaching various languages and frameworks like C, Python
              and ofcourse full stack web development including front-end and backend both.
            </li>
            <li>
              trained more than 500+ students mostly UG and PG students and also 
              taught various stacks like Php, MERN and Vue also.
            </li>
          
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
