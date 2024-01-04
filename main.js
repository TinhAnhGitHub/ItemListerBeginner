var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var DontAsk = document.getElementById('DAMG');
var filter = document.getElementById('filter')


form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
DontAsk.addEventListener('change', IsChecked);
filter.addEventListener('keyup', function(e){

    var textSearch = e.target.value.toLowerCase();
    var items = document.getElementsByTagName('li')

    Array.from(items).forEach(function(item){
        //  console.log(item.firstChild.textContent)
        var itemName = item.firstChild.textContent.toLowerCase();
        if(itemName.indexOf(textSearch) != -1){
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    })
})

function IsChecked(e) {
    e.preventDefault();
    console.log(DontAsk.checked)
    
    // No need for manual toggling, the 'change' event handles it
}

function addItem(e) {
    e.preventDefault();
    var newItem = document.getElementById('item').value;
    var button = document.createElement('button');
    button.className = 'btn btn-danger btn-sm float-right delete';

    var li = document.createElement('li');
    li.className = 'list-group-item';
    li.appendChild(document.createTextNode(newItem));
    button.appendChild(document.createTextNode('X'))
    li.appendChild(button);

    itemList.appendChild(li);
    document.getElementById('item').value = '';
}

function removeItem(e) {
    e.preventDefault();

    if (e.target.classList.contains('delete')) {
        var tmpDelete = e.target.parentElement
        if (DontAsk.checked) {
            itemList.removeChild(tmpDelete);
        } else {
            if (confirm("Are you sure?")) {
                itemList.removeChild(tmpDelete);
            }
        }
    }
}
