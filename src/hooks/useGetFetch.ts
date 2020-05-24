import { useState, useCallback, useEffect } from 'react'
import axios from 'axios'

export function useGetFetch(url: string, params: string): Array<any> {
  const [result, setResult] = useState<Array<any>>([])
  const [loaded, setLoaded] = useState<boolean>(false)

  const fetchData = useCallback(async () => {
    console.log(`url: ${url}, params: ${params}`)
    const {
      data: {
        data: { results }
      }
    } = await axios.get(`${url}?${params}`, {
      timeout: 10 * 1000
    })
    console.log(`result: ${results}`)
    setResult(results)
    setLoaded(true)
  }, [url, params])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return [loaded, result]
}
