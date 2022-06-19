/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

import { State } from "../../model/state";
import { HomePageActions } from "../../context/pageAction";
import { DateTime } from "../../service/dateTime";
import { ItemDetails } from "./itemDetails";

export const DataTable: React.FC = () => {
  const dispatch = useDispatch();
  const { homePageState }: any = useSelector((state) => state);
  const state: State = homePageState;

  const getItems = useCallback(() => {
    dispatch({
      type: HomePageActions.Get_Items,
      payload: {
        ...state,
      },
    });
  }, [state]);

  const viewItemDetails = useCallback(
    (itemId: number) => {
      dispatch({
        type: HomePageActions.Get_Item_Details,
        payload: {
          ...state,
          isViewDetails: true,
          itemId,
        },
      });
    },
    [state]
  );

  useMemo(() => {
    getItems();
  }, []);

  return (
    <div
      role={state.isViewDetails ? "grid" : "table"}
      data-testid="home-table"
      className={state.isViewDetails ? "home-table-grid" : "home-table"}
    >
      <table>
        <thead>
          <tr>
            <th data-testid="table-header-type">Type #</th>
            <th data-testid="table-header-summary">Summary</th>
            <th data-testid="table-header-private">Private</th>
            {state.isViewDetails ? (
              ""
            ) : (
              <>
                <th
                  data-testid="table-header-status"
                  className="home-table-row-status"
                >
                  Status
                </th>
                <th
                  data-testid="table-header-service"
                  className="home-table-row-service"
                >
                  Service
                </th>
                <th
                  data-testid="table-header-author"
                  className="home-table-row-author"
                >
                  Author
                </th>
                <th
                  data-testid="table-header-created"
                  className="home-table-row-created-on"
                >
                  Created
                </th>
                <th
                  data-testid="table-header-updated"
                  className="home-table-row-updated-on"
                >
                  Updated
                </th>
              </>
            )}
          </tr>
        </thead>
        <tbody key={1}>
          {state.response?.collection?.items?.map((item, index: number) => (
            <tr
              key={index}
              data-testid={`table-row-${index}`}
              style={{
                backgroundColor:
                  state.itemId === item.entity?.data?.id
                    ? "rgb(132 155 167)"
                    : "",
              }}
              onClick={() => viewItemDetails(item.entity?.data?.id as number)}
            >
              <td>
                <div style={{ display: "flex" }}>
                  <button className="home-table-row-type">?</button>{" "}
                  <span>{item.entity?.data?.number}</span>
                </div>
              </td>
              <td>
                {(item.entity?.data?.summary?.length as number) > 32
                  ? `${item.entity?.data?.summary?.substring(0, 32)}...`
                  : item.entity?.data?.summary}
              </td>
              <td>
                {item.entity?.data?.isPrivate ? (
                  <FontAwesomeIcon color="green" icon={faCheck} />
                ) : (
                  <FontAwesomeIcon color="red" icon={faXmark} />
                )}
              </td>
              {state.isViewDetails ? (
                ""
              ) : (
                <>
                  <td className="home-table-row-status">
                    {item.entity?.data?.status?.name}
                  </td>
                  <td className="home-table-row-service">
                    {item.entity?.data?.service?.name}
                  </td>
                  <td className="home-table-row-author">
                    {item.entity?.data?.author?.name}
                  </td>
                  <td className="home-table-row-created-on">
                    {new DateTime().ConvertDateToFieldDateAndTime(
                      item.entity?.data?.createdOn as string
                    )}
                  </td>
                  <td className="home-table-row-updated-on">
                    {new DateTime().ConvertDateToFieldDateAndTime(
                      item.entity?.data?.updatedOn as string
                    )}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      {state.isViewDetails ? <ItemDetails /> : ""}
    </div>
  );
};
