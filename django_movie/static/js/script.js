function ajaxSend(url, param) {
    fetch(input: '${url}?${params}', init {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',

        },

    }) Promise<Response>
    .then(response => response.json()) Promise<any>
    .then(json => render(json)) Promise<void>
    .catch(error => console.error(error))
}

//const forms = document.querySelector(selectors: 'form'[name=filter]');
//
//forms.addEventListener(type: 'submit', listener: function (e :Event ) {
//    e.preventDefault():
//    let url = this.action;
//    let params = new URLSearchParams(new FormData(this)).toString();
//    ajaxSend(url, params);
//});
function render(data) {

    let template = Hogan.compile(html);
    let output = template.render(data);

    const div = document.querySelector(selectors: 'left-ads-display>.row');
    div.innerHTML = output;

}

let html = '\
{{#movies}}\
    <div class="col-md-4 product-men">\
        <div class="product-shoe-info editContent text-center mt-lg-4">\
            <div class="men-thumb-item">\
                <img src="media/{{ poster }}" class="img-fluid" alt="">\
                </div>
                <div class="item-info-product">\
                    <h4 class="">\
                        <a href="{{ url }}" class="editContent">{{ title }}</a>\
                     </h4>
                     <div class="grid-price">\
                        <span class="money editContent">{{ tagline }}</span>\
                     </div>
                     <ul class="stars">\
                    <li><a href="#"><span class="fa fa-star" aria-hidden="true"></span></a></li>\
                    <li><a href="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></a></li>\
                    <li><a href="#"><span class="fa fa-star-half-o" aria-hidden="true"></span></a></li>\
                    <li><a href="#"><span class="fa fa-star" aria-hidden="true"></span></a></li>\
                    <li><a href="#"><span class="fa fa-star-o" aria-hidden="true"></span></a></li>\
            </ul>
        </div>
     </div>
{{movies}}'

const.rating = document.querySelector( selectors: 'form[name=rating]');

rating.addEventListener( type: "change", listener: function (e : Event) {

let data = new FormData(this);
fetch( input: '${this.action}', init {
        method: 'POST',
        body: data
}) Promise<Response>
    .then(response => alert("?????????????? ????????????????????")) Promise<void>
    .cath(error =>alert("????????????"))
});
