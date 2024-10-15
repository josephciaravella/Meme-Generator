import React from 'react'

import troll from '../../assets/images/troll-face.png'


export default function Header() {
    return (
        <header className='header'>
            <div className='header-logo'>
                <img className='header-troll' src={troll} alt="" />
                <h3 className='header-title'>Meme Generator</h3>
            </div>
            <h4 className='header-desc'>React Project 3</h4>
        </header>
    )
}