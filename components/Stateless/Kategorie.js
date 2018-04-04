const Kategorie = ({onNewCategory=f=>f}) => (
    <select name="kategorie" id="offer_kategorie" onChange={onNewCategory}>
        <option defaultValue value="Verschiedenes" kategorieid="9">Verschiedenes</option>
        <option value="Gemüse" kategorieid="1">Gemüse</option>
        <option value="Getreideprodukte" kategorieid="4">Getreideprodukte</option>
        <option value="Getränke" kategorieid="5">Getränke</option>
        <option value="Fleisch" kategorieid="2">Fleisch</option>
        <option value="Fisch" kategorieid="6">Fisch</option>
        <option value="Milchprodukte" kategorieid="7">Milchprodukte</option>
        <option value="Obst" kategorieid="8">Obst</option>
    </select>
)
module.exports = Kategorie