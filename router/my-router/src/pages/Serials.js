import React from 'react'
import { Link } from 'react-router-dom'

const Serials = () => {
  return <section>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Filmy</Link></li>
        <li>Serialy</li>
    </ul>
  </section>
}

export default Serials