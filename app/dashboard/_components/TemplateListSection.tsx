import Templates from '@/app/(data)/Templates'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE {
  name:string,
  desc:string,
  icon:string,
  category:string,
  slug:string,
  aiPrompt:string,
  form?:FORM[]
}

export interface FORM{
  label:string,
  field:string,
  name:string,
  required?:boolean
}

const TemplateListSection = ({userSearchInput}:any) => {

  const [templateList, setTemplateList] = useState(Templates)

  useEffect(()=>{
    if(userSearchInput){
      const filterData = Templates.filter(template=>
        template.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filterData);
    }
    else{
      setTemplateList(Templates)
    }
  },[userSearchInput])

  return (
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 p-10'>
      {templateList.map((template, index)=> (
        <TemplateCard key={template.slug} {...template}/>
      ))}
    </div>
  )
}

export default TemplateListSection