import React from 'react'
import { OrbitingLogos } from '../plugins/3d/ObitingLogos'

function Frameworks() {
  return (
    <div className='relative flex h-[15rem] w-full flex-col justify-center items-center overflow-hidden'>
      
      {/* Frontend */}
      <OrbitingLogos>
        <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" />
        <Icon src="https://cdn.worldvectorlogo.com/logos/next-js.svg" />
        <Icon src="https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2415%2FPNG%2F512%2Fangularjs_plain_logo_icon_146647.png&id=146647&pack_or_individual=pack" />
        <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Android_robot.svg/1745px-Android_robot.svg.png" />
        <Icon src="https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25082439/reactnative-inner.svg" />
        <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flutter_logo.svg/1024px-Flutter_logo.svg.png" />
        <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/960px-Tensorflow_logo.svg.png" />
        <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Three.js_Icon.svg/2048px-Three.js_Icon.svg.png" />
        <Icon src="https://vite.dev/logo.svg" />
      </OrbitingLogos>

      {/* Backend */}
      <OrbitingLogos radius={100} reverse>
        <Icon src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" />
        <Icon src="https://cdn.worldvectorlogo.com/logos/expressjs.svg" />
        <Icon src="https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png" />
        <Icon src="https://cdn.worldvectorlogo.com/logos/fastapi.svg" />
        <Icon src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/960px-PHP-logo.svg.png" />
        <Icon src="https://cdn.freebiesupply.com/logos/large/2x/spring-3-logo-png-transparent.png" />
        
        {/* <Icon src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.png" /> */}
      </OrbitingLogos>
      
    </div>
  )
}

export default Frameworks


const Icon = ({ src }) => (
  <img
    src={src}
    alt="tech icon"
    className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 
               duration-200 rounded-sm hover:scale-110"
    loading="lazy"
  />
)
