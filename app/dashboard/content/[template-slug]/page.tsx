import React from 'react';
import { TEMPLATE } from '@/app/dashboard/_components/TemplateListSection';
import Templates from '@/app/(data)/Templates';
import CreateNewContent from '../_components/CreateNewContent';

interface PROPS {
  params: {
    'template-slug': string;
  };
}

const Page = async ({ params }: { params: Promise<PROPS['params']> }) => {
  const resolvedParams = await params; 
  const templateSlug = resolvedParams['template-slug']; 

  const selectedTemplate: TEMPLATE | undefined = Templates?.find(
    (item) => item.slug === templateSlug
  );

  return <CreateNewContent selectedTemplate={selectedTemplate} />;
};

export default Page;
