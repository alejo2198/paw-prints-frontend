import './LoginPage.scss'
import Puppy from '../../assets/icons/puppy.svg'
import Button from '../../components/Button/Button'

const LoginPage = () => {
    return (
        <section className="login">
            <h1 className="login__title">PawPrints</h1>
            <img className="login__image" src={Puppy} alt="puppy login image" />
            <form className="login__form">
                <input className="login__input" type="text" placeholder="Username"/>
                <input className="login__input" type="text" placeholder="Password"/>
                <Button type='Login'/>
            </form>
            <button className="signup-button">Sign up</button>
        </section>
    );
};

export default LoginPage;