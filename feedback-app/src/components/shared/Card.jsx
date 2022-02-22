import PropTypes from 'prop-types';

function Card({ children , reverse}) {
    //example of condition class
//return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;

return(
    //example of condition style
    <div className="card" 
        style={{
            backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#fff',
            textColor: reverse ? '#fff' : 'rgba(0, 0, 0, 0.4)',
        }}
    >
        {children}
    </div>
)
} 

Card.defaultProps={
    reverse: false,
}

Card.propTypes={
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool,
}

export default Card;
