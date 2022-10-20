import config from '../config';
import fetch from "node-fetch";

export const getRandomNumberFactService = async () => {
    try {
        const response = await fetch(config.urlNumberRandom, {
            headers: {"Content-Type": "application/json"}
        });

        const data = await response.json();
        return data;
    } catch (e) {
        return e;
    }
}