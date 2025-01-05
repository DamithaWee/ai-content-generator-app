'use client'

import React, { useEffect, useRef } from "react";
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface props{
    aiOutput:string
}

function OutputSection({aiOutput}: props){

    const editRef: any = useRef('');


    useEffect(() => {
        const editorInstance = editRef.current.getInstance();
        if (editorInstance) {
        editorInstance.setMarkdown(aiOutput || "");
        }
    }, [aiOutput&&editRef]);

    return(
        <div className="bg-white shadow-md border rounded-lg">

            <div className="flex justify-between items-center p-5">
                <h2 className="font-medium text-lg">
                    Your Result
                </h2>
                <Button className="flex gap-2"><Copy className="w-4 h-4"/> Copy</Button>
            </div>

            <Editor
                ref={editRef}
                initialValue="Your Result will appear here!"
                initialEditType="wysiwyg"
                height="600px"
                useCommandShortcut={true}
            />
        </div>
    )
}

export default  OutputSection
