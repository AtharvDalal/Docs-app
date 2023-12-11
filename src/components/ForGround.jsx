/* eslint-disable no-unused-vars */
import React, { useRef } from 'react'
import Card from './Card'

const ForGround = () => {

    const ref = useRef(null)
    const data = [
        {
            description: 'Project Updates Review progress on Project Alpha Discuss any blockers or challenges Upcoming Deadlines',

            filesize: '.9mb',
            close: true,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "blue"
            }
        },
        {
            description: 'Next Steps-  Schedule a follow- up meeting to track progress Circulate the meeting minutes after the discussion',

           
            
            filesize: '.3mb',
        close: false,
        tag: {
            isOpen: true,
            tagTitle: "Download Now",
            tagColor: "green"
        }
        },
    {
        description: 'Project Updates Review progress on Project Alpha Discuss any blockers or challenges Upcoming Deadlines',
        filesize:'.4mb',
        close: false,
        tag: { isOpen: true,
            tagTitle: "Download Now",
            tagColor: "green"
             }
    },
    {
        description: 'Next Steps-  Schedule a follow- up meeting to track progress Circulate the meeting minutes after the discussion',
        filesize:'.6mb',
        close: false,
        tag: { isOpen: true,
            tagTitle: "Download Now",
            tagColor: "blue"
             }
    },
    {
        description:'Ensure everyone is prepared with their updates.Share relevant documents before the meeting. The meeting will be held in the conference room on the 5th floor.',
         
        
        filesize:'.5mb',
        close: true,
        tag: { isOpen: false,
            tagTitle: "Download Now",
            tagColor: "blue"
             }
    }
    ]

return (
    <div ref={ref} className=" p-5 flex flex-wrap gap-10 fixed z-[3] top-0 left-0 bg-slate-300/20  w-full h-full">

        {
            data.map((item, index) => (
                <Card data={item} refernce={ref} />
            ))
        }

    </div>
)
}

export default ForGround