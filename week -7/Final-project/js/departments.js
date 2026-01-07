// departments.js - Department data and functionality

const departments = [
  {
    id: 1,
    name: "Software Engineering",
    description: "Focuses on software development, algorithms, data structures, and system design. Prepares students for careers in software development, web technologies, and IT management.",
    head: "Dr. Ahmed Khan"
  },
  {
    id: 2,
    name: "Civil Engineering",
    description: "Covers structural engineering, transportation systems, environmental engineering, and construction management. Emphasizes sustainable infrastructure development.",
    head: "Prof. Sara Ahmed"
  },
  {
    id: 3,
    name: "Electrical Engineering",
    description: "Deals with power systems, electronics, telecommunications, and control systems. Includes renewable energy technologies and smart grid systems.",
    head: "Dr. Muhammad Ali"
  },
  {
    id: 4,
    name: "Mechanical Engineering",
    description: "Includes thermodynamics, fluid mechanics, heat transfer, and manufacturing processes. Focuses on design, analysis, and optimization of mechanical systems.",
    head: "Prof. Fatima Noor"
  },
  {
    id: 5,
    name: "Chemical Engineering",
    description: "Focuses on process engineering, materials science, industrial chemistry, and environmental protection. Covers petrochemicals, pharmaceuticals, and sustainable processes.",
    head: "Dr. Imran Shah"
  },
  {
    id: 6,
    name: "Computer Systems Engineering",
    description: "Combines computer science with electrical engineering principles. Covers embedded systems, IoT, robotics, and computer architecture.",
    head: "Dr. Aisha Malik"
  }
];

// Function to render departments
function renderDepartments(depts) {
  const container = document.getElementById('departmentsContainer');
  if (!container) return;

  container.innerHTML = '';

  if (depts.length === 0) {
    container.innerHTML = '<div class="col-12"><div class="alert alert-info text-center">No departments found matching your search.</div></div>';
    return;
  }

  depts.forEach(dept => {
    const card = document.createElement('div');
    card.className = 'col-lg-4 col-md-6 department-card';
    card.innerHTML = `
      <div class="card h-100">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title text-primary">${dept.name}</h5>
          <p class="card-text flex-grow-1">${dept.description}</p>
          <p class="card-text"><small class="text-muted">Head: ${dept.head}</small></p>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Search functionality
function setupDepartmentSearch() {
  const searchInput = document.getElementById('searchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase().trim();
    const filtered = departments.filter(dept =>
      dept.name.toLowerCase().includes(query) ||
      dept.description.toLowerCase().includes(query) ||
      dept.head.toLowerCase().includes(query)
    );
    renderDepartments(filtered);
  });
}

// Initialize departments page
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('departmentsContainer')) {
    renderDepartments(departments);
    setupDepartmentSearch();
  }
});