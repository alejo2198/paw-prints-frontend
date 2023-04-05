import './ProfilePage.scss';

import ProfileImage from '../../assets/images/profile.png';

const ProfilePage = () => {
    return (
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
        </section>
    );
};

export default ProfilePage;