import React from 'react'
import { FaLinkedin, FaSquarePhone, FaGithub } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const SideBar = () => {
  return (
<>       <div className="cv-contact">
            <p>
              <MdEmail /> <a href="mailto:carolina.cordoba@medieinstitutet.se">carolina.cordoba@medieinstitutet.se</a>
            </p>
            <p>
            <FaLinkedin />
            <a href="https://www.linkedin.com/in/carolina-cordoba-455ab9166/">LinkedIn</a>
            </p>
            <p>
              <FaSquarePhone /> <a href="tel:+46738549285">+46 73 854 92 85</a> 
            </p>
            <p>
              <FaGithub />
              <a href="https://github.com/carolinacordoba">Github</a>
            </p>
          </div>
</>  )
}

export default SideBar
