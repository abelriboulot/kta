import useSWR from 'swr'
import fetch from '../lib/fetch'

function useClaps(id, increment) {
  console.log('/api/claps?id=' + id + '&increment=' + increment);
  return useSWR('/api/claps?id=' + id + '&increment=' + increment, fetch)
}

export default useClaps