import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import axios from "axios";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const UpdateSocialMediaURL = () => {
  const [facebookURL, setFacebookURL] = useState("");
  const [instagramURL, setInstagramURL] = useState("");
  const [twitterURL, setTwitterURL] = useState("");
  const [linkedinURL, setLinkedinURL] = useState("");

  const [showForm, setShowForm] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");

  useEffect(() => {
    const fetchURLs = async () => {
      try {
        const response = await axios.get(""); 
        setFacebookURL(response.data.facebookURL);
        setInstagramURL(response.data.instagramURL);
        setTwitterURL(response.data.twitterURL);
        setLinkedinURL(response.data.linkedinURL);
      } catch (error) {
        console.error("Error getting URLs:");
      }
    };

    fetchURLs();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(""); 
      console.log(response.data);
    } catch (error) {
      console.error("Error updating URL:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
     
      <div className="flex space-x-4 mb-8">
        <button
          onClick={() => { setSelectedPlatform("facebook"); setShowForm(true); }}
          className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
        >
          <FaFacebook className="text-3xl cursor-pointer hover:text-blue-700" />
        </button>

        <button
          onClick={() => { setSelectedPlatform("instagram"); setShowForm(true); }}
          className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
        >
          <FaInstagram className="text-3xl cursor-pointer hover:text-pink-700" />
        </button>

        <button
          onClick={() => { setSelectedPlatform("twitter"); setShowForm(true); }}
          className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
        >
          <FaTwitter className="text-3xl cursor-pointer hover:text-blue-500" />
        </button>

        <button
          onClick={() => { setSelectedPlatform("linkedin"); setShowForm(true); }}
          className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
        >
          <FaLinkedin className="text-3xl cursor-pointer hover:text-blue-800" />
        </button>
      </div>

    
      {showForm && (
        <Formik
          initialValues={{
            url:
              selectedPlatform === "facebook"
                ? facebookURL
                : selectedPlatform === "instagram"
                ? instagramURL
                : selectedPlatform === "twitter"
                ? twitterURL
                : linkedinURL,
          }}
          enableReinitialize={true}
          onSubmit={handleSubmit}
        >
          <Form className="flex items-center justify-center min-h-screen">
            <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg border border-white border-opacity-30 rounded-full shadow-xl w-96 p-4">
              <div className="flex items-center space-x-4">
                <Field
                  type="url"
                  name="url"
                  placeholder="Enter URL"
                  className="rounded-full p-2 w-full bg-transparent border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="bg-purple-600 text-white p-2 rounded-full">
                  Update
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      )}
    </div>
  );
};

export default UpdateSocialMediaURL;
