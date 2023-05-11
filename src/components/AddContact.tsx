import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Dispatch } from "redux";

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

interface AddContactProps {
  contacts: Contact[];
  addContact: (contact: Contact) => void;
}

const AddContact: React.FC<AddContactProps> = ({ contacts, addContact }) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Don't add data if any input field is empty
    if (!lastName || !firstName || !status) {
      return;
    }

    const data: Contact = {
      id: contacts?.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      lastName,
      firstName,
      status,
    };

    // Get existing data from localStorage
    let existingData = localStorage.getItem("contacts");

    if (!existingData) {
      existingData = "[]";
    }

    // Parse existing data into an array
    const parsedData: Contact[] = JSON.parse(existingData);

    // Add new data to the array
    parsedData.push(data);

    // Stringify the array back into JSON and store it in localStorage
    localStorage.setItem("contacts", JSON.stringify(parsedData));
    // Navigate back to home page
    addContact(data);
    navigate("/");
  };

  return (
    <>
      <div className="flex flex-col justify-start mt-20 items-center w-full ">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Create contact screen
        </h1>
        <div className="bg-white p-8 rounded-md shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center mb-4">
              <label htmlFor="name" className="w-1/4 whitespace-no-wrap">
                First Name:
              </label>
              <input
                type="text"
                id="name"
                className="w-3/4 p-2 border border-gray-400 rounded-md shadow-sm ml-8"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-4">
              <label htmlFor="name" className="w-1/4 whitespace-no-wrap">
                Last Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-3/4 p-2 border border-gray-400 rounded-md shadow-sm ml-8"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="flex items-center mb-4">
              <label htmlFor="status" className="w-1/4 whitespace-no-wrap">
                Status:
              </label>
              <div className="ml-8 flex flex-col">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    name="status"
                    value="Active"
                    checked={status === "Active"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <span className="ml-2">Active</span>
                </label>
                <label className="inline-flex items-center ">
                  <input
                    type="radio"
                    className="form-radio"
                    name="status"
                    value="Inactive"
                    checked={status === "Inactive"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <span className="ml-2">Inactive</span>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-6 mt-8 mx-auto rounded-md flex justify-center"
            >
              Save Contact
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state: any) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  addContact: (data: Contact) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
