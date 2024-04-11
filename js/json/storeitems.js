// imageName is relative to where this file is called
var storecontent = `[ 
    {
        "name": "TestShoe",
        "description" : "This is a test description.",
        "imageNames": [
            [0, "images/shoeitem.png",
                "images/shoeitem.png",
                "images/shoeitem.png",
                "images/shoeitem.png" ],  

            [1, "images/shoeitem.png",
                "images/shoeitem.png",
                "images/shoeitem.png",
                "images/shoeitem.png" ]
        ],

        "category": "0",
        "price" : "10.00",
        "sizes" : [
            "10",
            "12",
            "14"
        ],
        "colors" : [
            "red",
            "blue"
        ],
        "sale": 0.2,
        "tax": 0.07,
        "shipping": 2.00
    },

    {
        "name" : "Women's Nike Blazer Mid '77 Casual Shoes",
        "description": "",
        "imageNames": [
            [0, "images/women/nike blazers/CZ1055_100_P1.jpeg",
                "images/women/nike blazers/CZ1055_100_P2.jpeg",
                "images/women/nike blazers/CZ1055_100_P3.jpeg",
                "images/women/nike blazers/CZ1055_100_P4.jpeg" ],
                
            [1, "images/women/nike blazers/CZ1055_118_P1.jpeg",
                "images/women/nike blazers/CZ1055_118_P1.jpeg",
                "images/women/nike blazers/CZ1055_118_P1.jpeg",
                "images/women/nike blazers/CZ1055_118_P1.jpeg" ]
        ],
        "category": "2",
        "price": "105.00",
        "sizes" : [
            "8",
            "9",
            "10"
        ],
        "colors" : [
            "black",
            "pink"
        ],
        "sale": 0,
        "tax" : 0.07,
        "shipping": 5.00
    },
    {  
        "name" : "Women's Nike Dunk Low Retro Casual Shoes",
        "description": "",
        "imageNames": [
            
            [0, "images/women/nike dunks/DD1503_101_P1.jpeg",
                "images/women/nike dunks/DD1503_101_P2.jpeg",
                "images/women/nike dunks/DD1503_101_P3.jpeg",
                "images/women/nike dunks/DD1503_101_P4.jpeg" ],                                           

            [1, "images/women/nike blazers/CZ1055_118_P1.jpeg",
                "images/women/nike blazers/CZ1055_118_P2.jpeg",
                "images/women/nike blazers/CZ1055_118_P3.jpeg",
                "images/women/nike blazers/CZ1055_118_P4.jpeg" ]


        ],
        "category": "2",
        "price": "100.00",
        "sizes" : [
            "9",
            "10",
            "11"
        ],
        "colors" : [
            "black",
            "#d2aa9e"
        ],
        "sale": 0.20,
        "tax" : 0.07,
        "shipping": 0.00
    },
    {  
        "name" : "Women's Nike Air Force 1 '07 CASUAL SHOES",
        "description": "",
        "imageNames": [

            [0, "images/women/nike force/DD8959_100_P1.jpeg",
                "images/women/nike force/DD8959_100_P2.jpeg",
                "images/women/nike force/DD8959_100_P3.jpeg",
                "images/women/nike force/DD8959_100_P4.jpeg" ],                                           

            [1, "images/women/nike force/DD8959_115_P1.jpeg",
                "images/women/nike force/DD8959_115_P2.jpeg",
                "images/women/nike force/DD8959_115_P3.jpeg",
                "images/women/nike force/DD8959_115_P4.jpeg" ]
        ],
        "category": "2",
        "price": "80.00",
        "sizes" : [
            "9",
            "10",
            "11"
        ],
        "colors" : [
            "white",
            "orange"
        ],
        "sale": 0.10,
        "tax" : 0.07,
        "shipping": 0.00
    },
    {  
        "name" : "Women's Nike Air Vapormax Plus Running Shoes",
        "description": "",
        "imageNames": [
             [0, "images/women/nike vapormax/FD0823_500_P1.jpeg",
                "images/women/nike vapormax/FD0823_500_P2.jpeg",
                "images/women/nike vapormax/FD0823_500_P3.jpeg",
                "images/women/nike vapormax/FD0823_500_P4.jpeg" ],                                           

            [1, "images/women/nike vapormax/FZ3614_686_P1.jpeg",
                "images/women/nike vapormax/FZ3614_686_P2.jpeg",
                "images/women/nike vapormax/FZ3614_686_P3.jpeg",
                "images/women/nike vapormax/FZ3614_686_P4.jpeg" ]
        ],
        "category": "2",
        "price": "210.00",
        "sizes" : [
            "7",
            "8",
            "9"
        ],
        "colors" : [
            "#71BDD4", 
            "pink"
        ],
        "sale": 0.25,
        "tax" : 0.07,
        "shipping": 0.00
    },
    {  
        "name" : "Women's New Balance 530 Causal Shoes",
        "description": "",
        "imageNames": [
            [0, "images/women/new blance/MR530CK_161_P1.jpeg",
                "images/women/new blance/MR530CK_161_P2.jpeg",
                "images/women/new blance/MR530CK_161_P3.jpeg",
                "images/women/new blance/MR530CK_161_P4.jpeg" ],                                           

            [1, "images/women/new blance/MR530OW_108_P1.jpeg",
                "images/women/new blance/MR530OW_108_P2.jpeg",
                "images/women/new blance/MR530OW_108_P3.jpeg",
                "images/women/new blance/MR530OW_108_P4.jpeg" ]
        ],
        "category": "2",
        "price": "100.00",
        "sizes" : [
            "7",
            "8",
            "9"
        ],
        "colors" : [
            "grey",
            "beige"
        ],
        "sale": 0.0,
        "tax" : 0.07,
        "shipping": 0.00
    },
    {  
        "name" : "Women's New Balance 550 Causal Shoes",
        "description": "",
        "imageNames": [
             [0, "images/women/NB 550/BBW550BB_100_P1.jpeg",
                "images/women/NB 550/BBW550BB_100_P2.jpeg",
                "images/women/NB 550/BBW550BB_100_P3.jpeg",
                "images/women/NB 550/BBW550BB_100_P4.jpeg" ],                                           

            [1, "images/women/NB 550/BBW550BI_073_P1.jpeg",
                "images/women/NB 550/BBW550BI_073_P2.jpeg",
                "images/women/NB 550/BBW550BI_073_P3.jpeg",
                "images/women/NB 550/BBW550BI_073_P4.jpeg" ],

            [2, "images/women/NB 550/BBW550JS_108_P1.jpeg",
                "images/women/NB 550/BBW550JS_108_P2.jpeg",
                "images/women/NB 550/BBW550JS_108_P3.jpeg",
                "images/women/NB 550/BBW550JS_108_P4.jpeg" ]
        ],
        "category": "2",
        "price": "120.00",
        "sizes" : [
            "9",
            "10",
            "11"
        ],
        "colors" : [
            "grey",
            "green",
            "#E2DBD5"
        ],
        "sale": 0.5,
        "tax" : 0.07,
        "shipping": 0.00
    },
    {  
        "name" : "Women's Air Jordan Retro 1 Causal Shoes",
        "description": "",
        "imageNames": [
            [0, "images/women/jordans 1/BQ6472_140_P1.jpeg",
                "images/women/jordans 1/BQ6472_140_P2.jpeg",
                "images/women/jordans 1/BQ6472_140_P3.jpeg",
                "images/women/jordans 1/BQ6472_140_P4.jpeg" ],                                           

            [1, "images/women/jordans 1/FD4810_061_P1.jpeg",
                "images/women/jordans 1/FD4810_061_P2.jpeg",
                "images/women/jordans 1/FD4810_061_P3.jpeg",
                "images/women/jordans 1/FD4810_061_P4.jpeg" ]
        ],
        "category": "2",
        "price": "140.00",
        "sizes" : [
            "8",
            "9",
            "10"
        ],
        "colors" : [
            "blue",
            "red"
        ],
        "sale": 0.1,
        "tax" : 0.07,
        "shipping": 0.00
    },
    {  
        "name" : "Women's Air Jordan Retro 1 Low Causal Shoes",
        "description": "",
        "imageNames": [
            [0, "images/women/jordan 1 low/DC0774_170_P1.jpeg",
                "images/women/jordan 1 low/DC0774_170_P2.jpeg",
                "images/women/jordan 1 low/DC0774_170_P3.jpeg",
                "images/women/jordan 1 low/DC0774_170_P4.jpeg" ],                                           

            [1, "images/women/jordan 1 low/DC0774_113_P1.jpeg",
                "images/women/jordan 1 low/DC0774_113_P2.jpeg",
                "images/women/jordan 1 low/DC0774_113_P3.jpeg",
                "images/women/jordan 1 low/DC0774_113_P4.jpeg" ]
        ],
        "category": "2",
        "price": "115.00",
        "sizes" : [
            "8",
            "9",
            "10"
        ],
        "colors" : [
            "yellow",
            "green"
        ],
        "sale": 0.3,
        "tax" : 0.07,
        "shipping": 0.00
    },
    {  
        "name" : "Women's Air Jordan Retro 3 Causal Shoes",
        "description": "",
        "imageNames": [
            [0, "images/women/jordan 3/FJ9479_100_P1.jpeg",
                "images/women/jordan 3/FJ9479_100_P2.jpeg",
                "images/women/jordan 3/FJ9479_100_P3.jpeg",
                "images/women/jordan 3/FJ9479_100_P4.jpeg" ]
        ],
        "category": "2",
        "price": "210.00",
        "sizes" : [
            "8",
            "9",
            "10"
        ],
        "colors" : [
            "white"
        ],
        "sale": 0,
        "tax" : 0.07,
        "shipping": 0.00
    },
    {  
        "name" : "Women's Air Jordan Retro 6 Causal Shoes",
        "description": "",
        "imageNames": [
            [0, "images/women/jordan 6/FD1643_300_P1.jpeg",
                "images/women/jordan 6/FD1643_300_P2.jpeg",
                "images/women/jordan 6/FD1643_300_P3.jpeg",
                "images/women/jordan 6/FD1643_300_P4.jpeg" ]
        ],
        "category": "2",
        "price": "210.00",
        "sizes" : [
            "8",
            "9",
            "10"
        ],
        "colors" : [
            "brown"
        ],
        "sale": 0,
        "tax" : 0.07,
        "shipping": 0.00
    },
    {  
        "name" : "Women's Puma RS-Pulsoid Causal Shoes",
        "description": "",
        "imageNames": [
            [0, "images/women/puma/39249701_100_P1.jpeg",
                "images/women/puma/39249701_100_P2.jpeg",
                "images/women/puma/39249701_100_P3.jpeg",
                "images/women/puma/39249701_100_P4.jpeg" ],                                           

            [1, "images/women/puma/39249706_100_P1.jpeg",
                "images/women/puma/39249706_100_P2.jpeg",
                "images/women/puma/39249706_100_P3.jpeg",
                "images/women/puma/39249706_100_P4.jpeg" ]
        ],
        "category": "2",
        "price": "110.00",
        "sizes" : [
            "8",
            "9",
            "10"
        ],
        "colors" : [
            "brown",
            "#FF5733"
        ],
        "sale": 0,
        "tax" : 0.07,
        "shipping": 0.00
    }
    

]`;