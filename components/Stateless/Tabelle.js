import TabellenZeile from "./TabellenZeile"
const Tabelle = ({ ergebnisse, loading, onDetails=f=>f }) => {
    return (
        (loading) ?
            <div>Treffer werden geladen...</div> :
            (ergebnisse.length <= 0)?
            <div>Keine Treffer für deine Suche...</div>:
            <table className="grey">
                <div>{ergebnisse.length} Treffer</div>
                <tbody>
                    <tr>
                        <td>
                            {
                                ergebnisse.map((ergebnis, key) => {
                                    return <TabellenZeile ergebnis={ergebnis} key={key} id={key} onDetails={() => onDetails(ergebnis)}/>
                                })
                            }
                        </td>
                    </tr>
                </tbody>
            </table>
    )
}
module.exports = Tabelle