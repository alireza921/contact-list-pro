import http from "../httpServis";

export function updateContact(contact, id) {
  return http.put(`contacts/${id}`, contact);
}
