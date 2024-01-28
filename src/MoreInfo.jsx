import avatar from './assets/shiba-avatar.png';
import './App.css';

function MoreInfo(){
    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      };
    
      const cardsHolderStyle = {
        display: 'flex',
        justifyContent: 'space-around',
        width: '80%',  
      };
    
      const cardImageStyle = {
        width: '20%',  
      };
    
      return (
        <div className="info-container" style={containerStyle}>
          <div className='cards-holder' style={cardsHolderStyle}>
            <img src={avatar} alt="shiba-avatar" style={cardImageStyle} />
            <img src={avatar} alt="shiba-avatar" style={cardImageStyle} />
            <img src={avatar} alt="shiba-avatar" style={cardImageStyle} />
          </div>
    
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Nihil voluptatem molestiae id maiores quis assumenda qui, repellendus molestias nulla? Provident, amet optio.
            Nemo eligendi nulla nam hic nobis, iste quaerat?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Ab placeat nostrum repellendus unde, optio molestiae fugit, reiciendis fuga deleniti dignissimos facere obcaecati
            ratione doloremque veritatis nisi quae consequuntur ad eum!
          </p>
        </div>
      );
    };
export default MoreInfo;