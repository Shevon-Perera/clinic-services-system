# Clinic Services Microservices System

This project is built with Node.js, Express.js, Swagger UI, and OpenAPI Specification for a clinic services domain with 6 members.

## Team Member Allocation
1. Shevon - Patient Service
2. Vinuki - Doctor Service
3. Pooji - Appointment Service
4. Dananjana - Pharmacy Service
5. Nethmi - Billing Service
6. Malindu - Notification Service

## Full Project Structure
```bash
clinic-services-system/
├── api-gateway/
├── patient-service/
├── doctor-service/
├── appointment-service/
├── pharmacy-service/
├── billing-service/
├── notification-service/
└── README.md
```

## Install Dependencies
Run these one by one from the root folder:

```bash
cd patient-service && npm install
cd ../doctor-service && npm install
cd ../appointment-service && npm install
cd ../pharmacy-service && npm install
cd ../billing-service && npm install
cd ../notification-service && npm install
cd ../api-gateway && npm install
```

## Run the Project
Open 7 terminals.

### Terminal 1
```bash
cd clinic-services-system/patient-service
npm run dev
```

### Terminal 2
```bash
cd clinic-services-system/doctor-service
npm run dev
```

### Terminal 3
```bash
cd clinic-services-system/appointment-service
npm run dev
```

### Terminal 4
```bash
cd clinic-services-system/pharmacy-service
npm run dev
```

### Terminal 5
```bash
cd clinic-services-system/billing-service
npm run dev
```

### Terminal 6
```bash
cd clinic-services-system/notification-service
npm run dev
```

### Terminal 7
```bash
cd clinic-services-system/api-gateway
npm run dev
```

## Native Swagger URLs
- http://localhost:5001/docs
- http://localhost:5002/docs
- http://localhost:5003/docs
- http://localhost:5004/docs
- http://localhost:5005/docs
- http://localhost:5006/docs

## API Gateway URLs
- http://localhost:4000/patients
- http://localhost:4000/doctors
- http://localhost:4000/appointments
- http://localhost:4000/pharmacy
- http://localhost:4000/billing
- http://localhost:4000/notifications

## Swagger Through Gateway
- http://localhost:4000/patient-docs
- http://localhost:4000/doctor-docs
- http://localhost:4000/appointment-docs
- http://localhost:4000/pharmacy-docs
- http://localhost:4000/billing-docs
- http://localhost:4000/notification-docs

## Member-by-Member Instructions

### Member 1 - Patient Service
```bash
cd clinic-services-system/patient-service
npm install
npm run dev
```
Test:
- http://localhost:5001/api/patients
- http://localhost:5001/docs

### Member 2 - Doctor Service
```bash
cd clinic-services-system/doctor-service
npm install
npm run dev
```
Test:
- http://localhost:5002/api/doctors
- http://localhost:5002/docs

### Member 3 - Appointment Service
```bash
cd clinic-services-system/appointment-service
npm install
npm run dev
```
Test:
- http://localhost:5003/api/appointments
- http://localhost:5003/docs

### Member 4 - Pharmacy Service
```bash
cd clinic-services-system/pharmacy-service
npm install
npm run dev
```
Test:
- http://localhost:5004/api/pharmacy
- http://localhost:5004/docs

### Member 5 - Billing Service
```bash
cd clinic-services-system/billing-service
npm install
npm run dev
```
Test:
- http://localhost:5005/api/billing
- http://localhost:5005/docs

### Member 6 - Notification Service
```bash
cd clinic-services-system/notification-service
npm install
npm run dev
```
Test:
- http://localhost:5006/api/notifications
- http://localhost:5006/docs

## Suggested Presentation Proof
1. Folder structure screenshot
2. Native Swagger screenshots
3. Direct endpoint screenshots
4. Gateway endpoint screenshots
5. Gateway Swagger screenshots
