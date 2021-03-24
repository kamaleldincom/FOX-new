import React from "react";
import {
  CLink,
  CCard,
  CCardHeader,
  CCardBody,
  CCardTitle,
  CListGroup,
  CListGroupItem,
} from "@coreui/react";
import _T from "../../services/localization";

const UserDetailCard = (props) => {
  return (
    <CCard>
      <CCardHeader className="d-flex justify-content-between">
        <CCardTitle>
          {props.userRole} {props.details.name} Details
        </CCardTitle>
        <CLink to={`${props.location.pathname}/edit`}>
          Edit {props.userRole}
        </CLink>
      </CCardHeader>
      <CCardBody>
        <CListGroup flush>
          {Object.entries(props.details).map(([key, value]) => {
            return (
              <CListGroupItem key={key}>
                <strong>
                  {_T(key).charAt(0).toUpperCase() +
                    _T(key).slice(1).replace("_", " ")}
                  :
                </strong>{" "}
                {value}
              </CListGroupItem>
            );
          })}
          {props.userRole == "Contractor" ? (
            <CListGroupItem>
              <CLink
                to={`/contractors/${props.match.params.id}/workers_review`}
              >
                See Workers Details
              </CLink>
            </CListGroupItem>
          ) : null}
        </CListGroup>
      </CCardBody>
    </CCard>
  );
};

export default UserDetailCard;
