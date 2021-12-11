const requestURL = 'https://garlonuss.github.io/wdd230/WVC/data/business.json';
// alert(requestURL); //show me what you're trying to do
fetch(requestURL)
  .then(function (response) {
    return response.json()
  })
  .then(function (jsonObject) {
    console.table(jsonObject)
    const business_data_1 = jsonObject['business']
    for (let i = 0; i <= business_data_1.length; i++) {
      business_data = business_data_1[i];
      let name = business_data['name'];
      // alert(name);
      let logo = business_data['logo'];
      let address = business_data['address'];
      let phone = business_data['phone'];
      let website = business_data['website'];
      let info = document.createElement('div')
      info.classList.add('business_info');
      info.classList.add('widget2');
      let b_name = document.createElement('div');
      b_name.classList.add('business_name');
      b_name.textContent = name;
      let b_logo = document.createElement('img');
      b_logo.classList.add('business_logo');
      b_logo.src = logo;
      let b_address = document.createElement('div');
      b_address.classList.add('business_address');
      b_address.textContent = address;
      let b_phone = document.createElement('div');
      b_phone.classList.add('business_phone');
      b_phone.textContent = phone;
      let b_site = document.createElement('div');
      b_site.classList.add('business_site');
      b_site.innerHTML = '<a href=' + website + ' target=_blank>' + website + '</a>';

      info.appendChild(b_logo);
      info.appendChild(b_name);
      info.appendChild(b_address);
      info.appendChild(b_phone);
      info.appendChild(b_site);

      document.querySelector('#content2').appendChild(info);
    }

  }
  );
function make_grid() {
  var thisElement = document.getElementById("content3");
  if (thisElement) {
    thisElement.id = 'content2';
  }
}
function make_list() {
  var thisElement = document.getElementById("content2");
  if (thisElement) {
    thisElement.id = 'content3';
  }
}
