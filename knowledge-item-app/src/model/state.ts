import { APIResponse } from "./response";

export interface State {
    response: APIResponse.KnowledgeItemResponse;
    form: APIResponse.Form;
    isViewDetails: boolean;
    itemDetails: APIResponse.Item;
    itemId:number
}