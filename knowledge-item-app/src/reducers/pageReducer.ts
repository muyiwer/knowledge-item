import { HomePageActions } from "../context/pageAction";
import { ActionModel } from "../model/action";
import { ItemBusinessService } from "../service/item";
import { HomePageThunkService } from "../service/thunk";

export class StateReducers {
    static HomePage(state: any = {}, action: ActionModel) {
        switch (action.type) {
            case HomePageActions.Set_Page_State:
                return action.payload;
            case HomePageActions.Get_Items:
                HomePageThunkService.GetItems(() => { }, action.payload)
                return action.payload;
            case HomePageActions.Get_Item_Details:
                action.payload = ItemBusinessService.GetItemDetails(action.payload)
                HomePageThunkService.GetItemDetails(() => { }, action.payload)
                return action.payload;
            default:
                return state;
        }
    }
} 