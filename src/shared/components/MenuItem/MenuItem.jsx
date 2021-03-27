const MenuItem = ({titulo, ruta}) =>{

    return (
        <li  className="nav-item">
            <a  className="nav-link active" 
                aria-current="page"
                href={ruta}>{titulo}
                </a>
                
        </li>
        
    )
    
}

export default MenuItem