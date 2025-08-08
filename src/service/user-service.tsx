import { apiClient } from "../config/apiClient";
import { apiClients } from "../config/apiClients";

export const fetchUserAPI = (): Promise<any> =>
    apiClients<any>(`/users/me`, "GET");

export const registerAPI = (data: any): Promise<any> =>
    apiClients<any>("/users/register", "Post", data);


export const updateUserAPI = (user_id: number, data: any): Promise<any> =>
    apiClients<any>(`/users/${user_id}`, "PUT", data);


export const deleteUserAPI = (user_id: number): Promise<any> =>
    apiClients<any>(`/users/${user_id}`, "DELETE");


export const updatePasswordAPI = (user_id: number, data: any): Promise<any> =>
    apiClients<any>(`/users/${user_id}/password`, "PUT", data);


export const loginAPI = (email: string, password: string): Promise<any> => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    return apiClient<any>("/users/login", "POST", formData);
};