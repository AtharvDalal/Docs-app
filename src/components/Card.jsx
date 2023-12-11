import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion';


const Card = ({data, refernce}) => {
  return (
    <motion.div drag dragConstraints={refernce} whileDrag={{scale:1.1}} dragTransition={{bounceStiffness: 600, bounceDamping: 10}} className=" flex-shrink-0 relative w-60 h-72 rounded-[40px] p-10 bg-zinc-900/90 text-white overflow-hidden">
        <FaRegFileAlt />
        <p className='text-sm mt-5 leading-tight'> {data.description} </p>
        <div className="footer absolute bottom-0 w-full left-0">
            <div className='flex items-center justify-between py-3 px-8  mb-1 '>
                <h5 className='text-white/75'>{data.filesize}</h5>
                {data.close ? <IoClose /> : <FaDownload /> }
                
            </div>

             {data.tag.isOpen ? (<div className={`tag w-full py-4 ${data.tag.tagColor === "blue"? "bg-blue-600": "bg-green-600" } flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'> {data.tag.tagTitle}</h3>
            </div>
) :null }
            
        </div>
    </motion.div>
  )
}

export default Card 