"use client";

import React, { useState } from 'react';
import { TEMPLATE } from '../../_components/TemplateListSection';
import Image from "next/image";
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { LoaderIcon } from 'lucide-react';

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any,
  loading: boolean
}

function FormSection({ selectedTemplate, userFormInput, loading}: PROPS) {
  const [formData, setFormData] = useState<any>({}); // Initialize with an empty object

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    userFormInput(formData)
  };

  return (
    <div className="p-5 shadow-md border rounded-lg bg-white">
      {/* @ts-ignore */}
      <Image alt="icon" src={selectedTemplate?.icon || ''} width={70} height={70} />
      <h2 className="font-bold text-2xl mb-2 text-primary">{selectedTemplate?.name}</h2>

      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-5" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={item.name || index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field === 'input' ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field === 'textarea' ? (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button 
        type="submit" 
        className="w-full py-6"
        disabled={loading}
        >
          {loading && <LoaderIcon className='animate-spin'/> }
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
