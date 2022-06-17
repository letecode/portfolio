fetch('js/data.json')
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        // Photo de profile
        document.querySelector('.header-data .avatar').setAttribute('src', data.profile.avatar)
        // nom
        document.getElementById('title').innerHTML = data.profile.name
        //role
        document.querySelector('.header-data .role').innerHTML = data.profile.role

        // le lien de l'adresse email
        document.querySelector('.header-data .mail').textContent = data.profile.email
        document.querySelector('.header-data .mail').setAttribute('href', 'mailto:'+ data.profile.email)

        // ma description
        document.querySelector('.header-info .info').innerHTML = data.profile.description

        //lien telephone
        document.querySelector('.header-info .phone').textContent = data.profile.phone
        document.querySelector('.header-info .phone').setAttribute('href', 'tel:'+ data.profile.phone)

        // github
        document.querySelector('.header-info .github').setAttribute('href', data.profile.github)
    });
        