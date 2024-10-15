import React from 'react'

import data from '../../assets/data/memesData'

export default function Meme() {

    /**
     * Challenge: Update our state to save the meme-related
     * data as an object called `meme`. It should have the
     * following 3 properties:
     * topText, bottomText, randomImage.
     * 
     * The 2 text states can default to empty strings for now,
     * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
     * 
     * Next, create a new state variable called `allMemeImages`
     * which will default to `memesData`, which we imported above
     * 
     * Lastly, update the `getMemeImage` function and the markup 
     * to reflect our newly reformed state object and array in the
     * correct way.
     */
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(data.data.memes)
    function getMemeImage() {
        const image = allMemeImages[Math.floor(Math.random() * allMemeImages.length)]
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage: image.url
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className='form'>
                <div>
                    <label htmlFor=''>Top Text
                        <input 
                            type="text" 
                            placeholder="Shut up"
                            value={meme.topText}
                            onChange={handleChange}
                            name='topText'
                        />
                    </label>
                </div>

                <div>
                    <label>Bottom Text
                        <input 
                            type="text" 
                            placeholder="And take my money"
                            value={meme.bottomText}
                            onChange={handleChange}
                            name='bottomText'
                        />
                    </label>
                </div>
                <button onClick={getMemeImage} className='form-button'>Get a new meme image 🖼</button>
            </div>

            <div className='meme-parent'>
                <div className="meme">
                    <img src={meme.randomImage} className="meme-image" />
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
            </div>
            
        </main>
    )
}