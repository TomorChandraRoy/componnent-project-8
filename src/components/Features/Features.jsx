import { PropTypes } from 'prop-types';
import { BsFillPatchCheckFill} from 'react-icons/bs';

const Features = ({featuresData}) => {
    return (
        <div>
            <p className='flex items-center py-2'><BsFillPatchCheckFill className='  text-red-700  mr-2'></BsFillPatchCheckFill>{featuresData}</p>
        </div>
    );
};
Features.propTypes={
    featuresData:PropTypes.st
}
export default Features;