/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import { FirebaseContext } from 'context/Firebase/context';
import AddInstitution from 'components/organisms/AddInstitution/AddInstitution';
import UserPanel from 'components/organisms/UserPanel/UserPanel';
import PermissionDeniedInfo from 'components/organisms/PermissionDeniedInfo/PermissionDeniedInfo';

const PanelPage = () => {
  const { user } = useContext(FirebaseContext);

  return (
    <>
      {user === null && <PermissionDeniedInfo />}
      {user !== null && (
        <>
          {!user.isAdmin && <UserPanel />}
          {!!user.isAdmin && <AddInstitution />}
        </>
      )}
    </>
  );
};

export default PanelPage;
