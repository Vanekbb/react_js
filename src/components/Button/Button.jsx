import style from './Button.css'

export const Button = ({ label, disabled = false, click = () => null }) => {
    return ( <button className="btn" disabled={disabled} onClick={click}>
        {label}
    </button>
    )
}