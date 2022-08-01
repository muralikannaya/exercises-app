var app = angular.module('myApp', [])
app.controller('myCtrl', function ($scope) {
    $scope.searchItems = [{
        image: 'images/11.jpg',
        section: 'boys | mens',
        id: 1,
        name: 'Blue Checks ',
        desc: 'Well nice Blue Jeans for perfect men shirt',
        price: "599",
    },
    {
        section: 'boys | mens',
        id: 2,
        name: 'Baby pink',
        desc: 'A Colour Full Half Hands for Summer shirt',
        image: 'images/22.jpg',
        price: "499",
    },
    {
        section: 'boys | mens',
        id: 3,
        name: 'Black checks',
        desc: 'A Trendy Jeans T Shirt of Full Hands',
        image: 'images/33.jpg',
        price: "699",
    },
    {
        section: 'boys | mens',
        id: 4,
        name: 'Blue Shirt',
        desc: 'A Perfect Party Ware for Mens',
        image: 'images/55.jpg',
        price: "499",
    },
    {
        section: 'boys | mens',
        id: 5,
        name: 'Red Shirt',
        desc: 'An Official Office ware for Mens',
        image: 'images/44.jpg',
        price: "499",
    },
    {
        section: 'boys | mens',
        id: 6,
        name: 'Navy Blue Shirt',
        desc: 'Causal Ware of some Events ',
        image: 'images/66.jpg',
        price: "599",
    },
   
    {
        section: 'womens|girls',
        id: 9,
        name: 'Gown',
        desc: 'Beautiful Gown For Party',
        image: 'images/1.jpg',
        price: "899",
    },
    {
        section: 'womens|girls',
        id: 10,
        name: 'Pink Top',
        desc: 'Causal Ware for Tours',
        image: 'images/2.jpg',
        price: "999",
    },
    {
        section: 'womens|girls',
        id: 11,
        name: 'Chudidar',
        desc: 'A nice Light Red Chudidar ',
        image: 'images/3.jpg',
        price: "1299",
    },
    {
        section: 'womens|girls',
        id: 12,
        name: 'Saree',
        desc: 'Represents the Indian Traditions',
        image: 'images/4.jpg',
        price: "699",
    },
    {
        section: 'womens|girls',
        id: 7,
        name: 'Gree Chudidar',
        desc: 'The best Out Fit For Causal Events',
        image: 'images/5.jpg',
        price: "799",
    },
    {
        section: 'womens|girls',
        id: 8,
        name: 'Black Dress',
        desc: 'Offical Party Ware for Ladies',
        image: 'images/6.jpg',
        price: "899",
    },
    {
        image: 'images/s1.jpg',
        section: 'boys | mens',
        id: 1,
        name: 'men brown shoes',
        desc: 'Well nice Blue Jeans for perfect men',
        price: "599",
    },
    {
        section: 'boys | mens',
        id: 2,
        name: 'men black shoes',
        desc: 'A Colour Full Half Hands for Summer',
        image: 'images/s2.jpg',
        price: "499",
    },
    {
        section: 'boys | mens',
        id: 3,
        name: 'men brown shoes',
        desc: 'A Trendy Jeans T Shirft of Full Hands',
        image: 'images/s3.jpg',
        price: "699",
    },
    {
        section: 'boys | mens',
        id: 4,
        name: 'men white shoes',
        desc: 'A Perfect Party Ware for Mens',
        image: 'images/s5.jpg',
        price: "499",
    },
    {
        section: 'boys | mens',
        id: 5,
        name: 'men grey shoes',
        desc: 'An Official Office ware for Mens',
        image: 'images/s4.jpg',
        price: "499",
    },
    {
        section: 'boys | mens',
        id: 6,
        name: 'men brown shoes',
        desc: 'Causal Ware of some Events ',
        image: 'images/s6.jpg',
        price: "599",
    },
    
    ]
    $scope.foundList = []
    $scope.message = ''
    $scope.isVisible = false
    $scope.show = function () {
        $scope.isVisible = $scope.isVisible ? fasle : true
    }

    $scope.store = function (item) {
        if (item) {
            $scope.foundList.push({ section: item.section, id: item.id, name: item.name, desc: item.desc, image: item.image, price: item.price })
            $scope.nOfItems = $scope.nOfItems + 1 ;
        }

    }
    $scope.remove = function (cart) {

        if (cart) {

            $scope.foundList.splice($scope.foundList.indexOf(cart), 1);
            $scope.nOfItems = $scope.nOfItems - 1 ;


        }

    }
    $scope.mur = { $: undefined };
   
    $scope.offData = false;

    $scope.shoess = function () {           
        $scope.offData = true;
        $scope.mur = "shoes" ;
    }
    
    $scope.shirtsClick = function () {           
        $scope.offData = true;
        $scope.mur = "shirt" ;
    }

    $scope.setFilter = function () {
        if ($scope.addSearchItems != "") {
            $scope.offData = true;
            $scope.mur = $scope.addSearchItems;
        } else {
            $scope.offData = false;
        }
    };
     
    // $scope.state = $state;
     
    $scope.like = function (item) {
        if (item) {
            $scope.myStyle = {
                "color": "red"
            }
        }
    };

    $scope.decItem1 = function () {

        $scope.count1 = $scope.count1 - 1;
    };
    $scope.incItem1 = function () {
        $scope.count1 = $scope.count1 + 1;
    };


    $scope.showMurali = false;
    $scope.Payment = function () {
        $scope.showMurali = true;
    };

       $scope.cartShow = false;
     $scope.cartOpen = function () {
        $scope.cartShow = true;
     };
     
     $scope.backToCart = function () {
        $scope.cartShow = false;
     };

   



});

// app.config(function($routerProvider){
//   $routerProvider
//   .when('/foundlist',{
//     templateUrl: "cart.html"
//   });
// })



// app.filter('section', function(){
//   return function(section){
//     if(section == 'men'){
//       return searchItems.section;
//     }
//     else{
//       return searchItems.section
//     }
//   }
// })


// app.filter('searchFor', function () {
//   return function (arr, searchString) {
//     if (!searchString) {
//       return arr
//     }
//     var result = []
//     searchString = searchString.toLowerCase()
//     angular.forEach(arr, (item) => {
//       if (item.section.toLowerCase().indexOf(searchString) !== -1) {
//         result.push(item)
//       }
//     })
//     return result
//   }
// })