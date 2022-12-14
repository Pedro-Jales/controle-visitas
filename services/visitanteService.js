import axios from "axios";
import * as _ from "./config"

const url = `${_.VISITANTE}`

export async function listarVisitantes() {
    axios.get(url).then((response) => {
        var data = JSON.stringify(response.data, null, 2)
        return (data)
    }).catch((error) => {
        return (`!error: ${error.response.status}`)
    })
}

export async function getVisitante(id) {
    axios.get(`${url}/${id}`).then((response) => {
        var data = JSON.stringify(response.data, null, 2)
        return (data)
    }).catch((error) => {
        return (`!error: ${error.response.status}`)
    })
}

export async function postVisitante(visitante) {
    axios.post(`${url}`, visitante)
        .then(function (response) {
            return(response.data);
        })
        .catch(function (error) {
            return (`!error: ${error.response.status}`)
        });
}

export async function delVisitante(id) {
    axios.delete(`${url}/${id}`).then((response) => {
        return (`Visitante ${id} deletado.`)
    }).catch((error) => {
        return (`!error: ${error.response.status}`)
    })
}