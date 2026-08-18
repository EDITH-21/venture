# Vanguard Digital — Production-Ready MERN Platform

An ultra-premium, full-stack technology company website and venture studio platform engineered with the **MERN stack** (MongoDB, Express.js, React + Vite, Node.js).

---

## 1. Architectural Highlights

- **Pure MERN Stack**: Built exclusively with MongoDB, Express.js, React (Vite), and Node.js.
- **Original High-End Aesthetic**: Designed with an editorial palette including Obsidian (`#0D1117`), Graphite (`#161B22`), Warm Ivory (`#F5F1E8`), Warm White (`#FCFBF8`), Champagne accents (`#C8A96B`), and Sage (`#A8B9A5`).
- **Real Analytics Engine**: Anonymous session-based visitor telemetry capturing page hits, referrers, and device profiles with aggregate reporting.
- **Ventures Secrecy & Security**: Confidential R&D ventures strictly filter on `published: true` on public endpoints, ensuring stealth projects are never leaked.
- **Admin Suite & Cookie Auth**: Administrative portal featuring JWTs stored in secure HTTP-only cookies with bcrypt password hashing.
- **Dynamic 48-Service Catalog**: Categorized into Technology, Creative, and Digital with full detail views, deliverables, and FAQ accords.

---

## 2. Directory Structure

```text
mern-company/
├── client/                     # Frontend (React 18 + Vite + Tailwind CSS)
│   ├── public/
│   │   ├── favicon.svg
│   │   ├── robots.txt
│   │   └── sitemap.xml
│   ├── src/
│   │   ├── admin/             # Admin portal suite
│   │   │   ├── AdminLayout.jsx
│   │   │   ├── DashboardPage.jsx
│   │   │   ├── AnalyticsPage.jsx
│   │   │   ├── InquiriesPage.jsx
│   │   │   ├── ServicesPage.jsx
│   │   │   ├── ProjectsPage.jsx
│   │   │   ├── VenturesPage.jsx
│   │   │   └── SettingsPage.jsx
│   │   ├── components/
│   │   │   ├── common/        # Navbar, Footer, Button, SEOHead
│   │   │   ├── forms/         # InquiryForm
│   │   │   ├── home/          # HeroVisual, Positioning, SolutionsGrid, WorkShowcase, HowWeWork, VenturesPreview, LongTermAbout, CTASection
│   │   │   └── ProtectedRoute.jsx
│   │   ├── context/           # AuthContext, SettingsContext
│   │   ├── hooks/             # useAnalytics
│   │   ├── layouts/           # PublicLayout
│   │   ├── pages/             # HomePage, AboutPage, SolutionsPage, ServiceDetailPage, WorkPage, WorkDetailPage, VenturesPage, ContactPage, LoginPage, NotFoundPage
│   │   ├── services/          # api.js (Axios Client)
│   │   ├── styles/            # index.css (Tailwind & CSS tokens)
│   │   ├── utils/             # session.js (Anonymous tracker)
│   │   ├── App.jsx            # Router configuration
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── server/                     # Backend (Node.js + Express + Mongoose)
    ├── config/
    │   └── db.js              # Resilient MongoDB connection + fallback
    ├── controllers/
    │   ├── authController.js
    │   ├── serviceController.js
    │   ├── projectController.js
    │   ├── ventureController.js
    │   ├── inquiryController.js
    │   ├── analyticsController.js
    │   └── settingsController.js
    ├── middleware/
    │   ├── authMiddleware.js   # JWT verification & admin guard
    │   ├── errorMiddleware.js  # Global error & 404 handler
    │   └── rateLimiter.js      # Rate limiting protection
    ├── models/
    │   ├── User.js
    │   ├── ServiceCategory.js
    │   ├── Service.js
    │   ├── Project.js
    │   ├── Venture.js
    │   ├── Inquiry.js
    │   ├── AnalyticsEvent.js
    │   └── SiteSetting.js
    ├── routes/
    │   ├── authRoutes.js
    │   ├── serviceRoutes.js
    │   ├── projectRoutes.js
    │   ├── ventureRoutes.js
    │   ├── inquiryRoutes.js
    │   ├── analyticsRoutes.js
    │   └── settingsRoutes.js
    ├── utils/
    │   ├── generateToken.js
    │   ├── seedData.js        # Seed data with all 48 services & samples
    │   └── seeder.js          # Database populator script
    ├── .env
    ├── .env.example
    ├── package.json
    └── server.js
```

---

## 3. Quick Start & Installation

### Prerequisites
- **Node.js**: v18.0+ or v20.0+ (Tested on v24)
- **MongoDB**: Local MongoDB instance (`mongodb://localhost:27017/vanguard_digital`), MongoDB Atlas connection string, or standalone fallback.

### Step 1: Install Dependencies

```bash
# 1. Install Backend Dependencies
cd server
npm install

# 2. Install Frontend Dependencies
cd ../client
npm install
```

---

## 4. Environment Configuration

### Backend (`server/.env`):
```env
MONGO_URI=mongodb://localhost:27017/vanguard_digital
JWT_SECRET=vanguard_super_secure_jwt_secret_production_ready_key_99887766
CLIENT_URL=http://localhost:5173
PORT=5000
NODE_ENV=development
```

### Frontend (`client/.env`):
```env
VITE_API_URL=/api
```

---

## 5. Seed Database & Admin Account

Populate the database with all 48 required services, sample portfolio projects, initial stealth ventures, site settings, and the default administrator user:

```bash
cd server
npm run seed
```

### Default Administrator Credentials:
- **Email**: `admin@vanguard.tech`
- **Password**: `AdminPassword2026!`
- **Login URL**: `http://localhost:5173/admin/login`

---

## 6. Running the Application

### Start the Backend Server (Port 5000):
```bash
cd server
npm start
```
*API will run at `http://localhost:5000/api`*

### Start the Frontend Dev Server (Port 5173):
```bash
cd client
npm run dev
```
*Website will be accessible at `http://localhost:5173`*

---

## 7. REST API Endpoints Overview

| Method | Endpoint | Access | Description |
| :--- | :--- | :--- | :--- |
| **POST** | `/api/auth/login` | Public | Authenticates admin & sets HTTP-only cookie |
| **POST** | `/api/auth/logout` | Public | Clears JWT session cookie |
| **GET** | `/api/auth/me` | Protected | Returns current authenticated profile |
| **GET** | `/api/services` | Public | List published services (or all with `?all=true` for admin) |
| **GET** | `/api/services/:slug` | Public | Retrieve single service specification & related items |
| **POST** | `/api/services` | Admin | Create a new service |
| **PUT** | `/api/services/:id` | Admin | Update service details or toggle visibility |
| **DELETE** | `/api/services/:id` | Admin | Delete a service |
| **GET** | `/api/projects` | Public | List portfolio projects (enforces `published: true`) |
| **GET** | `/api/projects/:slug` | Public | Retrieve project case study details |
| **POST** | `/api/projects` | Admin | Create project case study |
| **PUT** | `/api/projects/:id` | Admin | Update project case study |
| **DELETE** | `/api/projects/:id` | Admin | Delete project case study |
| **GET** | `/api/ventures` | Public | Returns only published ventures (strictly preserves secrecy) |
| **POST** | `/api/ventures` | Admin | Register new internal venture |
| **PUT** | `/api/ventures/:id` | Admin | Update venture / toggle public visibility |
| **DELETE** | `/api/ventures/:id` | Admin | Delete venture |
| **POST** | `/api/inquiries` | Public | Submit project brief (Rate-limited) |
| **GET** | `/api/inquiries` | Admin | Retrieve all inquiries with status breakdown |
| **PUT** | `/api/inquiries/:id` | Admin | Update inquiry status (New, Contacted, Completed, etc.) |
| **DELETE** | `/api/inquiries/:id` | Admin | Delete inquiry |
| **POST** | `/api/analytics` | Public | Record anonymous page view event |
| **GET** | `/api/analytics` | Admin | Aggregated traffic intelligence & metrics |
| **GET** | `/api/settings` | Public | Retrieve company metadata & contact info |
| **PUT** | `/api/settings` | Admin | Update global site settings |

---

## 8. Production Build

To generate the optimized production assets:

```bash
cd client
npm run build
```

The output will be in `client/dist`. You can serve it directly with Express or host on your preferred CDN/cloud provider.
