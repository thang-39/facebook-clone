import React from 'react';
import Image from 'next/image';
import { ImUsers } from "react-icons/im"; 
import SidebarItem from './SidebarItem';
import { MdGroups, MdOutlineExpandMore, MdOutlineOndemandVideo } from 'react-icons/md';
import { AiOutlineShop } from 'react-icons/ai';
import { BsStopwatch } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className='hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]'>
      <div className='flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer'>
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <p className='hidden sm:inline-flex font-medium'>Minh Thắng</p>
      </div>
      
      <SidebarItem Icon={ImUsers} value="Friends"/>
      <SidebarItem Icon={MdGroups} value="Groups"/>
      <SidebarItem Icon={AiOutlineShop} value="Marketplace"/>
      <SidebarItem Icon={MdOutlineOndemandVideo} value="Live"/>
      <SidebarItem Icon={BsStopwatch} value="Memories"/>
      <SidebarItem Icon={MdOutlineExpandMore} value="See More"/>

      
    </div>
  );
}

export default Sidebar;