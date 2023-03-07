import '../../Styles/Card.scss';

const TokenCard = ({title, owner, price, image, onClick}) => {
  return (
    <>
      <div className='main-card' data-testid='card'>
        <div className='card_header'>
          <img src={image} alt='weather' />
          <div className='views'>
            <span data-testid='navigate' onClick={() => onClick()}>
              View
            </span>
          </div>
        </div>
        <div className='card_body'>
          <h1>{title}</h1>
          <div className='left-right'>
            <p>by {owner} </p>
            <p>USD &#36;{price}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default TokenCard;
