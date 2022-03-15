import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className="header">
        {/* isim */}
        <div className="header-name">
            <h1>ALPEREN KAPUSUZ</h1>
        </div>
        {/* meslek */}
        <div className="header-job">
            <h1>Bilgisayar Mühendisliği</h1>
        </div>
    </div>
  )
}

export default Header