import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import SingleContact from "../SingleContact/SingleContact";
import "./ContactList.css";

const ContactList = ({ filteredContacts }) => {
  return (
    <TransitionGroup component="ul" className="ContactList">
      {filteredContacts.map((contact, id) => (
        <CSSTransition key={id} classNames="ListItem" timeout={250}>
          <SingleContact contact={contact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.string,
      namber: PropTypes.string,
    })
  ).isRequired,
};
