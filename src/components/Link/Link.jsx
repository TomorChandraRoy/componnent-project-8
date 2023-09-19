import PropTypes from 'prop-types';
const Link = ({partData1}) => {
  return (
    <li className={` mr-10 hover:bg-green-400 px-6 `}>
    
      <a href={partData1.path}>{partData1.name}</a>

    </li>
  );
};

Link.propTypes ={
    partData1: PropTypes.object
}

export default Link;

