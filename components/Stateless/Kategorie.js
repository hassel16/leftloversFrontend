const Kategorie = ({onNewCategory=f=>f}) => (
    <select name="kategorie" id="offer_kategorie" onChange={onNewCategory}>
        <option defaultValue value="Verschiedenes">Verschiedenes</option>
        <option value="Gemüse">Gemüse</option>
        <option value="Getreideprodukte">Getreideprodukte</option>
        <option value="Getränke">Getränke</option>
        <option value="Fleisch">Fleisch</option>
        <option value="Fisch">Fisch</option>
        <option value="Milchprodukte">Milchprodukte</option>
        <option value="Obst">Obst</option>
    </select>
)
module.exports = Kategorie