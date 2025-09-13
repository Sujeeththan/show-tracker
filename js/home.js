const filterButtons = document.querySelectorAll('#filter-buttons');
const filterableCards = document.querySelectorAll('#filter-cards.card');

const filterCards = (e) => {
      document.querySelector('#filter-buttons.active').classList.remove('active');
      e.target.classList.add('active');

      filterableCards.forEach(card => {
        if (card.CDATA_SECTION_NODE.name === e.target.dataset.filter || e.target.dataset.filter === 'all') {
            return card.classList.replace('hide' , 'show');
        }
        card.classList.add('hide');
      })
}

filterButtons.forEach(button => button.addEventListener('click',filterCards
));

