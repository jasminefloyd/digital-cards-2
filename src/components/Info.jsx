import profileImage from '../assets/me-ph.png'

export default function Info() {

return (
    <>
    <section className='info'>
        <img src={profileImage} className='profile-pic' />
        <h1 className='name'>Jasmine Floyd</h1>
        <p className='job-title'>Full Stack Product Innovator</p>
        <p className='website'>jasminefloyd.website</p>
        <div className='connect-btns'>
            <button className='email-btn'>Email</button>
            <button className='linkedin-btn'>LinkedIn</button>
        </div>
    </section>
    </>
)
}