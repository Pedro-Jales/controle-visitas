import axios from "axios";
import * as _ from "./config"

const url = `${_.VISITA}`

export async function listarVisitas() {
    axios.get(url).then((response) => {
        var data = JSON.stringify(response.data, null, 2)
        return (data)
    }).catch((error) => {
        return (`!error: ${error.response.status}`)
    })
}

export async function getVisita(id) {
    axios.get(`${url}/${id}`).then((response) => {
        var data = JSON.stringify(response.data, null, 2)
        return (data)
    }).catch((error) => {
        return (`!error: ${error.response.status}`)
    })
}

export async function postVisita(visita) {
    axios.post(`${url}`, visita)
        .then(function (response) {
            return(response.data);
        })
        .catch(function (error) {
            return (`!error: ${error.response.status}`)
        });
}

export async function delVisita(id) {
    axios.delete(`${url}/${id}`).then((response) => {
        return (`Visita ${id} deletada.`)
    }).catch((error) => {
        return (`!error: ${error.response.status}`)
    })
}