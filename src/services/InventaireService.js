import axios from "axios";

const apiUrl = "api1/entrees/csv";

export function postInventaire(formData) {
    const headers = {
        responseType: 'json'
    };
    
    axios.post(apiUrl, formData, { headers })  
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}