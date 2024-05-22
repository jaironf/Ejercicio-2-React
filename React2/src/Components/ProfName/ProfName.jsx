import React from 'react'
import { useState, useEffect } from 'react'
import './ProfName.css'

const ProfName = () => {
    const Teacher = [{name: 'Sofía'}, {name: 'Daniel'}, {name: 'Reyes'}, {name: 'Yolanda'}]
const [professorName, setProfessorName ] = useState('Sofía');

  return (
    <div className='ProfNameDiv'>
        <h1>Teacher Name: <span className='first'>{professorName}</span></h1>
        <ul>
           {Teacher.map((teacher, i)=>(
            <li key={i} onClick={()=> setProfessorName(teacher.name)}><button>{teacher.name}</button></li>
           ))}
           
        </ul>

    </div>
  )
}

export default ProfName