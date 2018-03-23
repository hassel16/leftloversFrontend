const Kategorie = ({onNewCategory=f=>f}) => (
    <select name="kategorie" id="offer_kategorie" onChange={onNewCategory("this.id")}>
        <option defaultValue value="verschiedenes">Verschiedenes</option>
        <option value="gemuese">Gemüse</option>
        <option value="getreideprodukte">Getreideprodukte</option>
        <option value="getraenke">Getränke</option>
        <option value="fleisch">Fleisch</option>
        <option value="fisch">Fisch</option>
        <option value="milchprodukte">Milchprodukte</option>
        <option value="obst">Obst</option>
    </select>
)
module.exports = Kategorie