import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import { HiOutlinePlusSm } from "react-icons/hi";
import { FaUserCircle } from "react-icons/fa";
import { Dispatch } from "redux";

interface ContactList {
  id: number;
  firstName: string;
  lastName: string;
  status: string;
}

interface ContactProps {
  contacts: ContactList[];
  deleteContact: (id: number) => void;
}

const Contact: React.FC<ContactProps> = ({ contacts, deleteContact }) => {
  return (
    <div className="flex flex-col justify-start mt-20 items-center w-full md:px-10">
      <Link to="/add">
        <button
          onClick={() => console.log("clicked")}
          className="flex bg-blue-500 px-4 py-3 text-white font-semibold rounded"
        >
          <HiOutlinePlusSm size="25px" />
          <span className="ml-1">Create Contact</span>
        </button>
      </Link>
      <div className="flex w-full flex-wrap mt-20 gap-8">
        {contacts?.length > 0 ? (
          contacts.map((contact, index) => {
            return (
              <div
                className="flex bg-white rounded-lg shadow-md overflow-hidden"
                key={index}
              >
                <div className="card p-6">
                  <div className="flex justify-center mb-4">
                    <FaUserCircle size="60px" />
                  </div>
                  {/* <h2 className="text-xl  font-bold mb-2">
                      Contact Details {index + 1}
                    </h2> */}
                  <div className="mb-4">
                    <label
                      htmlFor="label1"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      FirstName : <span> {contact.firstName}</span>
                    </label>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="label2"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      LastName : <span> {contact.lastName}</span>
                    </label>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="label2"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Status :{" "}
                      <span
                        className={`${
                          contact.status === "active"
                            ? "text-green-500"
                            : "text-red-500"
                        }`}
                      >
                        {contact.status}
                      </span>
                    </label>
                  </div>
                  <div className="flex">
                    <Link
                      to={`/edit/${contact.id}`}
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
                    >
                      Edit
                    </Link>
                    <button
                      className="bg-rose-500 hover:bg-rose-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => deleteContact(contact.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex justify-center w-full">
            <div className="bg-white flex border border-grey shadow p-5 rounded-lg mt-10">
              <RxCrossCircled
                className="mr-[15px] text-4xl text-rose-600"
                size="50px"
              />
              <div>
                <h1 className="font-[500] text-[20px]">No Contact Found</h1>
                <p>Please add Contact from Create Contact Button</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  deleteContact: (id: number) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
