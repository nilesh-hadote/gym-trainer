# REST API Specification (v1)

Base URL: `/api/v1`

## Endpoints

### Authentication
- `POST /api/v1/auth/login`
  - Body: `{ "email": "client@example.com", "password": "client123" }`
  - Response: `{ "token": "JWT_TOKEN", "user": { ... } }`

- `POST /api/v1/auth/register`
  - Body: `{ "fullName": "Rahul Sharma", "email": "rahul@example.com", "password": "pass", "phone": "+91 98765 43210" }`

### Public Resources
- `GET /api/v1/packages`: Get coaching packages & INR pricing.
- `GET /api/v1/blog`: List fitness articles.
- `GET /api/v1/blog/{slug}`: Fetch full blog guide by slug.
- `GET /api/v1/exercises`: Fetch exercise database.
- `GET /api/v1/food-items`: Fetch Indian food macro database.

### Inquiries & Appointments
- `POST /api/v1/appointments`: Book consultation slot.
- `POST /api/v1/mentorship`: Submit 1-on-1 mentorship application.
- `POST /api/v1/contact`: Submit contact inquiry.

### Client Dashboard
- `GET /api/v1/check-ins/user/{userId}`: Fetch user check-in history.
- `POST /api/v1/check-ins`: Submit daily weight, energy, sleep & diet log.
