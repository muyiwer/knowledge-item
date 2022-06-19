import { HomePageActions } from "../context/pageAction";
import { store } from "../context/store";
import { ItemsEnum } from "../model/enum";
import { APIResponse } from "../model/response";
import { State } from "../model/state";
import items from "../data/items.json";
import formsData from '../data/form.json'

export class HomePageThunkService {
    static GetItems = async (dispatch: any, state: State) => {
        //This is implemented for React Jest Test Cases 
        setTimeout(() => {
            store.dispatch({
                type: HomePageActions.Set_Page_State,
                payload: { ...state, response: items }
            });
        }, 1);

        //This is implemented for development and production scenerio only
        // const url: string = `${process.env.PUBLIC_URL}/items.json`
        // await fetch(url).then((response) => {
        //     response.json().then(async (items) => {
        //         store.dispatch({
        //             type: HomePageActions.Set_Page_State,
        //             payload: { ...state, response: items }
        //         });
        //     });
        // });
    }
    static GetItemDetails = async (dispatch: any, state: State) => {
        //This is implemented for React Jest Test Cases can also be used fo
        const form: APIResponse.Form = formsData?.forms?.filter((form: APIResponse.Form) => {
            return form.name === ItemsEnum.UpdateKnowledgeItemBasicDetails
        })[0];
        setTimeout(() => {
            store.dispatch({
                type: HomePageActions.Set_Page_State,
                payload: { ...state, form }
            });
        }, 1);

         //This is implemented for development and production scenerio only
        // const url: string = `${process.env.PUBLIC_URL}/items.json`
        // await fetch(url).then((response) => {
        //     response.json().then(async (data) => {
        //         const form: APIResponse.Form = data?.forms?.filter((form: APIResponse.Form) => {
        //             return form.name === ItemsEnum.UpdateKnowledgeItemBasicDetails
        //         })[0];
        //         store.dispatch({
        //             type: HomePageActions.Set_Page_State,
        //             payload: { ...state, form }
        //         });
        //     });
        // });
    }
}