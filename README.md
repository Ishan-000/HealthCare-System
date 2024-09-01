# UltraCare Healthcare Management System

UltraCare is a comprehensive healthcare management system designed to streamline patient management, appointment scheduling, and administrative tasks for healthcare providers.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

  
## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Appwrite
- Typescript
- TailwindCSS
- ShadCN
- Twilio
- Sentry

## <a name="features"> Features</a>

**Register as a Patient**: Users can sign up and create a personal profile as a patient.

**Book a New Appointment with Doctor**: Patients can schedule appointments with doctors at their convenience and can book multiple appointments.

**Manage Appointments on Admin Side**: Administrators can efficiently view and handle all scheduled appointments.

**Confirm/Schedule Appointment from Admin Side**: Admins can confirm and set appointment times to ensure they are properly scheduled.

**Cancel Appointment from Admin Side**: Administrators have the ability to cancel any appointment as needed.

**Send SMS on Appointment Confirmation**: Patients receive SMS notifications to confirm their appointment details.

**Complete Responsiveness**: The application works seamlessly on all device types and screen sizes.

**File Upload Using Appwrite Storage**: Users can upload and store files securely within the app using Appwrite storage services.

 **Manage and Track Application Performance Using Sentry**: The application uses Sentry to monitor and track its performance and detect any errors.

## Installation

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/ultracare.git
   cd ultracare
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

## Usage

### Admin Mode

1. Navigate to the admin dashboard by appending `?admin=true` to the URL.
2. Use the admin features to manage patients and appointments.

### Scheduling an Appointment

1. Log in as a user.
2. Navigate to the appointment scheduling page.
3. Fill out the form and submit to schedule an appointment.

## Environment Variables

```env
#APPWRITE
NEXT_PUBLIC_ENDPOINT=
PROJECT_ID=
API_KEY=
DATABASE_ID=
PATIENT_COLLECTION_ID=
APPOINTMENT_COLLECTION_ID=
NEXT_PUBLIC_BUCKET_ID=

NEXT_PUBLIC_ADMIN_PASSKEY=
```

Replace the placeholder values with your actual Appwrite credentials. You can obtain these credentials by signing up on the [Appwrite website](https://appwrite.io/).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

     

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
