import axios from 'axios';

const apiService = {
  fetchNews: async (firebase) => {
    const token = await firebase.fetchUserToken();

    return axios({
      method: 'post',
      url: `${process.env.BACKEND_URL}/getNews`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    }).then(response => {
      debugger;
      if(response.data && response.data.status) {
        return response.data.data;
      }
    })
    .catch(error => {
      return error
    });
  }
};

export default apiService;
