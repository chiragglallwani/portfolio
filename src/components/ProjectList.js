import React from 'react'
import '../css/PortfolioList.scss'
export default function ProjectList({title, active, setSelected, id}) {
    return (
        <li className={active ? "portfolioList active " : "protfolioList"} onClick={() => setSelected(id)}>
            {title}
        </li>
    )
}
