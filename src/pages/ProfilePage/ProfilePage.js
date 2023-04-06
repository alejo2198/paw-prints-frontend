import './ProfilePage.scss';

import ProfileImage from '../../assets/images/profile.png';
import PawPostThumbnail from '../../components/PawPostThumbnail/PawPostThumbnail';

import Naughty from '../../assets/icons/emoticons/naughty.svg';
import Funny from '../../assets/icons/emoticons/funny.svg';
import Cute from '../../assets/icons/emoticons/cute.svg';

import CloseUp from '../../assets/images/close-up.png';
import Birthday from '../../assets/images/birthday.png';
import Vacation from '../../assets/images/vacation.png';
import NavBar from '../../components/NavBar/NavBar';

import {Link} from 'react-router-dom'

const ProfilePage = () => {
    window.scrollTo(0, 0);
    const pawpost = {
        image: CloseUp,
        emoticon: Funny
    }
    const pawpost1 = {
        image: Vacation,
        emoticon: Naughty
    }
    const pawpost2 = {
        image: Birthday,
        emoticon: Cute
    }
    return (
        <>
        <section className="profile">
            <h1 className="profile__heading">Delilah</h1>
            <div className="profile__information">
                <img src={ProfileImage} alt="" className="profile__image" />
                <div className="profile__ages">
                    <div className="profile__age">
                        <h2 className="profile__category">Dog Age:</h2>
                        <p className="profile__detail--large">32</p>
                    </div>
                    <div className="profile__age">
                        <h2 className="profile__category">Human Age:</h2>
                        <p className="profile__detail--large">4</p>
                    </div>
                </div>
            </div>
            <div className="profile__breed">
                <h2 className="profile__category">Breed:</h2>
                <p className="profile__detail--large">Great Pyranees/ Australian Cattle Dog</p>
            </div>
            <h2 className="profile__category">Bio:</h2>
            <p className="profile__detail--small">I am a spoiled princess.  I love the snow and hate the summer. Add me on PawPrints if u wanna bark at strangers together</p>
            <h2 className="profile__category">PawPosts:</h2>

            <div className="profile__pawpost-container">
                <Link to="/pawpost/1" ><PawPostThumbnail pawpost={pawpost}/></Link>
                <Link to="/pawpost/1" ><PawPostThumbnail pawpost={pawpost2}/></Link>
                <Link to="/pawpost/1" ><PawPostThumbnail pawpost={pawpost1}/></Link>
            </div>
           
        </section>
        <NavBar/>
        </>
    );
};

export default ProfilePage;