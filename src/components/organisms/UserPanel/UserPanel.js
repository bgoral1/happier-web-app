import React, { useContext } from 'react';
import PetsList from 'components/organisms/PetsList/PetsList';
import UserPanelTemplate from 'templates/UserPanelTemplate/UserPanelTemplate';
import { FirebaseContext } from 'context/Firebase/context';

const UserPanel = () => {
  const { firebase, user } = useContext(FirebaseContext);

  return (
    <UserPanelTemplate>
      {!!firebase && !!user && <PetsList firebase={firebase} user={user} />}
    </UserPanelTemplate>
  );
};

export default UserPanel;
