import { apiClients } from "../config/apiClients";


export const fetchNotesAPI = (): Promise<any> =>
    apiClients<any>("/notes/", "GET");


export const createNoteAPI = (data: any): Promise<any> =>
    apiClients<any>("/notes/", "POST", data);


export const updateNoteAPI = (note_id: number, data: any): Promise<any> =>
    apiClients<any>(`/notes/${note_id}`, "PUT", data);


export const deleteNoteAPI = (note_id: number): Promise<any> =>
    apiClients<any>(`/notes/delete/${note_id}`, "DELETE");
