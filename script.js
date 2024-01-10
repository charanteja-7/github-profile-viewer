
function fetchDetailes(){
    const username = document.querySelector('.input').value;
    fetch(`https://api.github.com/users/${username}`)
    .then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        displayProfile(data);
    }).catch((error)=>{
        console.log(error);
    })
}

function displayProfile(data) {
    document.querySelector('.input').value=''; 
    document.querySelector('.profile').src = data.avatar_url;
    document.querySelector('.username').textContent = data.login;
    document.querySelector('.bio').textContent = data.bio || 'Bio not provided';
    document.querySelector('.name').textContent = data.name || 'Name not provided';
    document.querySelector('.company').textContent = data.company || 'Company not provided';
    document.querySelector('.Location').textContent = data.location || 'Location not provided';
    document.querySelector('.repos').textContent = data.public_repos;
    document.querySelector('.Followers').textContent = data.followers;
    document.querySelector('.Following').textContent = data.following;
    const createdDate = new Date(data.created_at);
    document.querySelector('.createdon').textContent = createdDate.toDateString();
}
