import React from 'react';

const LinkBar = () => {

    const links = [
        {
            id: 1,
            title: "Github",
            icon: 'fab fa-github',
            url: 'https://github.com/kawsar334',
        },
        {
            id: 2,
            title: "Facebook",
            icon: 'fab fa-facebook',
            url: 'https://www.facebook.com/profile.php?id=100076935281732',
        },
        {
            id: 3,
            title: "LinkedIn",
            icon: 'fab fa-linkedin',
            url: 'https://www.linkedin.com/in/kawsar-firoz-a140b9237/',
        },
    ]
    return (
        <div className=''>
            <ul className='flex justify-center items-center gap-2 '>
               {links.map((item)=>( <li>
                   <a href={item?.url} className='border rounded-full transition-all  ease-in duration-300 hover:bg-transparent hover:text-blue hover:border-blue bg-blue p- w-10 h-10 flex justify-center items-center ' target="_blank" rel="noopener noreferrer">
                       <i className={`${item?.icon}  text-xl`}></i> <span className='hidden'>{item.title}</span>
                    </a>
                </li>
               ))    
            }
            </ul>
        </div>
    );
};

export default LinkBar;
