package br.org.abmnet.dao;

import java.util.List;

import br.org.abmnet.model.Contact;

/**
 *
 * @author Mário Jorge
 */
public interface IContactDAO {

    List<Contact> getContacts();

    void deleteContact(int id);

    Contact saveContact(Contact contact);

}
