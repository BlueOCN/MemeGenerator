import trollIcon from '../assets/trollface.png'

function Header() {
    return (
        <div className="header">
            <img
                className="header--logo"
                src={trollIcon} 
                alt="Troll Face" 
            />
            <h3 className="header--title">Meme Generator</h3>
            <h5 className="header--subtitle">React Course - Project 3</h5>
        </div>
    )
}

export default Header