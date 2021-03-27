import LandingForm from './components/landing-form/LandingForm'
import studyingImage from '../../assets/img/studying.png'

const LandingPage = () =>{

    return (
        <>
            <div >
                <div className="grid mt-4">
                    <div className="row">
                        <div className="col-md">
                            <div className="row">
                                <div className="col-md">
                                    <img  src={studyingImage}  className=' img-fluid' alt='as'/>
                                </div>
                                <div className="col mt-5 mb-4">
                                <h1 className="fw-bold text-center">All you can read!</h1>

                                    <div className="container mt-4">
                                            <ul className="list-group ">
                                                <li className="list-group-item  active fw-bold">FREE</li>
                                                <li className="list-group-item">any Time  <strong>24/7/365</strong></li>
                                                <li className="list-group-item">any where</li>
                                                <li className="list-group-item">offline</li>
                                            </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md">
                            <LandingForm/>
                        </div>
                    </div>
                </div>
            </div>     
         </>
    )
}

export default LandingPage