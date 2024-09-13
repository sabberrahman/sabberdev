import { LucideDot } from 'lucide-react'
import React from 'react'
import Text from './Text'

function Infomation() {
  return (
    <div>
         <div className="space-y-4">
          <h2 className="text-xl font-bold">I make <span className="text-green-600"><Text/></span>s</h2>
          <p className="text-gray-300 text-md">
           Hi, I'm Shohanur rahman sabbir. A self-taught, frontend-focused full-stack developer based in Dhaka, Bangladesh. Crafting Modern Web Application with my রং চা and Code 
          </p>

          <p className='text-sm -mt-2'>Currently im exploring <span className='text-green-600 font-bold italic underline underline-offset-1'>Next.js</span>, <span className='text-green-600 font-bold italic underline underline-offset-1'>Nest.js</span> and <span className='text-green-600 font-semibold italic '>SQL</span> and some other interesting tools</p>
          <p className='text-xs italic text-muted-foreground'>Ping me for Custom Projects</p>
          
          <p className="text-green-500 flex gap-2 opacity-90 text-sm"><LucideDot className='animate-ping'/> Available for new opportunities</p>
        </div>
    </div>
  )
}

export default Infomation