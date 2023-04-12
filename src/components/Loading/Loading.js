import './Loading.scss';
import Load from '../../assets/images/loading.png'

const Loading = () => {
    return (
        <div className='loading'>
            <h1 className="loading__heading">Waking up your Profile Puppy</h1>
            <img className="loading__image"src={Load} alt="" />
            <h2 className="loading__sub-heading">Don't feel bad, they slept 16 hours today</h2>
            
        </div>
    );
};

export default Loading;