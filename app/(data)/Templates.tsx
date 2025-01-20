export default[
    {
        name: 'Blog Title',
        desc: 'An AI tool that generate blog title depends on your infomation',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/8292/8292471.png',
        aiPrompt: 'Give me 5 blog topic idea in bullet wise only based on give niche, information & outline topic for medium',
        slug: 'generate-blog-title',
        form:[
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
                required: true
            }
        ]
    },
    {
        name: 'Blog Content',
        desc: 'An AI tool that serves as your personal blog post title writer, generating catchy and viral-worthy titles in your chosen language.',
        category: 'blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4905/4905454.png',
        slug: 'blog-content-generation',
        aiPrompt: 'Generate Blog Content based on topic and outline ',
        form: [
            {
                label: 'Enter your blog topic',
                field: 'input',
                name: 'topic',
                required:true
            },
            {
                label: 'Enter blog Outline here',
                field: 'textarea',
                name: 'outline'
            }
        ]
    },
    {
        name: 'Product Description Generator',
        desc: 'An AI tool that generates compelling product descriptions for your e-commerce listings.',
        category: 'E-Commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/4436/4436481.png',
        aiPrompt: 'Write a professional and engaging product description based on the given product name and key features. Present the result in bullet points, followed by a short paragraph summary.',
        slug: 'generate-product-description',
        form: [
            {
                label: 'Enter product name',
                field: 'input',
                name: 'productName',
                required: true
            },
            {
                label: 'Enter key features',
                field: 'textarea',
                name: 'features',
                required: true
            },
            {
                label: 'Target audience',
                field: 'input',
                name: 'audience',
                required: false
            }
        ]
    },
    {
        name: 'Social Media Caption Writer',
        desc: 'An AI tool that creates engaging social media captions tailored to your platform and post context.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/1791/1791064.png',
        aiPrompt: 'Generate 3 social media captions suitable for the given platform, tone, and content type. Ensure one caption is concise, one is creative, and one includes a call-to-action.',
        slug: 'social-media-caption',
        form: [
            {
                label: 'Enter the platform (e.g., Instagram, Twitter)',
                field: 'input',
                name: 'platform',
                required: true
            },
            {
                label: 'Describe your post content',
                field: 'textarea',
                name: 'contentDescription',
                required: true
            },
            {
                label: 'Preferred tone (e.g., casual, professional, funny)',
                field: 'input',
                name: 'tone',
                required: false
            }
        ]
    },
        {
        name: 'Article Writer',
        desc: 'An AI tool that helps you write detailed articles based on your topic and preferred structure.',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3062/3062634.png',
        aiPrompt: 'Write a detailed article based on the given topic and structure. Ensure the article is well-organized and divided into sections with appropriate headings.',
        slug: 'generate-article',
        form: [
            {
                label: 'Enter your article topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter the structure or key points',
                field: 'textarea',
                name: 'structure',
                required: true
            },
            {
                label: 'Preferred word count (optional)',
                field: 'input',
                name: 'wordCount',
                required: false
            }
        ]
    },
    {
        name: 'Essay Writer',
        desc: 'An AI tool that generates essays based on your topic and requirements.',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3458/3458513.png',
        aiPrompt: 'Write an essay based on the provided topic and requirements. Ensure the essay includes an introduction, body paragraphs, and a conclusion.',
        slug: 'generate-essay',
        form: [
            {
                label: 'Enter your essay topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Specify the tone (e.g., formal, persuasive, narrative)',
                field: 'input',
                name: 'tone',
                required: false
            },
            {
                label: 'Preferred length (e.g., short, medium, long)',
                field: 'select',
                name: 'length',
                options: ['Short', 'Medium', 'Long'],
                required: false
            }
        ]
    },
    {
        name: 'Report Generator',
        desc: 'An AI tool that creates detailed reports based on your input and purpose.',
        category: 'Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/3903/3903152.png',
        aiPrompt: 'Generate a professional report based on the given topic and key points. Include an executive summary, main sections, and a conclusion.',
        slug: 'generate-report',
        form: [
            {
                label: 'Enter the report topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Enter key points or details for the report',
                field: 'textarea',
                name: 'keyPoints',
                required: true
            },
            {
                label: 'Purpose of the report (optional)',
                field: 'input',
                name: 'purpose',
                required: false
            }
        ]
    },
    {
        name: 'Story Writer',
        desc: 'An AI tool that helps you craft short stories based on your prompts.',
        category: 'Creative Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/811/811622.png',
        aiPrompt: 'Write a short story based on the provided plot idea, characters, and preferred tone. Ensure the story has a clear beginning, middle, and end.',
        slug: 'generate-story',
        form: [
            {
                label: 'Enter your story idea or plot',
                field: 'textarea',
                name: 'plot',
                required: true
            },
            {
                label: 'Describe your main character(s)',
                field: 'textarea',
                name: 'characters',
                required: false
            },
            {
                label: 'Preferred tone (e.g., suspenseful, humorous, inspirational)',
                field: 'input',
                name: 'tone',
                required: false
            }
        ]
    }

]
