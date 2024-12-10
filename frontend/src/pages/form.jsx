// import React, { useState, useEffect } from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import axios from 'axios';

// const SocialForm = () => {
//     const [loading, setLoading] = useState(true);
//     // const [error, setError] = useState(null);
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);
//         try {
//             const result = await axios.post('http://localhost:5174/updateUserField', {
//           });
         
//           setLoading(false);
//           console.log(result.data);
//         } catch (error) {
//           console.log(error);
//           setLoading(false);
//           console.error(error.response?.data || error.message);
//           alert("An error occurred while sending the data to the server. Please check the console.");
//         }
//       }
    

    
//   return (
//     <Formik
//       initialValues={{ facebook: '',  instagram: '', linkedin: '', twitter: '',  website: '',  moto: '', about: ''}}
       
//     >
//       <Form className="flex flex-col items-center justify-center h-screen dark">
//         <div className="w-full max-w-md bg-gray-800 rounded-3xl shadow-2xl p-6">

//           <label className="text-white px-5" htmlFor="facebook">Facebook</label>
//           <Field
//             value={Formik.initialValues.facebook}
//             type="text"
//             name="facebook"
//             id="facebook"
//             className="rounded w-full p-2 mb-4"
//           />
//           <ErrorMessage name="facebook" component="div" className="text-red-500" />

//           <label className="text-white px-5" htmlFor="instagram">Instagram</label>
//           <Field
//             value={Formik.initialValues.instagram}
//             type="text"
//             name="instagram"
//             id="instagram"
//             className="rounded w-full p-2 mb-4"
//           />
//           <ErrorMessage name="instagram" component="div" className="text-red-500" />

//           <label className="text-white px-5" htmlFor="linkedin">LinkedIn</label>
//           <Field
//             value={Formik.initialValues.linkedin}
//             type="text"
//             name="linkedin"
//             id="linkedin"
//             className="rounded w-full p-2 mb-4"
//           />
//           <ErrorMessage name="linkedin" component="div" className="text-red-500" />

//           <label className="text-white px-5" htmlFor="twitter">Twitter</label>
//           <Field
//             value={Formik.initialValues.twitter}
//             type="text"
//             name="twitter"
//             id="twitter"
//             className="rounded w-full p-2 mb-4"
//           />
//           <ErrorMessage name="twitter" component="div" className="text-red-500" />

//           <label className="text-white px-5" htmlFor="website">Website</label>
//           <Field
//             value={Formik.initialValues.website}
//             type="text"
//             name="website"
//             id="website"
//             className="rounded w-full p-2 mb-4"
//           />
//           <ErrorMessage name="website" component="div" className="text-red-500" />

//           <label className="text-white px-5" htmlFor="moto">Moto</label>
//           <Field
//             value={Formik.initialValues.moto}
//             type="text"
//             name="moto"
//             id="moto"
//             className="rounded w-full p-2 mb-4"
//           />
//           <ErrorMessage name="moto" component="div" className="text-red-500" />

//           <label className="text-white px-5" htmlFor="about">About</label>
//           <Field
//             value={Formik.initialValues.about}
//             as="textarea"
//             name="about"
//             id="about"
//             className="rounded w-full p-2 mb-4"
//             rows="4"
//           />
//           <ErrorMessage name="about" component="div" className="text-red-500" />

//           <button onClick={handleSubmit} type="submit" className="bg-blue-500 text-white p-2 rounded mt-4">
//             Submit
//           </button>
//         </div>
//       </Form>
//     </Formik>
//   );
// };

// export default SocialForm;
