import '../../Styles/Home.scss';
import TokenCard from '../../HOC/Card';
import {dummyToken} from '../../Utitlities/dummyToken';
import BuyModal from '../../HOC/Modal/buyModal';
import {useState} from 'react';
const Home = ({userName = '', searchValue = '', listItem = []}) => {
  const [openModal, setOpenModal] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  return (
    <>
      <div className='home_page' data-testid='Home_Page'>
        <div className='content_wrappers'>
          {openModal && (
            <BuyModal
              cancel={() => {
                setOpenModal(false);
                setActiveModal(null);
              }}
              name={dummyToken[activeModal]?.name}
              description={dummyToken[activeModal]?.description}
              address={dummyToken[activeModal]?.payout_address}
              opensea_link={dummyToken[activeModal]?.permalink}
            />
          )}

          <div className='token_items'>
            {dummyToken?.map((item, index) => (
              <TokenCard
                key={index}
                title={item?.name}
                owner={item?.asset_contract?.name}
                price={item?.payment_tokens?.usd_price}
                image={item?.image_preview_url}
                onClick={() => {
                  setActiveModal(index);
                  setOpenModal(true);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
