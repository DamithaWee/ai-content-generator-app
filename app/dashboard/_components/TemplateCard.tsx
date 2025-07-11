import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Image from 'next/image'
import Link from 'next/link'

const TemplateCard = (template:TEMPLATE) => {
  return (
    <Link href={`/dashboard/content/${template.slug}`}>
      <div className='p-5 shadow-md rounded-md bg-white border flex flex-col gap-3 cursor-pointer h-[300px]
      hover:scale-105 transition-all
      '>
          <Image src={template.icon} alt='icon' width={50} height={50}/>
          <h2 className='font-medium text-lg'>{template.name}</h2>
          <p className='text-gray-500 line-clamp-3'>{template.desc}</p>
      </div>
    </Link>
  )
}

export default TemplateCard