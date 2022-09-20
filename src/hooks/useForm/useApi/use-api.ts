import useSWR from 'swr'
import ApiCangular from '../../../path/Api/instance-pichincha'

export const useGetGlobal = ( key:any, interval:boolean ) => {
  type ResponseType = any[]

  const fetcher = async (key: any): Promise<ResponseType> => {
    const resp = await ApiCangular.get(key).then((res) => res.data)
    return resp
  }

  const Activeinterval = interval ? { refreshInterval: 2000 } : (null as any)
  const { data, error } = useSWR(key, fetcher, Activeinterval)

  return {
    data,
    isLoading: !error && !data,
    isError: error
  }
}
