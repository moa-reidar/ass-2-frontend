# Pharmacy Inventory Management System

### Project Description

The Pharmacy Inventory Management System is a client-side web application designed to manage medicine inventory in a pharmacy setting. It allows users to add, edit, and delete medicines using a structured and responsive interface. Data is stored in the browser's localStorage, ensuring persistence across sessions. The project emphasizes clean structure, semantic HTML, modular CSS with variables, and JavaScript with Object-Oriented Programming using ES6 classes.

# Installation & Setup

1. Clone this repository:

git clone https://github.com/moa-reidar/ass-2-frontend.git

2. Navigate to the project directory:

cd ass-2-frontend

3. Open the index.html file in your preferred browser.

No external server or backend is required.

# Usage Instructions

1. Fill out the form with:

Product Name

Manufacturer

Expiration Date (stored in ISO 8601 format)

Quantity

2. Click Add Medicine to save the record.

3. Use the Edit button to edit existing entries (form gets populated).

4. Use the Delete button to remove a record, with confirmation prompt.

# Features

- Object-Oriented Programming: Uses ES6 classes, including inheritance.

- Local Storage: Data is saved persistently in the browser.

- Auto-generated Unique IDs: Each medicine gets a unique ID.

- Responsive Design: Adapts to different screen sizes using media queries.

- Form Validation: Ensures all fields are filled before submission.

- Semantic HTML with accessibility in mind.

- Dynamic Table Rendering: Adjusts structure based on viewport width.

# File Structure

pharmacy-inventory/
├── index.html
├── package.json
├── .gitignore
├── src
│   ├── assets
│   │   ├── fonts
│   │       ├── Roboto-Regular.ttf
│   │       ├── Roboto-Bold.ttf
│   │       └── Oswald-VariableFont_wght.ttf
│   │   
│   ├── css
│   │   ├── reset.css
│   │   ├── style.css
│   │   └── variables.css
│   └── js
│       ├── app.js
│       ├── inventory.js
│       ├── Medicine.js
│       └── prescriptionMedicine.js

# Technologies Used

- HTML

- CSS (with variables and media queries)

- JavaScript (ES6)

- Classes and inheritance

- DOM manipulation

- Local Storage API

# Git Commit Suggestions

- feat: implement medicine edit and delete with alerts

- style: improve responsive design and table layout


# .gitignore Suggestions (macOS)

- node_modules/
- .DS_Store
- *.log

## Contact

Created by Moa Reidar GitHub: moa-reidar Feel free to reach out via email at moa.reidar@live.no


Thanks for checking out the Pharmacy Inventory Management System!#