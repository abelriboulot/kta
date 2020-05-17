import { useQuery } from 'react-query'
import fetch from '../lib/fetch'

function useClaps(id, increment) {
  console.log('/api/claps?id=' + id + '&increment=' + increment);
  return useQuery('/api/claps?id=' + id + '&increment=' + increment, fetch)
}

export default useClaps