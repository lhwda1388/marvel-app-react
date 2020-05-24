import { useState, useCallback, useEffect } from 'react'
import axios from 'axios'

export function useGetFetch(url: string, params: string): Array<any> {
  const [result, setResult] = useState<Array<any>>([])
  const [loaded, setLoaded] = useState<boolean>(false)

  const fetchData = useCallback(async () => {
    const instance = axios.create()
    console.log(`url: ${url}, params: ${params}`)
    try {
      const {
        data: {
          data: { results }
        }
      } = await instance.get(`${url}?${params}`, {
        timeout: 3 * 1000
      })
      console.log(`result: ${results}`)
      setResult(results)
      setLoaded(true)
    } catch (error) {
      setLoaded(true)
    }
  }, [url, params])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return [loaded, result]
}
