import axios from 'axios';

export const postMail = (senderName, subject, mail, email) => async (dispatch) => {
  const data = { senderName, subject, mail, email };
  axios.post(`/api/mail`, data);
};
