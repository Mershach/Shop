// products details
let products = JSON.stringify({
    _id: "6a1bddc2801cbba539be0c182498d4dd",
    timestamp: "2019-03-22 17:10:04 +0000",
    images_url: [
        'https://i5.walmartimages.com/asr/8055bdbd-a4dc-4bea-8035-4337d8bd237e.044ce7047aeb36b91e336716ff510c9b.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
        'https://i5.walmartimages.com/asr/5443150e-5acc-4f48-a415-d637aa83e08d.56e1b071d6b7791da6d645265e73bcef.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
        'https://i5.walmartimages.com/asr/a68a2925-11e7-4a1d-adb4-0bd41500722a.f4213f637fa53a425264287df1342647.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
        'https://i5.walmartimages.com/asr/48945324-5157-4eaa-81a3-fadf425d3355.00dd816c1009242c90231769e301dda2.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff',
        'https://i5.walmartimages.com/asr/bc41bd84-07c6-42d1-badd-9764494a33d5.e7b584429b47c0ce21a0e1ded7e9e05f.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff'
    ],
    color_variations: [{
        name: 'Deep Taupe',
        color: 'rgb(126, 108, 108)'
    }, {
        name: 'ivory',
        color: 'rgb(255, 255, 240)'
    }, {
        name: 'Light Coral',
        color: 'rgb(248, 117, 117)'
    }, {
        name: 'Cornflower Blue',
        color: 'rgb(92, 149, 255)'
    }],
    product_name: "In Style Eyes Cateye Two Tone Reading Glasses",
    description: "Stunning Looking Cat Eye Two Tone Reading Glasses give You an Upscale Look. These Designer Readers will get plenty of compliments. Top Quality Frames with Spring Metal Hinges make them Sturdy yet they have a very Comfortable Fit - You'll Forget you have them on. You'll find them Hard to Live Without. Includes a High Quality Hard Case and Cleaning Cloth, each with an In Style Eyes Logo.|In Style Eyes Cateye Two Tone Reading Glasses",
    list_price: 19.99,
    sale_price: 19.99,
    brand: "In Style Eyes",
    item_number: "",
    g_tin: "096647824277",
    package_size: "",
    category: "Health|Home Health Care|Daily Living Aids",
    postal_code: "",
    available: "TRUE"
});

//save products in localstorage
localStorage.setItem('products', products);
