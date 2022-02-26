const tabs = function (mainSelector){
    const tabsContainer = document.querySelector(mainSelector);

    let tabs = tabsContainer.querySelector('.tabs').children;
    if(tabs.length === 0) return;

    let tabContent = tabsContainer.querySelector('.tab-content').children;
    if(tabContent.length === 0 || tabContent.length !== tabs.length) return;


    [...tabs].map((elem, i) => {
       elem.addEventListener('click', function (){
           show(i);
       })
    });

    function show(i){
        [...tabs].map((elem, i) => {
            elem.classList.remove('active');
            tabContent[i].classList.remove('active');
        })
        tabs[i].classList.add('active');
        tabContent[i].classList.add('active');
    }
}

tabs('.tabs-conteiner')

function tooltip() {
    let elements = document.querySelectorAll('.tooltip');

    [...elements].map(element => {
        element.addEventListener('mouseover', function (e) {
            createTooltip(e)
        });
        element.addEventListener('mouseleave', function(e) {
            deleteToolTip(e)
        });

    });


    function createTooltip(e) {
        console.log(e.target)

        let elem = document.createElement('div');
        elem.setAttribute('class', 'tooltip-element');
        elem.textContent = e.target.title;

        document.body.append(elem);
    };

    function deleteToolTip() {
        document.querySelector('.tooltip-element').remove()
    };

}

tooltip()