import './BondPage.scss';
import BlackPawFull from '../../assets/icons/paws/black-paw-full.svg'
import BlackPaw from '../../assets/icons/paws/black-paw.svg'
import Info from '../../assets/icons/info.svg'
import BondMetric from '../../components/BondMetric/BondMetric';
import NavBar from '../../components/NavBar/NavBar';
import { useState,useEffect } from 'react';
import { getMetrics,incrementMetric } from '../../utils/apiRequests';
import { pawCalculator,mainPaws } from '../../utils/bondhelper';


const BondPage = () => {
   
    const [metrics,setMetrics] = useState(null)
    const [isIncremented,setIsIncremented] = useState(false)

    useEffect(()=>{
        if(!metrics){
            window.scrollTo(0, 0);
        }
        getMetrics()
        .then(metricArray=>{
            setMetrics(metricArray)
            
            const miniMetrics = 
               [ {value:metricArray.walk,total:100},
                {value:metricArray.belly_rub,total:100},
                {value:metricArray.treat,total:100},
                {value:metricArray.stretch,total:50},
                {value:metricArray.dog_park,total:50},
                {value:metricArray.trick,total:10}]
        
            const main = mainPaws(miniMetrics)
            
            if(main > metricArray.main){
                incrementMetric({metric:'main'})
            }
            
            if(isIncremented){
                
                setIsIncremented(false)
            }
        })
    },[isIncremented]);

    function handleIncrement(){
        setIsIncremented(true)
    }

    if (!metrics){
        return <>Loading...</>
    }else{

        let pawArray = pawCalculator(metrics.main,30)
        pawArray = pawArray.map(paw=>{
            if (paw) return BlackPawFull;
            return BlackPaw;
        })
        const categories=[
            {title:"Walks" ,color:"brown",metric:metrics.walk,total:100},
            {title:"Belly Rubs" ,color:"blue",metric:metrics.belly_rub,total:100},
            {title:"Treats" ,color:"brown",metric:metrics.treat,total:100},
            {title:`Saying "Big Stretch"` ,color:"blue",metric:metrics.stretch,total:50},
            {title:"Visits to the Dog Park" ,color:"brown",metric:metrics.dog_park,total:50},
            {title:"Tricks" ,color:"blue",metric:metrics.trick,total:10}
        ]

        return (
            <>
            <section className="bond">
                <h1 className="bond__heading">Canine Connection</h1>
                <img className="bond__info-icon" src={Info} alt="" />
                <div className="bond__paw-container">
                    <img className="bond__paw" src={pawArray[0]} alt="" /> 
                    <img className="bond__paw" src={pawArray[1]} alt="" />
                    <img className="bond__paw" src={pawArray[2]} alt="" />
                    <img className="bond__paw" src={pawArray[3]} alt="" />
                    <img className="bond__paw" src={pawArray[4]} alt="" />
                </div>
                <p className="bond__text">{6 - metrics.main%6} more mini challenge paws until next paw</p>
                <p className="bond__total">Total: {metrics.main}/30</p>
                <h2 className="bond__sub-heading">Categories</h2>
                
                {
                    categories.map(category=>{
                        return <BondMetric 
                            title={category.title} 
                            color={category.color} 
                            metricValue={category.metric} 
                            total={category.total} 
                            handleIncrement={handleIncrement}
                            key={categories.indexOf(category)}
                            index={categories.indexOf(category)}/>
                    })
                }
                
            </section>
            <NavBar/>
            </>
            
        );
    }
    
   
};

export default BondPage;