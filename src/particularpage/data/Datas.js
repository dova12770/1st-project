let today = new Date();

let Datas = [
    {
        idDT: '001',
        ppTitleDT: '라이프 클락',
        convergeAmountDT: '100',
        cvgPercentDT: '모인금액/목표금액*100',
        remainDateDT: '마감날짜-현재날짜',
        sponserCountDT: '1',
        targetAmountDT: '200',
        fundDate1DT: '2024.11.01',
        fundDate2DT: '2024.12.01',
        paydayDT: '2024.12.10',
        goDeliveryDT: '2024.12.20',
        userPriceDT: ['10,000', '20,000', '30,000'],
        userPriceTextDT: ['생존키트 A형', '생존키트 B형', '생존키트 C형'],
        imagesDT: [
            process.env.PUBLIC_URL + '/images/라이프클락1.jpg',
            process.env.PUBLIC_URL + '/images/라이프클락2.jpg',
            process.env.PUBLIC_URL + '/images/배송교환환불.jpg'
        ],
        userImagesDT: [
            process.env.PUBLIC_URL + '/images/라이프클락1.jpg',
            process.env.PUBLIC_URL + '/images/라이프클락2.jpg',
            process.env.PUBLIC_URL + '/images/배송교환환불.jpg'
        ]
    },

    {
        idDT: '002',
        ppTitleDT: '방염 담요',
        convergeAmountDT: '200',
        cvgPercentDT: '모인금액/목표금액*100',
        remainDateDT: '마감날짜-현재날짜',
        sponserCountDT: '5',
        targetAmountDT: '1000',
        fundDate1DT: '2024.5.03',
        fundDate2DT: '2024.6.03',
        paydayDT: '2024.6.10',
        goDeliveryDT: '2024.6.12',
        userPriceDT: ['15,000', '15,000', '15,000', '16,000', '17,000'],
        userPriceTextDT: ['S 사이즈', 'M 사이즈', 'L 사이즈', 'XL 사이즈', 'XXL 사이즈'],

        imagesDT: [
            process.env.PUBLIC_URL + '/images/방염담요1.jpg',
            process.env.PUBLIC_URL + '/images/방염담요2.jpg',
            process.env.PUBLIC_URL + '/images/배송교환환불.jpg'
        ],

        userImagesDT: [
            process.env.PUBLIC_URL + '/images/방염담요1.jpg',
            process.env.PUBLIC_URL + '/images/방염담요2.jpg',
            process.env.PUBLIC_URL + '/images/배송교환환불.jpg'
        ]
    },

    {
        idDT: '003',
        ppTitleDT: '재난생존가방',
        convergeAmountDT: '500',
        cvgPercentDT: '모인금액/목표금액*100',
        remainDateDT: '마감날짜-현재날짜',
        sponserCountDT: '12',
        targetAmountDT: '10000',
        fundDate1DT: '2024.7.07',
        fundDate2DT: '2024.7.21',
        paydayDT: '2024.7.25',
        goDeliveryDT: '2024.7.27',
        userPriceDT: ['20,000', '30,000', '40,000', '50,000', '60,000'],
        userPriceTextDT: ['1개 세트', '2개 세트', '3개 세트', '4개 세트', '5개 세트'],

        imagesDT: [
            process.env.PUBLIC_URL + '/images/재난생존가방1.jpg',
            process.env.PUBLIC_URL + '/images/재난생존가방2.jpg',
            process.env.PUBLIC_URL + '/images/배송교환환불.jpg'
        ],

        userImagesDT: [
            process.env.PUBLIC_URL + '/images/재난생존가방1.jpg',
            process.env.PUBLIC_URL + '/images/재난생존가방2.jpg',
            process.env.PUBLIC_URL + '/images/배송교환환불.jpg'
        ]
    }
];




export default Datas;