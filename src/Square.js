const Square = ({ colorValue, hexValue }) => {
    return (
        <section
            className="square"
            style={{ backgroundColor: colorValue }}
            data-testid="square" 
        >
            <p>{colorValue ? colorValue : "Empty Value"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    );
};

Square.defaultProps = {
    colorValue: "Empty Color Value"
};

export default Square;
