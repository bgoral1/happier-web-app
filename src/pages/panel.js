import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { FirebaseContext } from 'components/Firebase/context';
import UserPanelTemplate from 'templates/UserPanelTemplate/UserPanelTemplate';
import AddInstitution from 'components/organisms/AddInstitution/AddInstitution';

const PanelPage = () => {
  const { user } = useContext(FirebaseContext);

  return (
    <>
      {!user ||
        (!user.email && (
          <>
            {user.isAdmin !== true && user.isInstitution !== true && (
              <>
                <span>
                  Tylko zweryfikowane instytucje mogą zobaczyć tę stronę.
                </span>
                <span>
                  Jeśli jesteś przedstawicielem instytucji chcącej dołączyć do
                  programu, skontaktuj się z administratorem strony w celu
                  uzyskania dostępu do panelu.
                </span>
                <Link to="/">Wróć do strony głównej</Link>
              </>
            )}
          </>
        ))}
      {!!user.isAdmin && <AddInstitution />}
      {!!user.isInstitution && <UserPanelTemplate />}
    </>
  );
};

export default PanelPage;
