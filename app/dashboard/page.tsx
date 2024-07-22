"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

const Dashboard = () => {
  const [userSearchInput,setUserSearchInput] = useState<string>();

  return (
    <div>
      {/* Seccion de Busqueda */}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>
      {/* Seccion de template */}
      <TemplateListSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard