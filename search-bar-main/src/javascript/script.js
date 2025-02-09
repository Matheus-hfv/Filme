// Seleciona o input de busca
const searchInput = document.getElementById('search');


searchInput.addEventListener('input', (event) => {
    const value = formatString(event.target.value); 

    const items = document.querySelectorAll('.items .item'); 
    const noResults = document.getElementById('no_results');


    if (value !== '') {
        items.forEach(item => {
            const itemTitle = item.querySelector('.item-title').textContent; 
            const itemDescription = item.querySelector('.item-description').textContent; 

            
            if (formatString(itemTitle).indexOf(value) !== -1
                || formatString(itemDescription).indexOf(value) !== -1
            ) {
               
                item.style.display = 'flex';

               
                hasResults = true;
            } else {
                
                item.style.display = 'none';
            }
        });

        if (hasResults) {
            noResults.style.display = 'none';
        } else {
            noResults.style.display = 'block';
        }

    } else {
       
        items.forEach(item => item.style.display = 'flex');
        noResults.style.display = 'none'; 
    }
});


function formatString(value) {
    return value
        .trim() 
        .toLowerCase() 
        .normalize('NFD') 
        .replace(/[\u0300-\u036f]/g, ''); 
}
