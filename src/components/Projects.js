import React, {useState, useEffect} from 'react'
import '../css/project.scss'
import ProjectList from './ProjectList';
import { BegginerProjects, IntermediateProjects } from '../data';
export default function Projects() {
    const [selected, setSelected] = useState('beginner');
    const [data, setData] = useState([]);
    const list = [
        {
            id: 'beginner',
            title: 'Beginner',
        },
        {
            id: 'intermediate',
            title: 'Intermediate',
        }
    ];

    useEffect(() => {
        switch (selected) {
            case 'beginner':
                setData(BegginerProjects)
                break;
            case 'intermediate':
                setData(IntermediateProjects);
                break;
            default:
                break;
        }
    }, [selected])
    return (
        <div className="projects" id="projects">
            <h1>Portfolio</h1>
            <ul>
                {list.map((item) => (
                    <ProjectList key={item.id}
                     title={item.title}
                     active={selected === item.id}
                     setSelected={setSelected}
                     id={item.id}   />
                ))}
            </ul>
            <div className="container">
                {
                    data.map((projects) => (
                            <a key={projects.id} rel="noreferrer" target="_blank" href={projects.link}><div className="item">
                            <img src={projects.img} alt={projects.title}/>
                            <h3>{projects.title}</h3>
                            </div></a>
                    ))
                }
            </div>
        </div>
    )
}
