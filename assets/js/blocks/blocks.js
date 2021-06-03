var elements = document.getElementsByName('tag');
var blocks = document.getElementsByClassName('block');
for (let tag of elements) {
    tag.addEventListener('change', function () {
        var check = this.id.slice(0, this.id.length - 7);
        for (let block of blocks) {
            if (block.classList.contains(check)) {
                block.style.display = 'inline-block';
            } else {
                block.style.display = 'none';
            }
        }
    });
}