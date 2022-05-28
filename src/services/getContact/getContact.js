import http from "../httpServis";

export function getContact() {
  return http.get("/contacts");
}
