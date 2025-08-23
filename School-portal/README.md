# School Portal

A comprehensive school management system built with React, providing role-based access for students, parents, teachers, school heads, and administrators.

## Features

### 🎓 Student Portal

- **Dashboard**: Overview of academic progress and recent activities
- **Grades**: View current grades and GPA
- **Assignments**: Track and submit assignments
- **Resources**: Access learning materials and documents
- **Schedule**: View class schedules and timetables
- **Reports**: Access academic and attendance reports

### 👨‍👩‍👧‍👦 Parent Portal

- **Dashboard**: Overview of children's progress
- **Grades**: Monitor children's academic performance
- **Assignments**: Track homework and projects
- **Balance**: Manage fee payments and view balances
- **Reports**: Access comprehensive reports
- **Communication**: Connect with teachers and staff

### 👨‍🏫 Teacher Portal

- **Dashboard**: Overview of classes and students
- **Assignments**: Create and manage assignments
- **Attendance**: Take and track student attendance
- **Grades**: Manage and update student grades
- **Resources**: Share educational materials

### 🏫 School Head Portal

- **Dashboard**: School-wide performance overview
- **Reports**: Generate institutional reports
- **Notifications**: Manage school-wide announcements
- **Activity Log**: Monitor system activities

### ⚙️ Admin Portal

- **Dashboard**: System overview and statistics
- **SIS**: Student Information System management
- **Fee Management**: Handle school fees and payments
- **Attendance**: Monitor attendance across the school
- **Reports**: Generate comprehensive system reports
- **Activity Log**: Track all system activities

## Technology Stack

- **Frontend**: React 19 with Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Build Tool**: Vite
- **Code Quality**: ESLint + Prettier

## Project Structure

```
school-portal/
│
├── public/                         # Public assets (images, favicon, etc.)
│
├── src/
│   ├── components/                  # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx          # Landing page hero/banner
│   │   ├── Card.jsx
│   │   └── Button.jsx
│   │
│   ├── pages/
│   │   ├── public/                  # Public-facing pages
│   │   │   ├── LandingPage.jsx      # Explains school (like your screenshot)
│   │   │   └── About.jsx            # Optional: more info about school
│   │   │
│   │   ├── auth/                    # Authentication pages
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx (optional)
│   │   │
│   │   ├── student/                 # Student Portal pages
│   │   │   ├── Home.jsx
│   │   │   ├── Grades.jsx
│   │   │   ├── Assignments.jsx
│   │   │   ├── Resources.jsx
│   │   │   ├── Schedule.jsx
│   │   │   └── Reports.jsx
│   │   │
│   │   ├── parent/                  # Parent Portal pages
│   │   │   ├── Home.jsx
│   │   │   ├── Grades.jsx
│   │   │   ├── Assignments.jsx
│   │   │   ├── Balance.jsx
│   │   │   ├── Reports.jsx
│   │   │   └── Communication.jsx
│   │   │
│   │   ├── teacher/                 # Teacher Portal pages
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Assignments.jsx
│   │   │   ├── Attendance.jsx
│   │   │   ├── Grades.jsx
│   │   │   └── Resources.jsx
│   │   │
│   │   ├── schoolhead/              # School Head Portal pages
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Reports.jsx
│   │   │   ├── Notifications.jsx
│   │   │   └── ActivityLog.jsx
│   │   │
│   │   └── admin/                   # Admin Portal pages
│   │       ├── Dashboard.jsx
│   │       ├── SIS.jsx
│   │       ├── FeeManagement.jsx
│   │       ├── Attendance.jsx
│   │       ├── Reports.jsx
│   │       └── ActivityLog.jsx
│   │
│   ├── layouts/                     # Shared layouts for each stakeholder
│   │   ├── PublicLayout.jsx
│   │   ├── StudentLayout.jsx
│   │   ├── ParentLayout.jsx
│   │   ├── TeacherLayout.jsx
│   │   ├── SchoolHeadLayout.jsx
│   │   └── AdminLayout.jsx
│   │
│   ├── routes/                      # Routing setup
│   │   └── AppRoutes.jsx
│   │
│   ├── context/                     # Global state (auth, user role, etc.)
│   │   └── AuthContext.jsx
│   │
│   ├── services/                    # API calls to backend
│   │   ├── authService.js
│   │   ├── studentService.js
│   │   ├── parentService.js
│   │   ├── teacherService.js
│   │   └── adminService.js
│   │
│   └── App.jsx                      # Main entry point
│
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd School-Portal
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Code Style

The project uses ESLint and Prettier for code formatting. Run the linter to check for issues:

```bash
npm run lint
```

## Authentication

The system includes a mock authentication system with the following test accounts:

- **Student**: `student@school.com` / `password`
- **Parent**: `parent@school.com` / `password`
- **Teacher**: `teacher@school.com` / `password`
- **Admin**: `admin@school.com` / `password`

## Navigation Flow

1. **Landing Page** (`/`) - Public introduction to the school portal
2. **About Page** (`/about`) - School information and history
3. **Login** (`/auth/login`) - Authentication for all user types
4. **Role-based Portals** - Redirected based on user role after login

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please contact the development team or create an issue in the repository.
