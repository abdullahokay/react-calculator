import "./Button.css"

function Button({ symbol, color }) {

    return(
        <div className="btn-wrapper" style={{backgroundColor: color}}>
            {symbol}
        </div>
    )
}

export default Button