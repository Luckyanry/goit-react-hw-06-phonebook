import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteContact } from "../../redux/actions/contactAction";
import "./SingleContact.css";

const SingleContact = ({ contact, deleteContact }) => {
  const { name, id, number } = contact;
  return (
    <li className="Contact">
      <h4>{name}</h4>
      <p>{number}</p>
      <button
        className="DelBtn"
        type="button"
        id={id}
        onClick={() => deleteContact(id)}
      >
        &#10008;
      </button>
    </li>
  );
};

const mapDispatchToProps = {
  deleteContact,
};

export default connect(null, mapDispatchToProps)(SingleContact);

SingleContact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string,
    namber: PropTypes.string,
  }).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
