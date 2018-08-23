import fetch from "isomorphic-fetch";
import { Person } from "./Person";


const URL_TO_FETCH = "https://raw.githubusercontent.com/project-ncl/pnc/master/ui/package.json";

export function fetchPerson(): Promise<Person> {
  return fetch(URL_TO_FETCH)
      .then(resp => resp.json())
      .then(person => person as Person);
}