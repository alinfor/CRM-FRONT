import React from "react";
import PropTypes from 'prop-types';

export default function ResetPassword({ handleChange, email, handleOnSubmit,HandleReturnLogin }) {
  return (
    <div className="w-full max-w-xs">

        <a className="inline-block align-baseline 
          font-bold text-sm text-blue-500 hover:text-blue-800" href="#"
          onClick={HandleReturnLogin}>
            Retour en arriere
          </a>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleOnSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="resetEmail">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3
                text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="resetEmail"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={email}
            required
            autoComplete="email"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700
             text-white font-bold py-2 px-4 rounded focus:outline-none
              focus:shadow-outline"
            type="submit"
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
}

ResetPassword.propTypes = {
  handleChange: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
};
