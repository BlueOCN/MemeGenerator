import memeImgExe from '../assets/meme_exe.png'

function Generator(){
    return (
        <div className="memes">
            <input className="memes--topText" type="text" placeholder="Shut up"/>
            <input className="memes--bottomText" type="text" placeholder="And take my money"/>
            <button className="memes--button">Get a new meme image  🖼</button>
            <img className="memes--img" src={memeImgExe} alt="Example" />
        </div>
    )
}

export default Generator