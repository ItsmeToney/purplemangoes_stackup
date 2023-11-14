let openEditor;
// Function to display an alert
const showAlert = (message) => {
    // Implement your alert logic here
    console.error(message);
};

const createProduct = (data) => {
    openEditor = () => {
        sessionStorage.tempProduct = JSON.stringify(data);
        location.href = `/add-product/${data.id}`;
    };

    let productContainer = document.querySelector('.product-container');
    productContainer.innerHTML += `
        <div class="product-card">
            <div class="product-image">
                ${data.draft ? `<span class="tag">Draft</span>` : ''}
                <img src="${data.images[0] || 'img/no image.png'}" class="product-thumb" alt="">
                <button class="card-action-btn edit-btn" onclick="openEditor()"><img src="img/edit.png" alt="edit"></button>
                <button class="card-action-btn open-btn" onclick="location.href='/${data.id}'"><img src="img/open.png" alt="open"></button>
                <button class="card-action-btn delete-popup-btn" onclick="openDeletePopup('${data.id}')"><img src="img/delete.png" alt="delete"></button>
            </div>

            <div class="product-info">
                <h2 class="product-brand">${data.name}</h2>
                <p class="product-short-des">${data.shortDes}</p>
                <span class="price">$${data.sellPrice}</span><span class="actual-price">$${data.actualPrice}</span>
            </div>
        </div>
    `;
};

const openDelete = (id) => {
    let deleteAlert = document.querySelector('.delete-alert');
    let closeBtn = document.querySelector('.close-btn');
    let deleteBtn = document.querySelector('.delete-btn');

    deleteAlert.style.display = 'flex';

    closeBtn.addEventListener('click', () => {
        deleteAlert.classList.add('hide'); // Close the delete alert
    });

    deleteBtn.addEventListener('click', () => deleteItem(id, deleteAlert));
};

const deleteItem = (id, deleteAlert) => {
    deleteAlert.classList.remove('hide');
    fetch('/delete-product', {
        method: 'post',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify({ id: id })
    }).then(res => res.json())
        .then(data => {
            if (data === 'success') {
                location.reload();
            } else {
                showAlert('Some error occurred while deleting the product. Try Again');
            }
        })
        .catch(error => {
            showAlert('An error occurred during the delete operation. Try Again');
        })
        .finally(() => {
            deleteAlert.style.display = 'none'; // Close the delete alert regardless of success or failure
        });
};



