import "./Button.css"

function Button({ symbol, color, handleClick }) {

    return(
        <div className="btn-wrapper" style={{backgroundColor: color}} onClick={() => handleClick(symbol)}>
            {symbol}
        </div>
    )
}

export default Button