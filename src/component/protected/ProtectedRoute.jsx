import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export default function ProtectedRoute({ children }) {
    const [isAdmin, setIsAdmin] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const storedRole = localStorage.getItem("isAdmin");
                if (storedRole !== null) {
                    setIsAdmin(storedRole === "true");
                } else {
                    // Fetch role from Firestore
                    const userRef = doc(db, "users", user.uid);
                    const userSnap = await getDoc(userRef);
                    if (userSnap.exists() && userSnap.data().role === "admin") {
                        localStorage.setItem("isAdmin", "true");  // Store admin status
                        setIsAdmin(true);
                    } else {
                        localStorage.setItem("isAdmin", "false");
                        setIsAdmin(false);
                    }
                }
            } else {
                localStorage.setItem("isAdmin", "false");
                setIsAdmin(false);
            }
            setLoading(false);
        });

        return () => unsubscribe(); // Cleanup listener
    }, []);

    if (loading) return <p>Loading...</p>;

    return isAdmin ? children : <Navigate to="/login" />;
}
