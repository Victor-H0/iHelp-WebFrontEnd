document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('usuarioForm');
    const userList = document.getElementById('ListaUsuario');
    const clearFieldsButton = document.getElementById('limparCampos');
    const clearAllButton = document.getElementById('limparTodos');
    const searchInput = document.getElementById('busca');

    function loadUsers() {
        userList.innerHTML = '';
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.forEach(user => addUserToList(user));
    }

    function addUserToList(user) {
        const li = document.createElement('li');
        li.textContent = `${user.date} - ${user.nomeUsuario} - ${user.email}`;
        li.classList.add('itemLista');
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
        const nomeUsuario = document.getElementById('nomeUsuario').value;
        const email = document.getElementById('email').value;
        const date = new Date().toLocaleString();
        const user = { date, nomeUsuario, email };
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
            user.nomeUsuario.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm)
        );
        userList.innerHTML = ''; 
        filteredUsers.forEach(user => addUserToList(user));
    });

    loadUsers();
});