import axios from "axios";
import fileDownload from 'js-file-download';

const apiUrl = "api2/referentiel/typesEquipement/csv"

// Pas utilisé 
// Test connexion API référentiels
export function getReferentielTypeEquipementCSV() {
    axios.get(apiUrl).then(res => {
      fileDownload(res, apiUrl+ '_'+ Date.now() + '.csv');
    })
}
