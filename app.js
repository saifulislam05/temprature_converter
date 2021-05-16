const celsius = document.querySelector('.celsius');
const fahrenheit = document.querySelector('.fahrenheit');
const kelvin = document.querySelector('.kelvin');
const inputs = document.querySelectorAll('input');
const btn = document.querySelector('.btn');
const image = document.querySelector('img')


//target whom I will convert
let lastedit = ''
let lastupdate = () => {
    celsius.addEventListener('keyup', () => {
        lastedit = 'celsius'

    });
    fahrenheit.addEventListener('keyup', () => {
        lastedit = 'fahrenheit'

    });
    kelvin.addEventListener('keyup', () => {
        lastedit = 'kelvin'

    });

};
lastupdate();

//converting process

const convert = (lastedit) => {
    if (lastedit === "celsius") {
        const fvalue = (celsius.value * 9 / 5) + 32;
        const kvalue = Number(celsius.value) + 273.15;
        fahrenheit.value = Math.round(fvalue)
        kelvin.value = Math.round(kvalue)

    }
    else if (lastedit === "fahrenheit") {
        const cvalue = (fahrenheit.value - 32) * 5 / 9;
        const kvalue = (fahrenheit.value - 32) * 5 / 9 + 273.15;
        celsius.value = Math.round(cvalue)
        kelvin.value = Math.round(kvalue)

    }
    else if (lastedit === "kelvin") {
        const fvalue = (kelvin.value - 273.15) * 9 / 5 + 32;
        const cvalue = kelvin.value - 273.15
        fahrenheit.value = Math.round(fvalue)
        celsius.value = Math.round(cvalue)
    }

};



const images = {
    exCold: "https://images.pexels.com/photos/839462/pexels-photo-839462.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    cold: "https://images.pexels.com/photos/6382995/pexels-photo-6382995.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",

    normal: "https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    sunny: "https://images.pexels.com/photos/1129605/pexels-photo-1129605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    hot: "https://images.pexels.com/photos/4719950/pexels-photo-4719950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    exHot: "https://images.pexels.com/photos/4621457/pexels-photo-4621457.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
}


const updateimage = (temp) => {
    if (temp <= -10) {
        image.setAttribute('src', images.exCold);
    } else if (temp <= 10) {
        image.setAttribute('src', images.cold)
    } else if (temp <= 18) {
        image.setAttribute('src', images.normal)
    } else if (temp <= 25) {
        image.setAttribute('src', images.sunny)
    } else if (temp <= 45) {
        image.setAttribute('src', images.hot)
    } else if (temp > 45) {
        image.setAttribute('src', images.exHot)
    }
}



btn.addEventListener('click', () => {
    convert(lastedit)
    temp = 0;
    if (lastedit === "celsius") {
        temp = celsius.value

    }
    else if (lastedit === "fahrenheit") {
        temp = (fahrenheit.value - 32) * 5 / 9;

    }
    else if (lastedit === "kelvin") {

        temp = kelvin.value - 273.15

    }

    updateimage(temp)

})






