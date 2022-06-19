import { useSelector } from "react-redux";

import { ItemFieldName, ItemFormType } from "../../model/enum";
import { APIResponse } from "../../model/response";
import { State } from "../../model/state";

export const ItemDetails: React.FC = () => {
  const { homePageState }: any = useSelector((state) => state);
  const state: State = homePageState;
  const isSelectedOption = (
    field: APIResponse.Field,
    option: APIResponse.XOption
  ): boolean => {
    if (field.name === ItemFieldName.KnownErrorTypeId) {
      if (option.text === state.itemDetails.entity?.data?.type?.name) {
        return true;
      }
      return false;
    } else if (field.name === ItemFieldName.Status) {
      if (option.text === state.itemDetails.entity?.data?.status?.name) {
        return true;
      }
      return false;
    } else {
      return false;
    }
  };
  return (
    <div role={"form"} className="home-form">
      <p className="home-form-title">{state.form?.displayName}</p>
      <form>
        {state.form?.fieldsets?.map((fieldSet) => (
          <>
            {fieldSet?.fields?.map((field, index: number) => (
              <>
                {field?.type === ItemFormType.Select ? (
                  <div key={index} role={"listitem"} className="home-form-type">
                    <label htmlFor={field?.name}>{field?.displayName}</label>
                    <select key={field?.name} name={field?.name}>
                      {field["x-options"]?.map((option) => (
                        <option
                          selected={isSelectedOption(field, option)}
                          value={option.value}
                        >
                          {option.text}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : field?.type === ItemFormType.CheckBox ? (
                  <div
                    key={index}
                    aria-checked
                    role={"checkbox"}
                    className="home-form-type"
                  >
                    <input
                      type={field?.type}
                      checked={state.itemDetails.entity?.data?.isPrivate}
                    />{" "}
                    {field?.displayName}
                    <br />
                  </div>
                ) : field?.type === ItemFormType.Text ? (
                  <div key={index} role={"textbox"} className="home-form-type">
                    <label htmlFor={field?.name}>{field?.displayName}</label>
                    <input
                      type={field?.type}
                      value={state.itemDetails.entity?.data?.summary}
                    />
                  </div>
                ) : (
                  ""
                )}
              </>
            ))}
          </>
        ))}
      </form>
    </div>
  );
};
