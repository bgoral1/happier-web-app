/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { FirebaseContext } from 'context/Firebase/context';
import AddInstitution from 'components/organisms/AddInstitution/AddInstitution';
import InstitutionPanel from 'components/organisms/InstitutionPanel/InstitutionPanel';
import PermissionDeniedInfo from 'components/organisms/PermissionDeniedInfo/PermissionDeniedInfo';

const PanelPage = () => {
  const { user } = useContext(FirebaseContext);

  return (
    <>
      {(user === null ||
        (user !== null &&
          user.isAdmin !== true &&
          user.isInstitution !== true)) && <PermissionDeniedInfo />}
      {user !== null && (
        <>
          {!!user.isAdmin && <AddInstitution />}
          {!!user.isInstitution && <InstitutionPanel />}
        </>
      )}
    </>
  );
};

export default PanelPage;
