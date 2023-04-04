import './RegistrationPage.scss'
import Puppy from '../../assets/icons/puppy.svg'
import Button from '../../components/Button/Button'


const RegistrationPage = ({type}) => {
   
    let isSignup = false;
    if (type === "Sign up"){
        isSignup = true;
    }
    return (
        <section className="registration">
            <h1 className="registration__title">PawPrints</h1>
            <img className="registration__image" src={Puppy} alt="puppy login image" />
            <form className="registration__form">
                <input className="registration__input" type="text" placeholder="Username"/>
                <input className="registration__input" type="password" placeholder="Password"/>
                <Button type={type}/>
            </form>
            <button className={isSignup?"hide" :"signup-button"}>Sign up</button>
        </section>
    );
};

export default RegistrationPage;