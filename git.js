async function getProfile() {

    const username = document.getElementById("username").value.trim();

    if (username === "") {
        alert("Please enter a GitHub username.");
        return;
    }

    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
        document.getElementById("profile").innerHTML = `
            <h2>User Not Found</h2>
        `;
        return;
    }

    const data = await response.json();

    document.getElementById("profile").innerHTML = `
        <img src="${data.avatar_url}" alt="Profile Image">

        <h2>${data.name || "No Name"}</h2>

        <p><strong>Username:</strong> ${data.login}</p>

        <p><strong>Followers:</strong> ${data.followers}</p>

        <p><strong>Following:</strong> ${data.following}</p>

        <p><strong>Repositories:</strong> ${data.public_repos}</p>

        <p><strong>Location:</strong> ${data.location || "Not Available"}</p>

        <p><strong>Bio:</strong> ${data.bio || "No Bio"}</p>

        <a href="${data.html_url}" target="_blank">
            Visit GitHub Profile
        </a>
    `;
}