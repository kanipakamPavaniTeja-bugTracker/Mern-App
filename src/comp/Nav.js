import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct'

const Nav = () => {
  let obj=useContext(Ct)
  return (
   <nav>
    <div className="logo-container">
        <img src="https://media-hosting.imagekit.io//b746b891eb324e06/Screenshot%202025-03-08%20231512.png?Expires=1836063939&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=LgqM4zK7CdoYGRxTvdDdRFmZAdR6oIc2-qnVaH1gORZ47UpcZDroQqjBx-Ce4RLFefVKC8y~NF2qSEzY2RRmrc07OHHhA-4z9hyhA2~EHUrpgtoaShAxSJ5mv8iDsYA0KXpNqNPtTt5fC1pV8EGpKmafb6yuElwLG5u8C2fy7W88RN3fcObksg3eI3S2m4KdjCMc7SYuulSx~TAEvwJa54M5OnFwmFEjee-ynKL5weZrOYv087HqkTV~kcR2gORy1frP~lH48e5T4hADcAOPz3OGnoOaZcNR1wddppIcKPjZdz4gD9omly-vQkY-BhD9zTfHgMjV12dR8fextPq~SA__" alt="Project Logo" className="logo" style={{height:"70px",width:"100px"}}/>
      </div>
    <Link to="/">Home</Link>
   {obj.state.token==""&& <Link to="/login">Login</Link>}
   {obj.state.token==""&&<Link to="/reg">Register</Link>}
   {obj.state.token!=""&& <Link to="/addpost">AddPost</Link>}
    {obj.state.token!=""&&obj.state.role=="admin"&& <Link to="/admin">Admin</Link>}
    {obj.state.token!=""&& <Link to="/logout">Logout</Link>}
    {obj.state.token!=""&&<a>{obj.state.name}</a>}
   </nav>
  )
}

export default Nav