import React, { useState } from 'react';
import Login from '../component/Login';
import ResetPassword from '../component/ResetPassword';

export default function Entier() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showResetPassword, setShowResetPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("handleOnSubmit");
    // Ajoutez ici la logique de validation
    if (email.trim() === '' || password.trim() === '') {
      console.error('Veuillez remplir tous les champs.');
      return;
    }
  };

  const handleResetPasswordLinkClick = (e) => {
    e.preventDefault();
    // Déclencher l'affichage du composant de réinitialisation du mot de passe lorsque le lien est cliqué
    setShowResetPassword(true);
  };
  const HandleReturnLogin = (e) => {
    e.preventDefault();
    // Déclencher l'affichage du composant de réinitialisation du mot de passe lorsque le lien est cliqué
    setShowResetPassword(false);
  };
  

  return (
    <div>
      {showResetPassword ? (
        <ResetPassword
          handleChange={handleChange}
          email={email}
          handleOnSubmit={handleOnSubmit}
          HandleReturnLogin={HandleReturnLogin}
        />
      ) : (
          <Login
            handleChange={handleChange}
            email={email}
            password={password}
            handleResetPasswordLinkClick={handleResetPasswordLinkClick}
            handleOnSubmit={handleOnSubmit}
          />
      )}
    </div>
  );
}
