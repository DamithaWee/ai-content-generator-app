"use client";

import React, { useState } from 'react';
import FormSection from "@/app/dashboard/content/_components/FormSection";
import OutputSection from "@/app/dashboard/content/_components/OutputSection";
import { TEMPLATE } from "@/app/dashboard/_components/TemplateListSection";
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { webSearch, chatSession } from '@/utils/AiModel';

interface PROPS {
  selectedTemplate?: TEMPLATE;
}

function createPrompt(userQuery: string, formattedResults: string, taskInstruction: string): string {
    return `
    SYSTEM: You are a content generating bot for various situations 


    Form Data:
    ${JSON.stringify(userQuery)}

    Information/context Found:
    ${formattedResults}

    Task:
    ${taskInstruction}

    `;
}


const CreateNewContent = ({ selectedTemplate }: PROPS) => {

    const [loading, setLoading] = useState(false)
    const [aiOutput, setAiOutput] = useState<string>('')

    const GenerateAiContent = async (formData:any) =>{
        setLoading(true)
        const selectedPrompt = JSON.stringify(selectedTemplate?.aiPrompt)
        
        let context = null

        const formDataFirstElement = Object.keys(formData)[0]
        if(formDataFirstElement == 'niche') {
            const niche = formData[Object.keys(formData)[0]]
            const searchResults = await webSearch(niche);
            context = searchResults.slice(0, 7)
                        .map((item: { title: string; snippet: string }) => `${item.title}: ${item.snippet}`)
                        .join("\n")
        }
        else{
            context = "There is no context for this prompt"
        }

        const finalAiPrompt = createPrompt(formData, context, selectedPrompt)

        const result = await chatSession.sendMessage(finalAiPrompt)

        console.log(result.response.candidates[0].content.parts[0].text)
        
        setAiOutput(result.response.candidates[0].content.parts[0].text)
        setLoading(false)
    }

    


  return (
    <div className='p-10'>
        <div>
            <Link href={'/dashboard'}>
                <Button><ArrowLeft/>Back</Button>
            </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10">
            {/* Form Section */}
            <FormSection
                loading= {loading}
                selectedTemplate={selectedTemplate}
                userFormInput={(v: any) => GenerateAiContent(v)}
            />

            {/* Output Section */}
            <div className="col-span-2">
                <OutputSection aiOutput={aiOutput}/>
            </div>
        </div>
    </div>
  );
};

export default CreateNewContent;
