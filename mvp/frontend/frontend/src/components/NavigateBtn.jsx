import { useNavigate } from "react-router-dom";

function NavigateBtn({to, label, styleClass}) {
    const navigate = useNavigate()

    function navigateTo() {
        navigate(to)
    }

    return (
        <button onClick={navigateTo} className={styleClass}>{label}</button>
    )
}

export default NavigateBtn