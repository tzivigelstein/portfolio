import { useContext } from 'react'
import appContext from '../context/app/appContext'

const useApp = () => useContext(appContext)

export default useApp
