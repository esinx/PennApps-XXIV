import Metaphor from 'metaphor-node';
import { useEffect,useState } from 'react';

type FetchState = {
  data: null | string;
  loading: boolean;
  error: null | string;
};

const useFetch = (keyword: string): FetchState => {
  const [data, setData] = useState<null | string>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  const metaphor = new Metaphor('49b61223-c208-4fb9-89ff-a172cadc278d')

  const getResultsAndContent = async (query: string) => {
	const searchResponse = await metaphor.search(query, {numResults: 2});
    return ((await metaphor.getContents(searchResponse.results)).contents);
    };

  useEffect(() => {
    getResultsAndContent(keyword)
    .then((value) => {
        setData(value);
        setLoading(false);
    })
    .catch((error) => {
        setError(error);
        console.error("An error occured:", error);
        setLoading(false);
    });
  }, [])

  return (data, loading, error);

}

export default useFetch;