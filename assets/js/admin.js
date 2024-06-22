document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const userList = document.getElementById('userList');
    const clearFieldsButton = document.getElementById('clearFields');
    const clearAllButton = document.getElementById('clearAll');
    const searchInput = document.getElementById('search');

    function loadUsers() {
        userList.innerHTML = '';
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.forEach(user => addUserToList(user));
    }

    function addUserToList(user) {
        const li = document.createElement('li');
        li.textContent = `${user.date} - ${user.username} - ${user.email}`;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('btn-delete');
        deleteButton.addEventListener('click', () => {
            deleteUser(user);
        });
        li.appendChild(deleteButton);
        userList.appendChild(li);
    }

    function saveUser(user) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }

    function deleteUser(userToDelete) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        users = users.filter(user => user.date !== userToDelete.date);
        localStorage.setItem('users', JSON.stringify(users));
        loadUsers();
    }

    function clearAllUsers() {
        localStorage.removeItem('users');
        loadUsers();
    }

    userForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const date = new Date().toLocaleString();
        const user = { date, username, email };
        addUserToList(user);
        saveUser(user);
        userForm.reset();
    });

    clearFieldsButton.addEventListener('click', () => {
        userForm.reset();
    });

    clearAllButton.addEventListener('click', clearAllUsers);

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const filteredUsers = users.filter(user => 
            user.username.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm)
        );
        userList.innerHTML = ''; 
        filteredUsers.forEach(user => addUserToList(user));
    });

    loadUsers();
});