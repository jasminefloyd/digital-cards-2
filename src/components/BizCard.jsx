// Building out the structure of the card that will display on the page
import PropTypes from 'prop-types';


export default function BizCard(props) {

return (
    <>
    <section className='info'>
        <img src={`./src/assets/${props.item.cardImg}`} className='profile-pic' />
        <h1 className='name'>{props.item.name}</h1>
        <p className='job-title'>{props.item.title}</p>
        <p className='website'>{props.item.website}</p>
        <div className='connect-btns'>
            <button className='email-btn' src='${props.item.emailBTN}'>Email</button>
            <button className='linkedin-btn' src='${props.item.linkedinBTN}'>LinkedIn</button>
        </div>
    </section>
    <section className='about-section'>
        <h2>About</h2>
        <p>{props.item.about}</p>
    </section>
    <section className='interest-section'>
        <h2>Interest</h2>
        <p>{props.item.interest}</p>
    </section>
    <section className='qr-code-section'>
        <div className="qr-code">
            <img src={`./src/assets/${props.item.qrImg}`} alt="QR Code" />
        </div>
        <p className='qr-text'>{props.item.qrtext}</p>
    </section>
    <footer>
        <span></span>
    </footer>

    </>

);
}



BizCard.propTypes = {
    item: PropTypes.shape({
        cardImg: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        website: PropTypes.string.isRequired,
        emailBTN: PropTypes.string.isRequired,
        linkedinBTN: PropTypes.string.isRequired,
        about: PropTypes.string.isRequired,
        interest: PropTypes.string.isRequired,
        qrlink: PropTypes.string.isRequired,
        qrtext: PropTypes.string.isRequired,
        qrImg: PropTypes.string.isRequired,
        facebook: PropTypes.string.isRequired,
        twitter: PropTypes.string.isRequired,
        instagram: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
        linkedin: PropTypes.string.isRequired,
    }).isRequired
};
