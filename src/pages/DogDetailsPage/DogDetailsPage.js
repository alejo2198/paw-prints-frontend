
import Button from '../../components/Button/Button'
import './DogDetailsPage.scss'
import{useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

const DogDetailsPage = () => {
    const[imageFile,setImageFile] = useState(null);
    const[preview,setPreview] = useState(null);
    const navigate=useNavigate()
    function handleSubmit(event){
        event.preventDefault();
        navigate("/profile/1")
    }

    function updateImage(event){
       if (event.target.files){
        if(preview){
            URL.revokeObjectURL(preview)
        }
        setImageFile(event.target.files[0])
       } 
    }

    useEffect(()=>{
        if (imageFile){
            setPreview(URL.createObjectURL(imageFile))
        }    
    },[imageFile])


    return (
        <section className="dog-details">
            <h1 className='dog-details__title'>Doggie Details</h1>
            <form  className="dog-details__form" onSubmit={handleSubmit}>
                <div className="image-container">
                     <img src={preview} alt="" className="dog-details__preview"/>
                </div>
                <input type="file" name="image" id ="image" hidden onChange={updateImage}/>
                <label htmlFor='image' className='dog-details__choose-file'>Add Doggie Headshot</label>

                <div className="dog-details__inputs-container">
                    <label htmlFor="name" className="dog-details__label">Name:</label>
                    <input type="text" name="name" className="dog-details__input" />
                    <label htmlFor="age" className="dog-details__label">Age:</label>

                    <input type="text" name="age" className="dog-details__input" />
                    <label htmlFor="breed" className="dog-details__label">Breed:</label>
                    <input type="text" name="breed" className="dog-details__input" />
                    <label htmlFor="bio" className="dog-details__label">Bio:</label>
                    <input type="text" name="bio" className="dog-details__input--textarea" />     
                </div>

                <Button type="Submit"/>
            </form>
        </section>
    );
};

export default DogDetailsPage;