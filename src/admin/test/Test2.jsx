

import React, { useEffect, useState } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { firdb } from '../../../firebase';
import { toast } from 'react-toastify';
import { TabPanel } from '@mui/joy';
import './Test.css';


const Test2 = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const querySnapshot = await getDocs(collection(firdb, "product"));
            const items = querySnapshot.docs.map(doc => doc.data());
            setData(items);
            setLoading(false);
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }
    console.log(data);

    return (
        <div className='all_main'>
            <div className='px-4 md:px-0 mb-16 '>
                <div className="relative overflow-x-auto ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400  ">
                        <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]"
                        >
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    S.No
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Image
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Price
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Description
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        {data?.map((item, index) => {
                            const { title, productPrice, imageUrl, category, description, date, name } = item;
                            return (
                                <tbody className=''>
                                    <tr className="bg-gray-50 border-b  dark:border-gray-700"
                                    >
                                        <td className="px-6 py-4 text-black " >
                                            {index + 1}.
                                        </td>
                                        <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                            <img className='w-16' src={imageUrl} alt="img" />
                                        </th>
                                        <td className="px-6 py-4 text-black " >
                                            {name}
                                        </td>
                                        <td className="px-6 py-4 text-black " >
                                            ₹{productPrice}
                                        </td>
                                        <td className="px-6 py-4 text-black " >
                                            {description}
                                        </td>
                                        <td className="px-6 py-4 text-black " >
                                            {date}
                                        </td>

                                    </tr>

                                </tbody>
                            )
                        })}
                    </table>

                </div>
            </div>
        </div>
    );
};

export default Test2;