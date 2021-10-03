import { data } from "../data/data";

export const getCategoria = (description) => {
    return data.filter(product => product.description === description);
}