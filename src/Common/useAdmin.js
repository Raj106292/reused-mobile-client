import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setIsAdmin] = useState(false);
    const [adminLoader, setAdminLoader] = useState(true);

    useEffect(() => {
        if(email){
            fetch(`${process.env.REACT_APP_server}/users/admin/${email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.isAdmin);
                setAdminLoader(false);
            })
        }
    }, [email])
    return [isAdmin, adminLoader]
}

export default useAdmin;