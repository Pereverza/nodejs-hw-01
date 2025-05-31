import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/createFakeContact.js"; 
const generateContacts = async (number) => {

    const contact = Array(number).fill(0).map(createFakeContact);
    const prevContact = await readContacts();

    await writeContacts([...prevContact, ...contact]);

};

generateContacts(5);
