const boxes = document.querySelectorAll('.box')
const lists = document.querySelectorAll('.div');


let draggable = null;
for (let i = 0; i< boxes.length; i++){
    const item=boxes[i];

    item.addEventListener('dragstart',function (){
        // console.log('dragstart');
        draggedItem=this;
    });

    item.addEventListener('dragend',function(){
        // console.log('dragend');
        draggedItem=null;
    });
    for(let j=0; j<lists.length; j++) {
        const list = lists[j];

        list.addEventListener('dragover',function(e){
            e.preventDefault();
        });
        list.addEventListener('dragenter',function(e){
            e.preventDefault();
        });
        list.addEventListener('drop',function(e){
            // console.log('drop');
            var copy=draggedItem.cloneNode(true);
            this.append(copy);
        });
    }
}


// -----------------------------------
