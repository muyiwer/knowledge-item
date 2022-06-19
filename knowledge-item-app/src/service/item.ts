import { APIResponse } from "../model/response";
import { State } from "../model/state";

export class ItemBusinessService {
    static GetItemDetails(state: State): State {
        const itemDetails: APIResponse.Item = state.response?.collection?.items?.filter(item => {
            return item.entity?.data?.id === state.itemId
        })[0] as APIResponse.Item;
        state = {
            ...state,
            itemDetails
        }
        return state;
    }
}