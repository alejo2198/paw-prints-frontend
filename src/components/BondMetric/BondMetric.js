import './BondMetric.scss';

import BluePawFull from '../../assets/icons/paws/blue-paw-full.svg'
import BluePaw from '../../assets/icons/paws/blue-paw.svg'
import BrownPawFull from '../../assets/icons/paws/brown-paw-full.svg'
import BrownPaw from '../../assets/icons/paws/brown-paw.svg'

import AddIcon from '../../assets/icons/add.svg';
import { incrementMetric } from '../../utils/apiRequests';
import { pawCalculator } from '../../utils/bondhelper';
import {useEffect, useState} from 'react'

const BondMetric = ({title,color,metricValue,total,index,handleIncrement}) => {
    const [animation,setAnimation] = useState(false)
    useEffect(()=>{
        if(animation){
            setTimeout(()=>{
                setAnimation(false)
            },100)
            
        }
    },[animation])
    
    let fullPaw = '';
    let outlinePaw = '';

    if (color === 'blue'){
        fullPaw = BluePawFull;
        outlinePaw = BluePaw;
    }else if (color === 'brown'){
        fullPaw = BrownPawFull;
        outlinePaw = BrownPaw;
    }
    function Increment() {
        setAnimation(true)
        let metricName=''
        switch(index){
            case 0:
                metricName="walk"
                break;
            case 1:
                metricName="belly_rub"
                break;
            case 2:
                metricName="treat"
                break;
            case 3:
                metricName="stretch"
                break;
            case 4:
                metricName="dog_park"
                break;
            case 5:
                metricName="trick"
                break;

        }
        incrementMetric({metric:metricName})
        .then(()=>{
            handleIncrement()
        })
    }
   
    let pawArray = pawCalculator(metricValue,total)
    pawArray = pawArray.map(paw=>{
        if (paw) return fullPaw;
        return outlinePaw;
    })
  
    return (
        <article className="metric">
            <h3 className="metric__heading">{title}</h3>
            
            <div className="metric__paw-container">
                <img className="metric__paw" src={pawArray[0]} alt="" /> 
                <img className="metric__paw" src={pawArray[1]} alt="" />
                <img className="metric__paw" src={pawArray[2]} alt="" />
                <img className="metric__paw" src={pawArray[3]} alt="" />
                <img className="metric__paw" src={pawArray[4]} alt="" />
            </div>
            <img className={"metric__add-icon " + (animation? 'animate':'')} src={AddIcon} alt="" onClick={Increment}/>

            <p className="metric__text">{(total/5) - metricValue%(total/5)} more min challenge paws until next paw</p>
            <p className="metric__total">Total: {metricValue}/{total}</p>
            
        </article>
    );
};

export default BondMetric;