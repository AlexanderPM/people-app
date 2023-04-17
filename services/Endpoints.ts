import { APISettings } from "~/services/ApiSettings";
import { PeopleResponseModel } from "~/model/PeopleResponseModal";

export async function getPeopleData(): Promise<PeopleResponseModel> {
    const response = await fetch(`${APISettings.baseURL}/api/people`, { headers: APISettings.headers });
    return await response.json();
}