import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const SocialForm = () => {
  return (
    <Formik
      initialValues={{
        facebook: '',
        instagram: '',
        linkedin: '',
        twitter: '',
        website: '',
        moto: '',
        about: '',
      }}
      onSubmit={(values) => {
        console.log('Form Submitted:', values);
      }}
    >
      <Form className="flex flex-col items-center justify-center h-screen dark">
        <div className="w-full max-w-md bg-gray-800 rounded-3xl shadow-2xl p-6">

          <label className="text-white px-5" htmlFor="facebook">Facebook</label>
          <Field
            type="text"
            name="facebook"
            id="facebook"
            className="rounded w-full p-2 mb-4"
          />
          <ErrorMessage name="facebook" component="div" className="text-red-500" />

          <label className="text-white px-5" htmlFor="instagram">Instagram</label>
          <Field
            type="text"
            name="instagram"
            id="instagram"
            className="rounded w-full p-2 mb-4"
          />
          <ErrorMessage name="instagram" component="div" className="text-red-500" />

          <label className="text-white px-5" htmlFor="linkedin">LinkedIn</label>
          <Field
            type="text"
            name="linkedin"
            id="linkedin"
            className="rounded w-full p-2 mb-4"
          />
          <ErrorMessage name="linkedin" component="div" className="text-red-500" />

          <label className="text-white px-5" htmlFor="twitter">Twitter</label>
          <Field
            type="text"
            name="twitter"
            id="twitter"
            className="rounded w-full p-2 mb-4"
          />
          <ErrorMessage name="twitter" component="div" className="text-red-500" />

          <label className="text-white px-5" htmlFor="website">Website</label>
          <Field
            type="text"
            name="website"
            id="website"
            className="rounded w-full p-2 mb-4"
          />
          <ErrorMessage name="website" component="div" className="text-red-500" />

          <label className="text-white px-5" htmlFor="moto">Moto</label>
          <Field
            type="text"
            name="moto"
            id="moto"
            className="rounded w-full p-2 mb-4"
          />
          <ErrorMessage name="moto" component="div" className="text-red-500" />

          <label className="text-white px-5" htmlFor="about">About</label>
          <Field
            as="textarea"
            name="about"
            id="about"
            className="rounded w-full p-2 mb-4"
            rows="4"
          />
          <ErrorMessage name="about" component="div" className="text-red-500" />

          <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SocialForm;
