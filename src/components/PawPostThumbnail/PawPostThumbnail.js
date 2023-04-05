import './PawPostThumbnail.scss';
import {useEffect, useRef, useState} from 'react'


const PawPostThumbnail = ({pawpost}) => {

    const thumbnail = pawpost.image;
    const emoji = pawpost.emoticon;

    // const image = useRef()
    // const [imageSize,setImageSize] = useState("small")
    // useEffect(()=>{
    //     if(image){
    //         if(image.current.)
    //     }
    // },[image])

    

    
    
    return (
        <div className='thumbnail'>
            <img src={thumbnail} alt="thumbnail image" className="thumbnail__image" />
            <img src={emoji} alt="thumbnail emoji" className="thumbnail__emoji" />
        </div>
    );
};

export default PawPostThumbnail;