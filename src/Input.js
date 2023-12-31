import colorNames from 'colornames';

const Input = ({ colorValue, setColorValue, setHexValue }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()} data-testid="input"> {}
            <label>Add Color name:</label>
            <input
                autoFocus
                type="text"
                placeholder="Add color name"
                required 
                value={colorValue}
                onChange={(e) => { 
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
            />
        </form>
    );
};

export default Input;
