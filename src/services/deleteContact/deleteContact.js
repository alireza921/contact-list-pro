import http from "../httpServis";

export function deleteContact(id) {
  // console.log("deletecontact fun ", id);
  return http.delete(`contacts/${id}`);
}
