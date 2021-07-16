import axios from "axios";
import { selector } from "recoil";

export const getAsync = selector({
    key: 'getAsync',
    get: async ({ get }) => {
        try {
            const response = await axios.get('http://localhost:4000/getJob');
            return response.data;
        } catch (err) {
            throw err;
        }
    },

});