import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import ScrollMarquee from './components/marquee/ScrollMarquee'
import ExperienceStone from './experience-stone/ExperienceStone'
import Sky from './experience-stone/Sky'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
    {/* <ScrollMarquee/> */}

    <Canvas
        shadows
        camera={ {
            fov: 60,
            near: 0.1,
            far: 300,
            position: [ - 5, 3, 6 ]
        } }
        >
            <Sky/>
        <ExperienceStone />
    </Canvas>
        
            </>
)