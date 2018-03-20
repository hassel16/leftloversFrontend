const Datalist = ({id, elementList}) => (
    <datalist id={id}>
        <option value={elementList.map(element => element)} />
    </datalist>
)
module.exports = Datalist