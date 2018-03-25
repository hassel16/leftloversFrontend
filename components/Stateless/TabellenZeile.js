const TabellenZeile = ({ ergebnis, id }) => {
    const { foto, titel, kategorie, description, preis, createdatetime } = ergebnis
    return (
        <table className="innertable">
            <tbody className="border">
                <tr className="row" key={"td1" + id}>
                    <td id="user_cell" className="links" key={id + "user"}><a>user </a><a> msgme</a></td>
                    <td className="mitte titel" key={id + titel + preis}>{titel} - {preis}€</td>
                    <td className="rechts big" key={id + createdatetime}>{createdatetime}</td>
                </tr>
                <tr className="row" key={"td2" + id}>
                    <td className="links" key={id + foto.fotourl}><img className="thumbnail" src={foto.fotourl} /></td>
                    <td className="mitte" key={id + description}>{description}</td>
                    <td className="rechts big" key={id + "entfernung"}>2km entfernt</td>
                </tr>
            </tbody>
        </table>
    )
}
module.exports = TabellenZeile
//zweite stelle: <td key={id + kategorie}>{kategorie}</td>