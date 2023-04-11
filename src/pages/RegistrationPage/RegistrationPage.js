import './RegistrationPage.scss'
import Puppy from '../../assets/icons/puppy.svg'
import Button from '../../components/Button/Button'
import {Link, useNavigate} from 'react-router-dom'
import { login,signup } from '../../utils/apiRequests'


const RegistrationPage = ({type}) => {
    const navigate = useNavigate()

    function handleSignup(event){
        event.preventDefault();
        const username = event.target.username.value;
        const password = event.target.password.value;
        const credentials = {username,password}

        if(type==="Login"){
            login(credentials)
            .then(response=>{
                if(response.status === 200){
                    sessionStorage.setItem('token',response.data.accessToken)
                    navigate("/profile/1")
                }else{
                    console.log("incorrect username or password")
                }   
            })
            .catch(error=>{
                console.log(error)
            });
            
        } else if (type ==="Sign up"){
            signup(credentials)
            .then(response=>{
                if(response.status === 201){
                    login(credentials)
                        .then(response=>{
                            if(response.status === 200){
                                sessionStorage.setItem('token',response.data.accessToken)
                                console.log(sessionStorage.getItem('token'))
                                navigate("/dog-details")
                            }else{
                                console.log("incorrect username or password")
                            }   
                        })
                        .catch(error=>{
                            console.log(error)
                        });
                }else{
                    console.log("username is taken")
                }   
            })
            .catch(error=>{
                console.log(error)
            });
            
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
                <input name="username" className="registration__input" type="text" placeholder="Username"/>
                <input name="password" className="registration__input" type="password" placeholder="Password"/>
                <Button type={type} />
            </form>
            <Link to="/signup"className={isSignup?"hide" :"signup-button"}>Sign up</Link>
        </section>
    );
};

export default RegistrationPage;