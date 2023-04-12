import './ProfilePage.scss';


import PawPostThumbnail from '../../components/PawPostThumbnail/PawPostThumbnail';
import NavBar from '../../components/NavBar/NavBar';
import {Link} from 'react-router-dom';
import { getDog,getPosts } from '../../utils/apiRequests';
import { useState,useEffect } from 'react';
import Loading from '../../components/Loading/Loading'

const ProfilePage = () => {
    window.scrollTo(0, 0);

    const [userDog,setUserDog] = useState(null)
    const [pawPosts,setPawPosts] = useState(null)

    useEffect(()=>{
        getDog()
        .then(dog=>{
            setUserDog(dog) 
        })
        getPosts()
        .then(posts=>{
            
            setPawPosts(posts)
        })  
       
    },[])

    if (!userDog || !pawPosts){
        return <Loading/>  
    }
    
    if(!Array.isArray(pawPosts)){
        return (
            <>
            <section className="profile">
                <h1 className="profile__heading">{userDog.name}</h1>
                <div className="profile__information">
                    <img src={userDog.profile_picture} alt="" className="profile__image" />
                    <div className="profile__ages">
                        <div className="profile__age">
                            <h2 className="profile__category">Dog Age:</h2>
                            <p className="profile__detail--large">{userDog.age*7}</p>
                        </div>
                        <div className="profile__age">
                            <h2 className="profile__category">Human Age:</h2>
                            <p className="profile__detail--large">{userDog.age}</p>
                        </div>
                    </div>
                </div>
                <div className="profile__breed">
                    <h2 className="profile__category">Breed:</h2>
                    <p className="profile__detail--large">{userDog.breed}</p>
                </div>
                <h2 className="profile__category">Bio:</h2>
                <p className="profile__detail--small">{userDog.bio}</p>
                <h2 className="profile__category">PawPosts:</h2>
    
                <div className="profile__pawpost-container">
                       create a post!
                </div>
               
            </section>
            <NavBar/>
            </>
        );
    }
   
        

    return (
        <>
        <section className="profile">
            <h1 className="profile__heading">{userDog.name}</h1>
            <div className="profile__information">
                <img src={userDog.profile_picture} alt="" className="profile__image" />
                <div className="profile__ages">
                    <div className="profile__age">
                        <h2 className="profile__category">Dog Age:</h2>
                        <p className="profile__detail--large">{userDog.age*7}</p>
                    </div>
                    <div className="profile__age">
                        <h2 className="profile__category">Human Age:</h2>
                        <p className="profile__detail--large">{userDog.age}</p>
                    </div>
                </div>
            </div>
            <div className="profile__breed">
                <h2 className="profile__category">Breed:</h2>
                <p className="profile__detail--large">{userDog.breed}</p>
            </div>
            <h2 className="profile__category">Bio:</h2>
            <p className="profile__detail--small">{userDog.bio}</p>
            <h2 className="profile__category">PawPosts:</h2>

            <div className="profile__pawpost-container">
                    {
                        pawPosts.map(pawPost=>{
                            return <Link to= {`/pawpost/${pawPost.id}`} key={pawPosts.indexOf(pawPost)}><PawPostThumbnail pawpost={pawPost} key={pawPosts.indexOf(pawPost)}/></Link>
                        })
                    }
            </div>
           
        </section>
        <NavBar/>
        </>
    );
};

export default ProfilePage;