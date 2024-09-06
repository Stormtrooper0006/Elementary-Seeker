# Elementary-Seeker Documentation
## Overview
Elementary-Seeker is a web platform designed to help parents find private elementary schools in Indonesia. The schools are segmented by province and regency, making it easier for users to locate schools in their specific area.

## Features
- Search by Region and Keyword: Schools can be filtered by province,regency, and keywords based on school name and description.
- Database-Driven: School data is retrieved from a SQL database.
### Home Page
![Home Page](https://github.com/user-attachments/assets/5c44588f-1c56-4aa5-9fbd-f44120c55e3f)
### School List Page
![School List Page](https://github.com/user-attachments/assets/5202fd03-e8e7-4453-8dad-7fcacdb444f6)
### School List Page with Keyword Filter
![School List Page with Search Filter](https://github.com/user-attachments/assets/0b71fa35-9f21-4086-b193-7e27436c4f8e)
### School Details Page
![School Details](https://github.com/user-attachments/assets/e61efab5-0b92-4a1a-9292-e2ffbd61f4ac)

## Instalation
### Prerequisites
- Node.js
- npm
### Steps to Setup
1. Clone the repository:
```git clone https://github.com/Stormtrooper0006/Elementary-Seeker.git```
2. Navigate to the project directory:
```cd Elementary-Seeker```
3. Install dependencies:
```npm install```
4. Run the development server:
```npm run dev```
5. Visit the website on your browser at http://localhost:3000.

## Tech Stack
- Frontend: ReactJS, Bootstrap
- Backend: ExpressJS
- Database: SQL

## Project Structure
```
|-- src/
    |-- components/         # React components
    |-- styles/             # CSS files
|-- public/                 # Static files
|-- script/sql/             # SQL scripts
|-- index.js                # Main Express server file and API routes
```

## API Endpoints
The following API endpoints are available in this project. All endpoints return JSON data and are served by the Express server on port 3001.
### Get Regions Data
``` GET /home ```
- **Description**: Fetches a list of provinces and regencies from the regions table.
- **Response**: Returns an array of objects containing id, province, and regency.
**Example Response**
```
  {
    "id": 1,
    "province": "DKI Jakarta",
    "regency": "Jakarta Utara"
  },
  {
    "id": 2,
    "province": "DKI Jakarta",
    "regency": "Jakarta Timur"
  }
```
### Get School List
``` GET /school-list?province=<province>&regency=<regency> ```
- **Description**: Fetches a list of schools in a specific province and regency, along with a brief description and primary photo.
- **Query Parameters**:
  - province: The province to filter schools by.
  - regency: The regency to filter schools by.
- **Response**: Returns an array of schools with id, name, description, and photo_url1.
**Example Request**
```
GET /school-list?province=West+Java&regency=Bandung
```
**Example Response**
```
  {
    "school_id": 1,
    "name": "School A",
    "description": "A top-tier school in Jakarta.",
    "photo_url1": "/images/jakarta/jakarta_timur/School_A_1.jpg"
  },
  {
    "school_id": 2,
    "name": "School B",
    "description": "A well-known school in Jakarta.",
    "photo_url1": "/images/jakarta/jakarta_timur/School_B_1.jpg"
  }
```
### Get School Details
``` GET /school-list/:id ```
- **Description**: Fetches detailed information about a specific school, including contact details and photos.
- **URL  Parameters**:
  - id: The ID of the school to retrieve.
- **Response**: Returns an object containing id, name, description, contact_number, address, website_link, and multiple photo URLs.
**Example Request**
```
GET /school-list/1
```
**Example Response**
```
{
  "school_id": 1,
  "name": "School A",
  "description": "A top-tier school in Jakarta.",
  "contact_number": "+62-123-4567",
  "address": "123 Bandung St.",
  "website_link": "http://school.com",
  "photo_url1": "/images/jakarta/jakarta_timur/School_A_1.jpg"
  "photo_url2": "/images/jakarta/jakarta_timur/School_A_1.jpg"
  "photo_url3": "/images/jakarta/jakarta_timur/School_A_1.jpg"
}
```

## Future Features
- Create, edit, and delete school


