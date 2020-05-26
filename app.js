let button = document.querySelector('button');
let friends = [
    'Quinn',
    'Chris',
    'Kyle',
    'Kody',
    'Michael'
];

button.addEventListener("click", function () {
    let Container = document.createElement('container');
    document.body.appendChild(Container);

    for (let i = 0; i < friends.length; i++) {
        let friendsDiv = document.createElement('div');
        let friendsNameHeader = document.createElement('H3');
        Container.appendChild(friendsDiv);

        friendsDiv.classList.add("friends");
        friendsDiv.appendChild(friendsNameHeader);
        friendsNameHeader.textContent = friends[i];

        for (num = 99; num > 0; num--) {
            let p = document.createElement('p');
            friendsDiv.appendChild(p);
            if (num === 2) {
                p.textContent = num + " lines of code in the file, " + num + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (
                    num - 1
                ) + " line of code in the file."
            } else if (num === 1) {
                p.textContent = num + " line of code in the file, " + num + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (
                    num - 1
                ) + " lines of code in the file."
            } else {
                p.textContent = num + " lines of code in the file, " + num + " lines of code; " + friends[i] + " strikes one out, clears it all out, " + (
                    num - 1
                ) + " lines of code in the file."
            }
        }
    }
});

