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



const CRUDPawPostPage = ({type}) => {
    window.scrollTo(0, 0);

    let title = '';
    let linkDisplay='';

    if (type ==='create'){
        title = 'New Pawpost'
        linkDisplay='none'
    } else if (type ==='edit'){
        title = 'Edit Pawpost'
        linkDisplay='crud-pawpost__return-link'
    }


    return (
        <>
        <section className="crud-pawpost">
            <Link className={linkDisplay} to="/pawpost/1"><img src={Return} alt="" className="crud-pawpost__return-icon" /></Link>
            <h1 className="crud-pawpost__title">{title}</h1>
            <form className="crud-pawpost__form">
                <div className="crud-pawpost__form-section">
                    <div className="crud-pawpost__form-left">
                        <img src={Placeholder} alt="" className="crud-pawpost__image" />
                        <button className="crud-pawpost__add-button">+ Image</button>
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
                    <div className="crud-pawpost__emoticon-container"><img className="crud-pawpost__emoticon" src={WholesomeEmoticon} alt="" /></div>
                    <div className="crud-pawpost__emoticon-container"><img className="crud-pawpost__emoticon" src={CuteEmoticon} alt="" /></div>
                    <div className="crud-pawpost__emoticon-container"><img className="crud-pawpost__emoticon" src={FunnyEmoticon} alt="" /></div>
                    <div className="crud-pawpost__emoticon-container"><img className="crud-pawpost__emoticon" src={NaughtyEmoticon} alt="" /></div>
                    <div className="crud-pawpost__emoticon-container"><img className="crud-pawpost__emoticon" src={CrazyEmoticon} alt="" /></div>
                    <div className="crud-pawpost__emoticon-container"><img className="crud-pawpost__emoticon" src={AngryEmoticon} alt="" /></div>
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