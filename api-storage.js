const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value')
    const value = valueInput.value;

    // Add to Local Storage
    if (id && value) {
        localStorage.setItem(id, value)
    }
    //clearing input field
    idInput.value = '';
    valueInput.value = '';
}

///When sending data as array or object: the data must be sent in stringified format
///When reading data, the data must be parsed into unstringified format