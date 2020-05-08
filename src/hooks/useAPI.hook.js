import { useState, useEffect, useContext } from 'react';

import apiService from '../services/api.service';
import { FirebaseContext } from '../firebase';

function useAPI(method, ...params) {
  const firebase = useContext(FirebaseContext);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setError(null);

    try {
      setIsLoading(true);
      window.apiService = apiService;
      const fetchdata = await apiService[method](firebase, ...params);
      window.fetchdata = fetchdata;
      debugger;
      setData(fetchdata);
    } catch (e) {
      debugger;
      console.log(e);
      setError(e.message);
    } finally {
      debugger;
      setIsLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  return [isLoading, error, data, fetchData];
}

export default useAPI;
