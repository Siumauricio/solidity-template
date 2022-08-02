// compile code will go here
import path from 'path';
import fs from 'fs';
import solc from 'solc';

// c:/Users/user/Desktop/contracts/Inbox.js
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(source, 1).contracts[':Inbox'];
