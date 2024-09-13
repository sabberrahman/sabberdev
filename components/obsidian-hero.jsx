import Image from 'next/image'
import { Twitter, Github, Mail, ExternalLink, DonutIcon, Dot, MessageCircleDashed, Workflow, CloudLightningIcon, BellDot, LucideDot, Linkedin, LucideGithub, Code2Icon, LucideLinkedin, MailPlus } from 'lucide-react'
import Projects from './shared/Projects'
import Blog from './shared/Blog'
import myimage from "../components/photo/ppfppp.png"
import Link from 'next/link'
import X from '@/public/icon/x'
import Social from './shared/Social'
import Infomation from './shared/Infomation'


export default function Hero() {
 

  return (
    <div className="min-h-screen text-white p-8 ">
      
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Profile Section */}
        <div className="flex items-center space-x-4">
          <Image
            src={myimage}
            alt="sabber"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold">Sabber Rahman</h1>
            <p className="text-gray-400">@sabberrahman</p>
          </div>
        </div>

          {/* Introduction */}
        <Infomation/>

          {/* Social Links */}
          <Social/>
        {/* front & back end */}
          <Projects/>
      
          <Blog/>
        </div>
    </div>
  )
}


