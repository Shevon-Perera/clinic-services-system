require('dotenv').config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'Clinic Services API Gateway is running',
    routes: {
      patients: '/patients',
      doctors: '/doctors',
      appointments: '/appointments',
      pharmacy: '/pharmacy',
      billing: '/billing',
      notifications: '/notifications'
    },
    docs: {
      patientDocs: '/patient-docs',
      doctorDocs: '/doctor-docs',
      appointmentDocs: '/appointment-docs',
      pharmacyDocs: '/pharmacy-docs',
      billingDocs: '/billing-docs',
      notificationDocs: '/notification-docs'
    }
  });
});

app.use('/patients', createProxyMiddleware({
  target: 'http://localhost:5001',
  changeOrigin: true,
  pathRewrite: { '^/patients': '/api/patients' }
}));
app.use('/doctors', createProxyMiddleware({
  target: 'http://localhost:5002',
  changeOrigin: true,
  pathRewrite: { '^/doctors': '/api/doctors' }
}));
app.use('/appointments', createProxyMiddleware({
  target: 'http://localhost:5003',
  changeOrigin: true,
  pathRewrite: { '^/appointments': '/api/appointments' }
}));
app.use('/pharmacy', createProxyMiddleware({
  target: 'http://localhost:5004',
  changeOrigin: true,
  pathRewrite: { '^/pharmacy': '/api/pharmacy' }
}));
app.use('/billing', createProxyMiddleware({
  target: 'http://localhost:5005',
  changeOrigin: true,
  pathRewrite: { '^/billing': '/api/billing' }
}));
app.use('/notifications', createProxyMiddleware({
  target: 'http://localhost:5006',
  changeOrigin: true,
  pathRewrite: { '^/notifications': '/api/notifications' }
}));

app.use('/patient-docs', createProxyMiddleware({
  target: 'http://localhost:5001',
  changeOrigin: true,
  pathRewrite: { '^/patient-docs': '/docs' }
}));
app.use('/doctor-docs', createProxyMiddleware({
  target: 'http://localhost:5002',
  changeOrigin: true,
  pathRewrite: { '^/doctor-docs': '/docs' }
}));
app.use('/appointment-docs', createProxyMiddleware({
  target: 'http://localhost:5003',
  changeOrigin: true,
  pathRewrite: { '^/appointment-docs': '/docs' }
}));
app.use('/pharmacy-docs', createProxyMiddleware({
  target: 'http://localhost:5004',
  changeOrigin: true,
  pathRewrite: { '^/pharmacy-docs': '/docs' }
}));
app.use('/billing-docs', createProxyMiddleware({
  target: 'http://localhost:5005',
  changeOrigin: true,
  pathRewrite: { '^/billing-docs': '/docs' }
}));
app.use('/notification-docs', createProxyMiddleware({
  target: 'http://localhost:5006',
  changeOrigin: true,
  pathRewrite: { '^/notification-docs': '/docs' }
}));

module.exports = app;
