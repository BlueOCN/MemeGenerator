import { useState, useEffect} from 'react'
// import memeImgExe from '../assets/meme_exe.png'

function Generator(){

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImg: "https://i.imgflip.com/1bij.jpg",
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(resData => setAllMemes(resData.data.memes))
    }, [])

    function getNewMeme(){
        const randInt = Math.floor(Math.random() * allMemes.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImg: allMemes[randInt].url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className="memes">
            <input 
                className="memes--topText" 
                type="text" 
                placeholder="Shut up"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
            />
            <input 
                className="memes--bottomText" 
                type="text" 
                placeholder="And take my money"
                name='bottomText'
                value={meme.bottomText}
                onChange={handleChange}
            />
            <button
                className="memes--button"
                onClick={getNewMeme}
                >Get a new meme image  🖼
            </button>
            <img 
                className="memes--img" 
                src={meme.randomImg} 
                alt="Example" 
            />
        </div>
    )
}

export default Generator