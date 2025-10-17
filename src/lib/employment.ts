export interface DescriptionItem {
    type: 'p' | 'ul'
    content: string | string[]
}


export interface Role {
    place: string
    title: string
    start: string
    end?: string
    description?: DescriptionItem[]
    link?: string
}

const employmentHistory: Role[] = [
    {
        place: 'Cheshire Datasystems Ltd.',
        title: 'Software Engineer in Digital Delivery',
        start: 'July 2019',
        description: [
            {
                type: 'p',
                content:
                    "Cheshire Datasystems Ltd. (CDL) is the leading software house in its field, providing a plethora of both architectural and retail-oriented solutions to over 70% of the UK's insurance industry. At CDL, my daily duties included:"
            },
            {
                type: 'ul',
                content: [
                    'Feature driven development of both retail web applications and payment microservices.',
                    'Incident support within a service level agreement.',
                    'Contributions to the planning and enactment of both Agile and test-driven development practices within my squad.'
                ],
            },
        ],
        link: 'https://www.cdl.co.uk',
    },
    {
        place: 'Child Guidance UK Ltd.',
        title: 'IT Technician & Web Developer',
        start: 'August 2016',
        end: 'December 2017',
        description: [
            {
                type: 'p',
                content:
                    "Child Guidance UK Ltd. was a small telesales company, in which I was employed as an IT Technician to aid in the maintenance of the offices' work machines. In addition to this duty, I also provided the following in-house software solutions:"
            },
            {
                type: 'ul',
                content: [
                    'A CRM service which was used in the development of various marketing strategies.',
                    'An online portal for staff, including a task listing service akin to the likes of Jira.',
                    "Maintenance of the company's static marketing website."
                ],
            },
        ],
    }
]

export default employmentHistory
