import React from 'react'

export default function Meme() {

    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])

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