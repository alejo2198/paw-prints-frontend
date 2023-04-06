import './BondPage.scss';
import BlackPawFull from '../../assets/icons/paws/black-paw-full.svg'
import BlackPaw from '../../assets/icons/paws/black-paw.svg'
import Info from '../../assets/icons/info.svg'
import BondMetric from '../../components/BondMetric/BondMetric';

const BondPage = () => {
    const categories=[
        {title:"Walks" ,color:"brown"},
        {title:"Belly Rubs" ,color:"blue"},
        {title:"Treats" ,color:"brown"},
        {title:`Saying "Big Stretch"` ,color:"blue"},
        {title:"Visits to the Dog Park" ,color:"brown"},
        {title:"Tricks" ,color:"blue"}
    ]
    return (
        <section className="bond">
            <h1 className="bond__heading">Canine Connection</h1>
            <img className="bond__info-icon" src={Info} alt="" />
            <div className="bond__paw-container">
                <img className="bond__paw" src={BlackPawFull} alt="" /> 
                <img className="bond__paw" src={BlackPaw} alt="" />
                <img className="bond__paw" src={BlackPaw} alt="" />
                <img className="bond__paw" src={BlackPaw} alt="" />
                <img className="bond__paw" src={BlackPaw} alt="" />
            </div>
            <p className="bond__text">6 more min challenge paws until next paw</p>
            <p className="bond__total">Total: 6/36</p>
            <h2 className="bond__sub-heading">Categories</h2>
            
            {
                categories.map(category=>{
                    return <BondMetric title={category.title} color={category.color} key={categories.indexOf(category)}/>
                })
            }
        </section>
    );
};

export default BondPage;