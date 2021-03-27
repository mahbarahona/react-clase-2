import React from 'react'
import styles from './LandingForm.module.css';

const LandingForm = () => {

const [nombre, setNombre] = React.useState('Agatha Christie')
const [email, setEmail]   = React.useState('a.christie@books.com')
const [data,  setData]   = React.useState('')



 const handlerSubmit      = ()      => {
     console.log({nombre,email});
     setData(JSON.stringify({nombre,email}))     
}
 const handlerChangeName  = (event) => setNombre(event.target.value)
 const handlerChangeEmail = (event) => setEmail(event.target.value)
 const handlerFocus       = ()      => {setData('')}

    return (
        <>
            <div className='container'>   
                <div>
                    <span>
                        <small>{data}</small>
                    </span>
                    <div className={styles.card}>
                            <div className="mb-3">
                                <label  className="form-label mb-0">Name</label>
                                <input type="text"

                                    value={nombre}
                                    onChange={handlerChangeName}
                                    onFocus={handlerFocus}
                                    className={styles.input + ' form-control'} 
                                    name="nombre"
                                    id="nombre"
                                    placeholder="Chuck Norris"/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label mb-0">Email</label>
                                <input type="email"
                                    
                                    value={email}
                                    onChange={handlerChangeEmail}
                                    onFocus={handlerFocus}
                                    className=' form-control'
                                    name="email"
                                    id="email"/>
                            </div>
                            <button type="button" onClick={handlerSubmit} className={styles.btn+' btn shadow' }>Start reading Now!</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default LandingForm