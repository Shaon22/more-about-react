import PropTypes from 'prop-types';
import Feature from '../feature/Feature';

const PriceOption = ({option}) => {
    const {membership_class,price,features}=option;
    return (
        <div className='bg-green-500 p-5 text-white flex flex-col'>
            <h1>
                <span className='text-5xl font-bold'>$ {price}</span>
                <span className='text xl font-bold'>/mon</span>
            </h1>
            <h1 className='text-3xl my-5 font-bold'>{membership_class}</h1>
            <div className='flex-grow'>
            {
                features.map((feature,index)=><Feature key={index} feature={feature}></Feature>)
            }
            </div>
            <div className='text-center '>
            <button className="btn btn-wide my-5 ">Buy Now</button>
            </div>
        </div>
    );
};
PriceOption.propTypes={
    option:PropTypes.object

}

export default PriceOption;