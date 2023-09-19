import  PropTypes  from 'prop-types';
import Features from '../Features/Features';


const Price = ({option}) => {

    const {name, price,features} = option
    
    return (
        <div className='bg-blue-400 flex flex-col rounded-lg p-8 mt-10 -ml-3'>
            <h2 className='text-center'>
                <span className='text-7xl font-extrabold'>{price}
                </span>
                <span className="text-2xl">/months
                </span>
                <h4 className="text-3xl my-4">{name}</h4> 
            </h2>
            <div className='pl-9 flex-grow'>
            {
                features.map(singleFeatures => <Features featuresData={singleFeatures} key={singleFeatures.id}></Features>)
            }
            <button className='mt-20 bg-gray-600 w-full py-2 font-bold rounded-lg hover:bg-red-800 text-white'>Buy Now</button>
            </div>
            
        </div>
    );
};
Price.propTypes ={
    option: PropTypes.object
}
export default Price;