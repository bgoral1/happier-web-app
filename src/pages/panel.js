import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { FirebaseContext } from 'components/Firebase/context';
import UserPanelTemplate from 'templates/UserPanelTemplate/UserPanelTemplate';

const PanelPage = () => {
  const { user } = useContext(FirebaseContext);

  if (user === null || typeof user.isAdmin === 'undefined') {
    return (
      <>
        <span>Tylko zweryfikowane instytucje mogą zobaczyć tę stronę.</span>
        <Link to="/">Wróć do strony głównej</Link>
      </>
    );
  }
  return <UserPanelTemplate />;
};

export default PanelPage;
