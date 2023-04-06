import './PawPostPage.scss';

import Edit from '../../assets/icons/edit.svg'
import Delete from '../../assets/icons/delete.svg'

import AngryEmoticon from '../../assets/icons/emoticons/angry.svg'
import CrazyEmoticon from '../../assets/icons/emoticons/crazy.svg'
import CuteEmoticon from '../../assets/icons/emoticons/cute.svg'
import FunnyEmoticon from '../../assets/icons/emoticons/funny.svg'
import NaughtyEmoticon from '../../assets/icons/emoticons/naughty.svg'
import WholesomeEmoticon from '../../assets/icons/emoticons/wholesome.svg'

import Birthday from '../../assets/images/birthday.png'
import NavBar from '../../components/NavBar/NavBar';

const PawPostPage = () => {
    window.scrollTo(0, 0);
    return (
        <>
        <section className="paw-post">
            <h1 className="paw-post__heading">PawPost</h1>
            <h2 className="paw-post__title">Delilah's Birthday</h2>
            <div className="paw-post__information">
                <p className="paw-post__date">22/05/2019</p>
                <div className="paw-post__icon-container">
                    <button className="paw-post__icon"><img src={Edit} alt="edit icon" /></button>
                    <button className="paw-post__icon"><img src={Delete} alt="delete icon" /></button>
                </div>
            </div>
            <img src={Birthday} alt="pawpost image" className="paw-post__image" onClick={(e)=>{console.log(e)}}/>
            <p className="paw-post__story">I am a spoiled princess.  I love the snow and hate the summer. Add me on PawPrints if u wanna bark at strangers together. I am a spoiled princess.  I love the snow and hate the summer. Add me on PawPrints if u wanna bark at strangers together</p>
            <img src={CuteEmoticon} alt="" className="paw-post__emoticon" />
        </section>
        <NavBar/>
        </>
    );
};

export default PawPostPage;