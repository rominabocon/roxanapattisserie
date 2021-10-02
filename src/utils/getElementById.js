import {data} from "../data/data"

export const getElementbyId = (id) => data.find(el => el.id === id);