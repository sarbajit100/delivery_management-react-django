import React, { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { fetchInvoices } from '../api';

const RevenueGraph = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchInvoices().then((response) => {
      const formattedData = response.data.map(invoice => ({
        date: new Date(invoice.date_created).toLocaleDateString(),
        totalCost: invoice.total_cost,
      }));
      setData(formattedData);
    });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="totalCost" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueGraph;
