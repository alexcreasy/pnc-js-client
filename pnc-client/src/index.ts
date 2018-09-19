import "isomorphic-fetch";
import { Person } from "./Person";

const API_URL = "https://api.github.com";


export function fetchRepos(): Promise<Object> {
    return fetch(API_URL)
            .then(resp => resp.json);
}