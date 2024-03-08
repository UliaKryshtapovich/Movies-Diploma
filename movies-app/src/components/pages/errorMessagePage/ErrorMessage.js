import img from './error.gif';

const ErrorMessage = () => {
    return (
        <img style={{ display: 'block', width: "100%", height: "100%",objectFit: 'contain', margin: "0 auto"}}  src={img} alt="Error"/>
    )
}

export default ErrorMessage;