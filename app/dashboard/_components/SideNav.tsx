"use client"
import { FileClock, Home, Settings, WalletCards } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {

    const MenuList=[
        {
            name:'Home',
            icon:Home,
            path:'/dashboard'
        },
        {
            name:'Historial',
            icon:FileClock,
            path:'/dashboard/history'
        },
        {
            name:'Facturación',
            icon:WalletCards,
            path:'/dashboard/billing'
        },
        {
            name:'Ajustes',
            icon:Settings,
            path:'/dashboard/setting'
        },
    ]

    const path = usePathname();
    useEffect(()=>{

    },[])

  return (
    <div className='h-screen p-5 shadow-sm border'>
        <div className='flex justify-center'>
            <Image src={'/logo.svg'} alt='logo' width={120} height={100}/>
        </div>
        <hr className='my-6 border'/>
        <div className='mt-10'>
            {MenuList.map((menu,index)=>(
                <div className={`flex gap-2 mb-2 p-3
                hover:bg-primary hover:text-white rounded-lg
                cursor-pointer transition duration-300 ease-in-out
                ${path==menu.path&&'bg-primary text-white'}
                `}>
                    <menu.icon  className='h-7 w-7'/>
                    <h2 className='text-lg'>{menu.name}</h2>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SideNav