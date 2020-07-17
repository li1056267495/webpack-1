import x from './x.js'
import png from './assets/1.png'
console.log(png)
console.log(x)

const id = document.getElementById('app')
id.innerHTML = `
<img src="${png}">
`


const button = document.createElement('button')
button.innerText = "懒加载"
button.onclick = () => {
    const promise = import("./lazy.js")
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log('模块加载错误')
    })
}


id.appendChild(button)