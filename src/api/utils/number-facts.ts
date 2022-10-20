import { getRandomNumberFactService }  from "../../services/random-number.services";

export const getRandomNumberFact = async () => {
    const randomNumberFact = await getRandomNumberFactService();
    return randomNumberFact;
}