import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth,db } from "../../firebase";
import { doc,getDoc } from "firebase/firestore";

export default function ProtectedRoute({ children }) {
    const [isAdmin, setIsAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAdmin = async () => {
            const user = auth.currentUser;
            if (user) {
                const userRef = doc(db, "users", user.uid);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists() && userSnap.data().role === "admin") {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            } else {
                setIsAdmin(false);
            }
            setLoading(false);
        };

        checkAdmin();
    }, []);

    if (loading) return <p>Loading...</p>;

    return isAdmin ? children : <Navigate to="/login" />;
}
