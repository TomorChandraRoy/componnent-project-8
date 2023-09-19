import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phone = () => {

    const [phones, setphones] = useState([]);

    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setphones(data.data) )


        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data =>{
            const phonedata = data.data.data;
            const phoneFackData = phonedata.map(singleData =>{
                const obj= {
                    name: singleData.phone_name,
                    price: parseInt(singleData.slug.split('-')[1])
                }
                return obj;
            } )
            setphones(phoneFackData)
        })

    }, [])
   
    return (
        <div className="text-center mt-5">
            <h2 className="text-5xl">{phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
            <XAxis dataKey={'name'}></XAxis>
            <YAxis></YAxis>
            <Tooltip></Tooltip>
          <Bar dataKey="price" fill="#8884d8" />
        </BarChart>
        </div>
    );
};

export default Phone;
