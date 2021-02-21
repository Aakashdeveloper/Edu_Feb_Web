localstorage
>  Persistnat Storage
> Save wrt to browser
> do not delete of its own

localStorage.getItem('edufeb')
"123456789ijbnenrubnur"
localStorage.setItem('edufeb','123456789ijbnenrubnur')
undefined
localStorage.getItem('edufeb')
"123456789ijbnenrubnur"
localStorage.removeItem('edufeb')
undefined

sessionStorage
> temp Storage
> save wrt to tab
> delete automatically when tab close

sessionStorage.setItem("FebWeb","898f8787ev8y8e")
undefined
sessionStorage.getItem("FebWeb")
"898f8787ev8y8e"
sessionStorage.removeItem("FebWeb")
undefined
sessionStorage.getItem("FebWeb")
null

Cookies
> save wrt to website
> expire time

document.cookie
"_ga=GA1.2.1880173027.1602255983; city=London; _gid=GA1.2.595532263.1613922018; _gat_gtag_UA_131256843_1=1"
document.cookie="origin=delhi"
"origin=delhi"
document.cookie
"_ga=GA1.2.1880173027.1602255983; city=London; _gid=GA1.2.595532263.1613922018; origin=delhi"

document.cookie="booking=new;expires=Mon, 22 Feb 2021 01:00:00 UTC"