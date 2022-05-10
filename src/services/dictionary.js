import http from "./http";
import config from "../config.json";

export function getWord(word) {
  return http.get(`${config.dictionaryAPI}/${word}`);
}

export async function validate(word) {
  const { data } = await getWord(word);
}
