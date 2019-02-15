import React from 'react';

const Mailbox = ({ userName }) => <p>{userName}</p>;

export default React.memo(Mailbox);
