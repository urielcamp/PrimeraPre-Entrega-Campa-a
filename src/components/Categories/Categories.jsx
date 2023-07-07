import React from 'react'
import './Categories.css'
import MenuCategoriesGenre from './MenuCategories'
import MenuCategoriesState from "./MenuCategoriesState"

const Categories = () => {
    return (
        <article className='articleCateg'>
            <h2>Categorias</h2>
            <ul className='ulCateg'>
                <li className='liCateg'>
                    <MenuCategoriesState />
                </li>
                <li className='liCateg'>
                    <MenuCategoriesGenre />
                </li>
            </ul>
        </article>
    )
}

export default Categories