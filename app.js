var state = {
    items: []
};

var addItem = function(state, item) {
    state.items.push(item);
};

var removeItem = function(state, item) {
    var index = state.items.indexOf(item);
    state.items.splice(index, 1);
};

var rendersList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li>\
        <span class="shopping-item">' + item + '</span>\
        <div class="shopping-item-controls">\
          <button class="shopping-item-toggle">\
            <span class="button-label">check</span>\
          </button>\
          <button class="shopping-item-delete">\
            <span class="button-label">delete</span>\
          </button>\
        </div>\
      </li>'
    });
    element.html(itemsHTML);
};

$(function() {
    $("#js-shopping-list-form").submit(function(event) {
        event.preventDefault();
        addItem(state, $('#shopping-list-entry').val());
        rendersList(state, $('.js-shopping-list'));
        this.reset();
    });

    $('.js-shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $($(this).closest("li").children('.shopping-item')).toggleClass("shopping-item__checked");
    });

    $('.js-shopping-list').on('click','.shopping-item-delete', function(event) {
        removeItem(state, $($(this).closest("li").children('.shopping-item').text()));
        $(this.closest("li").remove());
    })
});