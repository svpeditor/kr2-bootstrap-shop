// Сервера у учебного сайта нет, поэтому заявка "отправляется" прямо на странице:
// если поля заполнены правильно, показываем сообщение и очищаем форму.
const orderForms = document.querySelectorAll('.order-form');

orderForms.forEach((form) => {
    form.addEventListener('submit', (event) => {
        // Отменяем обычную отправку формы.
        event.preventDefault();

        // Если есть ошибки, Bootstrap подсветит поля красным.
        if (!form.checkValidity()) {
            form.classList.add('was-validated');
            return;
        }

        form.reset();
        form.classList.remove('was-validated');

        // Если форма была в модальном окне, закрываем его.
        const modal = form.closest('.modal');
        if (modal) {
            bootstrap.Modal.getInstance(modal).hide();
        }

        // Показываем сообщение об отправке.
        const toast = document.getElementById('sentToast');
        bootstrap.Toast.getOrCreateInstance(toast).show();
    });
});

// На странице заявки выбираем товар из ссылки вида order.html?product=klac-60.
const productSelect = document.getElementById('product');

if (productSelect) {
    const product = new URLSearchParams(window.location.search).get('product');

    if (product) {
        productSelect.value = product;
    }
}
