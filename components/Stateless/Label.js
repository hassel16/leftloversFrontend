const Label = ({htmlFor, text}) => (
    <label htmlFor={htmlFor}>
        <b>{text}</b>
    </label>
)
module.exports = Label