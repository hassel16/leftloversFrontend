const Datalist = ({id, elementList}) => (
    <datalist id={id}>
    {
        elementList.map((element, i) => {
            return <option value={element} key={"option_" + i}/>
        })
    }
    </datalist>
)
module.exports = Datalist