document.addEventListener('DOMContentLoaded', function() {
    const managerForm = document.getElementById('managerForm');
    const managerList = document.getElementById('managerList');
    const classForm = document.getElementById('classForm');
    const classList = document.getElementById('classList');
    const supervisionForm = document.getElementById('supervisionForm');
    const supervisionList = document.getElementById('supervisionList');

    // Add manager
    managerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const managerName = document.getElementById('managerName').value;
        const managerEmail = document.getElementById('managerEmail').value;

        const managerItem = document.createElement('li');
        managerItem.textContent = `${managerName} - ${managerEmail}`;
        managerList.appendChild(managerItem);

        managerForm.reset();
    });

    // Add class
    classForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const className = document.getElementById('className').value;
        const classGrade = document.getElementById('classGrade').value;

        const classItem = document.createElement('li');
        classItem.textContent = `${className} - ${classGrade}`;
        classList.appendChild(classItem);

        classForm.reset();
    });

    // Add supervision
    supervisionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const supervisionClass = document.getElementById('supervisionClass').value;
        const supervisionManager = document.getElementById('supervisionManager').value;

        const supervisionItem = document.createElement('li');
        supervisionItem.textContent = `${supervisionClass} supervised by ${supervisionManager}`;
        supervisionList.appendChild(supervisionItem);

        supervisionForm.reset();
    });
});