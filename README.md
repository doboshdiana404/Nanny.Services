🧸 Nanny Services Web App A web application for finding and hiring nannies. Users can browse nanny profiles, filter them by experience or location, save favorites, and book
appointments. Authentication and data storage are powered by Firebase.

📌 Project Description Nanny Services is designed to help parents find trusted babysitters based on various criteria. Key features include:

-Viewing a list of available nannies -Filtering -Viewing detailed nanny profiles -Adding nannies to a favorites list -Booking appointment times -User authentication (sign up / log
in / log out)

🛠 Technologies Used React – Front-end library for building user interfaces

-Firebase – Backend services (Authentication, Firestore, Hosting) -CSS Modules – Component-level styling -React Router – Routing within the app -Context API – Authentication state
management

🎨 Design 👉 https://www.figma.com/file/u36ajEOsnwio2GDGiabVPD/Nanny-Sevices?type=design&node-id=0-1&mode=design&t=CZpMnnOCRwAYc81O-0

The application follows a responsive layout and supports both desktop and mobile viewports.

📄 Features / MVP Scope User registration and login with Firebase Auth

-Auth state handling via Context -Nannies list with filter options -Individual nanny profile page -Add/remove nanny to/from favorites -Favorites page -Appointment modal with
date/time selection -Modal windows for login/registration -Mobile-friendly design src/ ├── components/ # Reusable UI components (buttons, cards, headers) ├── pages/ # Route-based
pages (Home, Favorites, Profile, etc.) ├── modules/ # Feature-specific modules (AppointmentModal, AuthModals) ├── context/ # Global React contexts (e.g. AuthContext) ├──
firebase/ # Firebase config and utilities ├── utils/ # Utility functions (e.g. age calculation) ├── assets/ # Static images, icons, etc. ├── App.jsx # Main app component with
routes └── index.js # Entry point
