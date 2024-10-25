import axios from 'axios';

const api = axios.create({
  baseURL: 'http://127.0.0.1:8000/api', // Django backend URL
});

export const fetchComponents = () => api.get('/components/');
export const fetchVehicles = () => api.get('/vehicles/');
export const fetchIssues = () => api.get('/issues/');
export const fetchInvoices = () => api.get('/invoices/');