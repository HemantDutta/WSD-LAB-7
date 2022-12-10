function onloadAnimations(){
    let footer = document.getElementById('footer');
    footer.style.transform = "translateY(0%)";
    footer.style.opacity = "100%";

    let navbar = document.getElementById('navbar');
    navbar.style.transform = "translateY(0%)"
    navbar.style.opacity = "100%";

    let jsonDiv = document.getElementById('jsonDiv');
    jsonDiv.style.transform = "translateY(0%)"
    jsonDiv.style.opacity = "100%";

    let searchDiv = document.getElementById('searchDiv');
    searchDiv.style.transform = "translateY(0%)"
    searchDiv.style.opacity = "100%";
}



angular.module('myApp', []).controller('myCtrl', function ($scope){
    $scope.data = [
        {name: 'Hemant', category: 'Web Dev', Rating: 4, Gigs: 5, Reviews: 2, Price: 1500, Joined: '10-12-2022', Status: 'active'},
        {name: 'Darpan', category: 'Manager', Rating: 2, Gigs: 1, Reviews: 0, Price: 500, Joined: '10-12-2022', Status: 'active'},
        {name: 'Rohan', category: 'C Dev', Rating: 5, Gigs: 10, Reviews: 8, Price: 5000, Joined: '10-12-2022', Status: 'blocked'},
        {name: 'Piyush', category: '', Rating: 2, Gigs: 1, Reviews: 0, Price: 500, Joined: '10-12-2022', Status: 'active'},
        {name: 'Darpan', category: 'Manager', Rating: 2, Gigs: 1, Reviews: 0, Price: 500, Joined: '10-12-2022', Status: 'active'},
        {name: 'Darpan', category: 'Python', Rating: 2, Gigs: 1, Reviews: 0, Price: 500, Joined: '10-12-2022', Status: 'active'},
        {name: 'Darpan', category: 'Manager', Rating: 2, Gigs: 1, Reviews: 0, Price: 500, Joined: '10-12-2022', Status: 'active'},
        {name: 'Darpan', category: 'Manager', Rating: 2, Gigs: 1, Reviews: 0, Price: 500, Joined: '10-12-2022', Status: 'active'},
        {name: 'Darpan', category: 'Manager', Rating: 2, Gigs: 1, Reviews: 0, Price: 500, Joined: '10-12-2022', Status: 'active'},
    ];
    $scope.rows = 1;
});

