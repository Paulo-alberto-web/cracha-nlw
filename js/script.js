const LinksSocialMedia = {
    github: "Paulo-alberto-web",
    youtube: "UC9FF_y3UTsZbip6GB4QLTdg",
    facebook: "paulo.alberto.9041",
    instagram: "pauloalbertolima",
    twitter: "paullo_dev"
}
// aqui eu estou criando a função para subistituir o nome no h1 com o seletor (id) 
function changeSocialMediaLinks() {
    
    for (let li of socialLinks.children) {
        const social = li.getAttribute("class")
        li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}` 
    }


}


// changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinksSocialMedia.github}`
    
    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent =  data.bio
        userLink.href = data.html_url
        userImage.src = data.avatar_url

        userLogin.textContent = data.login
    })
    
}
getGitHubProfileInfos()

