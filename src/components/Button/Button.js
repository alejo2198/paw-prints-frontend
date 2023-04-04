import './Button.scss';

const Button = ({type}) => {
    
    return (
        <button className="button">{type}</button>
    );
};

export default Button;