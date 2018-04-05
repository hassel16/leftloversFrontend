const TabellenZeile = ({ ergebnis, id, onDetails=f=>f }) => {
    const { user, titel, preis, createdatetime, foto, description } = ergebnis
    return (
        <table className="innertable">
            <tbody className="border">
                <tr className="row" key={"td1" + id}>
                    <td id="user_cell" className="links" key={id + user.username}><a>{user.username} </a><a></a></td>
                    <td className="mitte titel" key={id + titel + preis} onClick={onDetails}>{titel} - {preis}€</td>
                    <td className="rechts big" key={id + createdatetime}>{createdatetime}</td>
                </tr>
                <tr className="row" key={"td2" + id}>
                    <td className="links" key={id + "foto.fotourl"}><img className="thumbnail" src={foto.fotourl} /></td>
                    <td className="mitte" key={id + description}>{description}</td>
                    <td className="rechts big" key={id + "entfernung"}>2km entfernt</td>
                </tr>
            </tbody>
        </table>
    )
}

module.exports = TabellenZeile
//zweite stelle: <td key={id + kategorie}>{kategorie}</td>