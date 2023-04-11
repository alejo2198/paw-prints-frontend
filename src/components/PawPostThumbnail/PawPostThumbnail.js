import './PawPostThumbnail.scss';

import AngryEmoticon from '../../assets/icons/emoticons/angry.svg'
import CrazyEmoticon from '../../assets/icons/emoticons/crazy.svg'
import CuteEmoticon from '../../assets/icons/emoticons/cute.svg'
import FunnyEmoticon from '../../assets/icons/emoticons/funny.svg'
import NaughtyEmoticon from '../../assets/icons/emoticons/naughty.svg'
import WholesomeEmoticon from '../../assets/icons/emoticons/wholesome.svg'


const PawPostThumbnail = ({pawpost}) => {

    const thumbnail = pawpost.image;
    const emoji = pawpost.emoticon;
    let postEmojiImage='';

    switch(emoji){
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
  
    
    
    return (
        <div className='thumbnail'>
            <img src={thumbnail} alt="thumbnail image" className="thumbnail__image" />
            <img src={postEmojiImage} alt="thumbnail emoji" className="thumbnail__emoji" />
        </div>
    );
};

export default PawPostThumbnail;