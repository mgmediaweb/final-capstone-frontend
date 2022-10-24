/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint linebreak-style: ["error", "windows"] */
import React, { useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../../components/button/Button';
import Form from '../../components/form/Form';

const EditScreen = () => {
  const { id } = useParams();
  const form = useRef();

  const formSubmit = () => {
    form.current.submit();
  };

  return (
    <div className="container page-admin">
      <div className="info-container">
        <h1>Edit car</h1>

        <form ref={form} action="#" method="post">

          <Form data={id} />

          <div className="grid-flex">
            <Link to="/admin">
              Back to admin
            </Link>

            <Button
              btnAxn={formSubmit}
              label="Save"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditScreen;
