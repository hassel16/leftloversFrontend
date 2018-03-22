const TabellenZeile = ({ ergebnis, id}) => {
    const {titel, kategorie, description, createdatetime} = ergebnis
    return (
        <tr key={"td" + id}>

            <td key={id + titel}>{titel}</td>
            <td key={id + "kategorie"}>{"k"+kategorie}</td>
            <td key={id + description}>{description}</td>
            <td key={id + createdatetime}>{createdatetime}</td>
        </tr>

    )
}
module.exports = TabellenZeile
//zweite stelle: <td key={id + kategorie}>{kategorie}</td>