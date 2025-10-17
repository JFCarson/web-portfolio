export interface ParagraphItem {
    type: 'p'
    content: string
}

export interface ListItem {
    type: 'ul'
    content: string[]
}

export type DescriptionItem = ParagraphItem | ListItem

export interface Role {
    place: string
    title: string
    start: string
    end?: string
    description?: DescriptionItem[]
    link?: string
}


const educationHistory: Role[] = [
    {
        place: 'University of Salford',
        title: '(BSc Hons) Professional Sound and Video Technology',
        start: 'September 2016',
        end: 'September 2019',
        description: [
            {
                type: 'p',
                content:
                    "Graduated with First Class Honours. Noteworthy modules include:"
            },
            {
                type: 'ul',
                content: [
                    'Web Content Creation - Focusing on Visual Elements of Web Design.',
                    'Web Technologies - Focusing on Back-End Design and how the Internet is Used Productively in Modern Industries.'
                ],
            },
            {
                type: 'p',
                content:
                    "Other modules on this course were related to film and audio production, as well as the science behind these subjects."
            }
        ],
        link: 'https://www.salford.ac.uk'
    },
    {
        place: 'Congleton Academy Sixth Form College',
        title: 'A Levels & Extended BTEC',
        start: 'September 2014',
        end: 'September 2016',
        description: [
            {
                type: 'p',
                content:
                    "Grades are as follows:"
            },
            {
                type: 'ul',
                content: [
                    'Music (BTEC Level 3 Extended Certificate): Triple Distinction*',
                    'Media Studies A Level: C',
                    'English Language A Level: C',
                    'History A Level: D'
                ],
            },
        ],
        link: 'https://congletonhigh.com'
    },
    {
        place: 'Congleton High School',
        title: 'GCSEs & BTEC',
        start: 'September 2009',
        end: 'September 2014',
        description: [
            {
                type: 'p',
                content:
                    "11 GCSEs & 2 BTECs, all at C/PASS or above. Certifications available upon request."
            }
        ],
        link: 'https://congletonhigh.com'
    },
    {
        place: 'Misc. Certifications',
        start: 'September 2014',
        description: [
            {
                type: 'ul',
                content: [
                    'Practitioner Certification, AWS',
                    'Qualification in Information and Communication Technology, Edexcel',
                    'NCS Certificate'
                ]
            }
        ]
    }
]

export default educationHistory
