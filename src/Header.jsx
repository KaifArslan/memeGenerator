import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="image.png" 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">by Kaif Arslan</h4>
        </header>
    )
}