import MenuItem from '../MenuItem/MenuItem'

const Header = () =>{

    const menu = [
        {
            id:0,
            titulo:'Books',
            ruta:'/'
        },
        {
            id:1,
            titulo:'SigIn',
            ruta:'/'
        },
    ]
 
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">             
                    {
                        menu.map( (item) =>(
                            <MenuItem titulo={item.titulo} ruta={item.ruta} key={item.id} />
                        ))
                    }
                </ul>
            </div>
        </nav>
    )

}

export default Header