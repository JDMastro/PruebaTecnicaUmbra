import { instance, responseBody } from './AxiosInstance'
import Json from "./PreguntaTresServiceImage.json";

const Requests = {
    getAll: async (url: string) => await instance.get(url).then(responseBody),
}

export const ComemntsRequest =
{
    getAll: async (_start: number, _limit: number) => await Requests.getAll(`/comments?_start=${_start}&_limit=${_limit}`),
}

export const imageReqest =
{
    getAll: () => Json,
    orderByImageSelected : (id: number) => sortBy(id)
}


var sortBy = function (id : number) {
    const higher = []
    const lower = []
    const array = Json
    for (let index = 0; index < array.length; index++) {
        if(array[index].id >= id)
             higher.push(array[index])
        else
            lower.push(array[index])
    }
    return [...higher, ...lower]
};