import qrCodeph from '../assets/qr_ph.png';

export default function QRcode() {

    return (
        <>
        <section className='qr-code-section'>
            <div className="qr-code">
                <img src={qrCodeph} alt="QR Code" />
            </div>
            <p className='qrText'>Scan QR Code to open Contact</p>
        </section>
        </>
    )
    }