import './BondMetric.scss';

import BluePawFull from '../../assets/icons/paws/blue-paw-full.svg'
import BluePaw from '../../assets/icons/paws/blue-paw.svg'
import BrownPawFull from '../../assets/icons/paws/brown-paw-full.svg'
import BrownPaw from '../../assets/icons/paws/brown-paw.svg'

import AddIcon from '../../assets/icons/add.svg'

const BondMetric = ({title,color}) => {
    let fullPaw = '';
    let outlinePaw = '';
    if (color === 'blue'){
        fullPaw = BluePawFull;
        outlinePaw = BluePaw;
    }else if (color === 'brown'){
        fullPaw = BrownPawFull;
        outlinePaw = BrownPaw;
    }
    return (
        <article className="metric">
            <h3 className="metric__heading">{title}</h3>
            
            <div className="metric__paw-container">
                <img className="metric__paw" src={fullPaw} alt="" /> 
                <img className="metric__paw" src={outlinePaw} alt="" />
                <img className="metric__paw" src={outlinePaw} alt="" />
                <img className="metric__paw" src={outlinePaw} alt="" />
                <img className="metric__paw" src={outlinePaw} alt="" />
            </div>
            <img className="metric__add-icon" src={AddIcon} alt="" />

            <p className="metric__text">9 more min challenge paws until next paw</p>
            <p className="metric__total">Total: 31/100</p>
            
        </article>
    );
};

export default BondMetric;