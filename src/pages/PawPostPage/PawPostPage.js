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

import { Link,useParams,useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { deletePost, getPostById } from '../../utils/apiRequests';

const PawPostPage = () => {
    window.scrollTo(0, 0);
    const [pawPost,setPawPost] = useState(null);
    const {id} = useParams();
    const navigate=useNavigate()
    let postEmojiImage='';

    useEffect(()=>{
        getPostById(id)
        .then(post=>{
            setPawPost(post)
            console.log(post)
        })
    },[])

    function handleDelete(event){
        event.preventDefault()
        deletePost(id)
        .then(()=>{
            navigate("/profile")
        })
    }
    if(!pawPost){
        return <>Loading...</>
    }

    switch(pawPost.emoticon){
        case "wholesome":
            postEmojiImage = WholesomeEmoticon
            break;
        case "cute":
            postEmojiImage = CuteEmoticon
            break;  
        case "funny":
            postEmojiImage = FunnyEmoticon
            break;
        case "naughty":
            postEmojiImage = NaughtyEmoticon
            break;
        case "crazy":
            postEmojiImage = CrazyEmoticon
            break;
        case "angry":
            postEmojiImage = AngryEmoticon
            break;
    }
    const formattedDate = new Date(pawPost.timestamp).toLocaleDateString()
    return (
        <>
        <section className="paw-post">
            <h1 className="paw-post__heading">PawPost</h1>
            <h2 className="paw-post__title">{pawPost.title}</h2>
            <div className="paw-post__information">
                <p className="paw-post__date">{formattedDate}</p>
                <div className="paw-post__icon-container">
                    <Link to={`/pawpost/${pawPost.id}/edit`} className="paw-post__icon"><img src={Edit} alt="edit icon" /></Link>
                    <button className="paw-post__icon"><img src={Delete} alt="delete icon" onClick={handleDelete}/></button>
                </div>
            </div>
            <img src={pawPost.image} alt="pawpost image" className="paw-post__image"/>
            <p className="paw-post__story">{pawPost.story}</p>
            <img src={postEmojiImage} alt="" className="paw-post__emoticon" />
        </section>
        <NavBar/>
        </>
    );
};

export default PawPostPage;