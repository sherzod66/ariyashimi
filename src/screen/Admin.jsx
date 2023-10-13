import { useContext } from 'react'
import AdminAuth from '../components/admin/adminAuth/AdminAuth'
import { AuthContext } from '../components/context/AuthProvuder'
import AdminDetail from '../components/admin/AdminDetail'

const Admin = () => {
	const { adminAuth, setAuth } = useContext(AuthContext)
	return <>{adminAuth ? <AdminDetail /> : <AdminAuth />}</>
}
export default Admin
