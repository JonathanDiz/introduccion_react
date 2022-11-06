import React from 'react'
import Cat1 from '../assets/img/cat-pose1.jpg'
import Cat2 from '../assets/img/cat-pose2.jpg'
import Cat3 from '../assets/img/cat-pose3.jpg'

function Mascota(){
    return (
      <section className='contenedor'>
        <div className='contenedor__mascota'>
            <div className='contenedor__titulo'>
              <h1>"Mi mascota"</h1>
            <div className='contenedor__imagen'>
              <img src={Cat1} alt="mi gato posando en fondo blanco" />
              <img src={Cat2} alt="mi gato hacia arriba" />
              <img src={Cat3} alt="mi gato mirando el cielo" />
            </div>
            <div className='contenedor__parrafo'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed, velit!</p>
            </div>
            </div>
        </div>
      </section>
    )
}

export default Mascota