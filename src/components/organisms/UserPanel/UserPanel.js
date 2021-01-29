import React, { useContext, useState } from 'react';
import { FirebaseContext } from 'context/Firebase/context';
import PetsList from 'components/organisms/PetsList/PetsList';
import UserPanelTemplate from 'templates/UserPanelTemplate/UserPanelTemplate';
import AddPet from 'components/organisms/AddPet/AddPet';

const UserPanel = () => {
  const { firebase, user } = useContext(FirebaseContext);
  const [petToUpdate, setPetToUpdate] = useState(null);

  return (
    <UserPanelTemplate>
      {!!firebase && !!user && petToUpdate !== null && (
        <AddPet
          petToUpdate={petToUpdate}
          resetUpdate={() => setPetToUpdate(null)}
        />
      )}
      {!!firebase && !!user && petToUpdate === null && (
        <PetsList
          firebase={firebase}
          user={user}
          updatePet={pet => setPetToUpdate(pet)}
        />
      )}
    </UserPanelTemplate>
  );
};

export default UserPanel;
