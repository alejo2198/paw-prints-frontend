import React from 'react';
import Button from '../../components/Button/Button';
import NavBar from '../../components/NavBar/NavBar'

import AngryEmoticon from '../../assets/icons/emoticons/angry.svg'
import CrazyEmoticon from '../../assets/icons/emoticons/crazy.svg'
import CuteEmoticon from '../../assets/icons/emoticons/cute.svg'
import FunnyEmoticon from '../../assets/icons/emoticons/funny.svg'
import NaughtyEmoticon from '../../assets/icons/emoticons/naughty.svg'
import WholesomeEmoticon from '../../assets/icons/emoticons/wholesome.svg'
import Placeholder from '../../assets/icons/image-placeholder.svg'

import Return from '../../assets/icons/return.svg'

import './CRUDPawPostPage.scss';
import { Link } from 'react-router-dom';

import { createPost,editPost } from '../../utils/apiRequests';
import { useNavigate,useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';



const CRUDPawPostPage = ({type}) => {
   
    
    const[imageFile,setImageFile] = useState(null);
    const[preview,setPreview] = useState(Placeholder);
    const [emoji,setEmoji] = useState(null)
    if(!emoji){
        window.scrollTo(0, 0);
    }
    let title = '';
    let linkDisplay='';
    const navigate = useNavigate();
    const{id} = useParams()

    if (type ==='create'){
        title = 'New Pawpost'
        linkDisplay='none'
    } else if (type ==='edit'){
        title = 'Edit Pawpost'
        linkDisplay='crud-pawpost__return-link'
    }

    function updateImage(event){
        if (event.target.files){
            if(preview){
                URL.revokeObjectURL(preview)
            }
            setImageFile(event.target.files[0])
        } 
    }

    function updateEmoji(event){
        event.preventDefault()
        setEmoji(event.target.name)
    }
    useEffect(()=>{
        if (imageFile){
            setPreview(URL.createObjectURL(imageFile))
        }    
    },[imageFile])

    function handleSubmit(event){
        event.preventDefault();

        const  date = new Date(event.target.date.valueAsDate);
        const timestamp = date.setDate(date.getDate() + 1);

        const pawpost = {
            title:event.target.title.value,
            story:event.target.story.value,
            image:imageFile,
            emoticon:emoji,
            timestamp: timestamp,
        }
        
        if (type ==='create'){
            createPost(pawpost)
            .then(()=>{
                navigate("/profile")
            })
        } else if (type ==='edit'){
            editPost(pawpost,id)
            .then(()=>{
                navigate(`/pawpost/${id}`)
            })
        }
       
    }



    return (
        <>
        <section className="crud-pawpost">
            <Link className={linkDisplay} to={`/pawpost/${id}`}><img src={Return} alt="" className="crud-pawpost__return-icon" /></Link>
            <h1 className="crud-pawpost__title">{title}</h1>
            <form className="crud-pawpost__form" onSubmit={handleSubmit}>
                <div className="crud-pawpost__form-section">
                    <div className="crud-pawpost__form-left">
                        <input type="file" name="image" id ="image" hidden onChange={updateImage}/>
                        <img src={preview} alt="" className="crud-pawpost__image" />
                        <label htmlFor='image' className='crud-pawpost__add-button'>+ Image</label>
                        
                    </div>
                    <div className="crud-pawpost__form-right">
                        <label className="crud-pawpost__label"htmlFor="title">Title:</label>
                        <input className="crud-pawpost__input" type="text" name="title" id="" />
                        <label className="crud-pawpost__label" htmlFor="date">Date:</label>
                        <input className="crud-pawpost__input--date" type="date" name="date" id="" />
                    </div>
                </div>
                <label className="crud-pawpost__label">Emotion:</label>  
                <div className="crud-pawpost__emoticon-section">
                    <div className="crud-pawpost__emoticon-container"><img className="crud-pawpost__emoticon" name="wholesome" src={WholesomeEmoticon} alt="emoji"onClick={updateEmoji} /></div>
                    <div className="crud-pawpost__emoticon-container"><img className="crud-pawpost__emoticon" name="cute" src={CuteEmoticon} alt="emoji"onClick={updateEmoji} /></div>
                    <div className="crud-pawpost__emoticon-container"><img className="crud-pawpost__emoticon" name="funny" src={FunnyEmoticon} alt="emoji"onClick={updateEmoji} /></div>
                    <div className="crud-pawpost__emoticon-container"><img className="crud-pawpost__emoticon" name="naughty" src={NaughtyEmoticon} alt="emoji"onClick={updateEmoji} /></div>
                    <div className="crud-pawpost__emoticon-container"><img className="crud-pawpost__emoticon" name="crazy" src={CrazyEmoticon} alt="emoji"onClick={updateEmoji} /></div>
                    <div className="crud-pawpost__emoticon-container"><img className="crud-pawpost__emoticon" name="angry" src={AngryEmoticon} alt="emoji"onClick={updateEmoji} /></div>
                </div>
                <label className="crud-pawpost__label" htmlFor="story">Story:</label>
                <input className="crud-pawpost__input--textarea" type="text" name="story" id="" />
                <div className='align-left'>
                    <Button type="Submit"/>
                </div>
              
            </form>
        </section>
        <NavBar/>
        </>
    );
};

export default CRUDPawPostPage;