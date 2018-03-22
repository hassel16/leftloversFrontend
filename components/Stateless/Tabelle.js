import TabellenZeile from "./TabellenZeile"
const Tabelle = ({ ergebnisse }) => {
    return (
        <table>
            <tbody>
                {
                    ergebnisse.map((ergebnis, key) =>
                        <TabellenZeile ergebnis={ergebnis} key={key} id={key}/>
                    )
                }
            </tbody>
        </table>
    )
}
module.exports = Tabelle