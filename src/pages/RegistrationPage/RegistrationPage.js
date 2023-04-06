import './RegistrationPage.scss'
import Puppy from '../../assets/icons/puppy.svg'
import Button from '../../components/Button/Button'
import {Link, useNavigate} from 'react-router-dom'


const RegistrationPage = ({type}) => {
    const navigate = useNavigate()

    function handleSignup(event){
        event.preventDefault();
        if(type==="Login"){
            navigate("/profile/1")
        } else if (type ==="Sign up"){
            navigate("/dog-details")
        }
       
    }
   
    let isSignup = false;
    if (type === "Sign up"){
        isSignup = true;
    }
    return (
        <section className="registration">
            <h1 className="registration__title">PawPrints</h1>
            <img className="registration__image" src={Puppy} alt="puppy login image" />
            <form className="registration__form" onSubmit={handleSignup}>
                <input className="registration__input" type="text" placeholder="Username"/>
                <input className="registration__input" type="password" placeholder="Password"/>
                <Button type={type} />
            </form>
            <Link to="/signup"className={isSignup?"hide" :"signup-button"}>Sign up</Link>
        </section>
    );
};

export default RegistrationPage;