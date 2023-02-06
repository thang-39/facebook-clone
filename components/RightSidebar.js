import React from 'react'
import { RiVideoAddFill } from 'react-icons/ri'
import { BiSearch } from 'react-icons/bi'
import { CgMoreAlt } from 'react-icons/cg'
import Contacts from './Contacts'
const RightSidebar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex itmes-center text-gray-500'>
            <p className='flex text-lg font-semibold flex-grow'>Contacts</p>
            <div className='flex pace-x-1 px-2'>
                <div className='rounded-full p-2 hover:bg-gray-200 hover:cursor-pointer'>
                    <RiVideoAddFill />
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 hover:cursor-pointer'>
                    <BiSearch />
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 hover:cursor-pointer'>
                    <CgMoreAlt />
                </div>
            </div>
        </div>
        <Contacts 
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          name="Minh Thang"
          status="Online"
        />
        <Contacts 
          src="https://images.pexels.com/photos/7180886/pexels-photo-7180886.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" 
          name="Mon Tran"
          status="Online"
        />
        <Contacts 
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          name="Thanh Truc"
          status="Online"
        />
        <Contacts 
          src="https://images.pexels.com/photos/7180878/pexels-photo-7180878.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" 
          name="Hoanh Hoanh"
          status="Offline"
        />
    </div>
  )
}

export default RightSidebar