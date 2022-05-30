import http from "../httpServis";
export function getOneContact(id) {
  return http.get(`/contacts/${id}`);
}
