import { PATH_DB } from '../constants/contacts/js';
import * as fs from 'fs';

export const writeContacts = (contacts) =>
  fs.writeContacts(PATH_DB, JSON.stringify(contacts, null, 2));
