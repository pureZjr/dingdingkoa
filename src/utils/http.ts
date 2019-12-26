import axios from 'axios'
import qs from 'qs'
import http from 'http'
import fs from 'fs'

import config from '@config/index'

export const get = (url, data) => {
    return axios
        .get(`${config.baseUrl}${url}?${qs.stringify(data)}`)
        .then(async response => {
            return response.data
        })
}

export const post = (url, data) => {
    return axios.post(`${config.baseUrl}${url}`, data).then(async response => {
        return response.data
    })
}

export const download = (url, data) => {
    const { path, name } = data
    if (!path || !name) {
        return
    }
    const file = fs.createWriteStream(path + name)
    http.get(`${config.baseUrl}${url}?${qs.stringify(data)}`, response => {
        response.pipe(file)
    })
}
