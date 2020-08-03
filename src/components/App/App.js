import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { contactStorage } from "../../redux/actions/contactAction";
import { handleFilter } from "../../redux/actions/filterAction";
import ContactForm from "../ContactForm/ContactForm";
import Filter from "../Filter/Filter";
import ContactList from "../ContactList/ContactList";
import "./App.css";

class App extends Component {
  state = {
    animation: false,
  };

  componentDidMount() {
    this.setState((state) => ({
      animation: !state.animation,
    }));

    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      this.props.contactStorage(JSON.parse(savedContacts));
    }
  }

  componentDidUpdate(prevProps) {
    const { contacts } = this.props;
    if (prevProps.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  getFilteredContact = () => {
    const { contacts, filter } = this.props;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    return (
      <div className="Container">
        <CSSTransition
          in={true}
          appear={true}
          classNames="Title-slideIn"
          timeout={500}
          unmountOnExit
        >
          <h1 className="AppTitle">Phonebook</h1>
        </CSSTransition>

        <ContactForm />

        {this.props.contacts.length === 0 && (
          <>
            <h2 className="ContactTitle">Contacts</h2>
            <p>Contacts list is empty. Please, create new cotnact!</p>
          </>
        )}

        <CSSTransition
          in={this.props.contacts.length > 1}
          classNames="FilterAnimation"
          timeout={250}
          unmountOnExit
        >
          <Filter state={this.state} handleFilter={this.handleFilter} />
        </CSSTransition>

        <ContactList filteredContacts={this.getFilteredContact()} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = {
  contactStorage,
  handleFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
