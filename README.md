### CONNECTION TOWERS

THIS IS JUST A SIMPLE PACKAGE WHICH WHEN ATTACHED TO ANY WEB SITE JUST ADDS A CONNECTION TOWER WHICH SHOWS THE FOLLOWING CONNECTION TYPE:`1:4G 2:3G 3:2G`

### GETTING STARTED

CALL THE FUNCTION :
`connectionTowers()`

### HOW TO USE

- `connectionTowers({ height:11, margin:'23px', rounded: true, colors: ["blue", "pink", "violet"], showConnection: false, })`
- `height` - defines the height of the last bar and all other bars depend on that height
- `margin` - defines the spacing between each bar ;PLEASE USE "-YOUR-VALUE-px" format
- `rounded` - if you want bars to be rounded pleas pass `true` else `false` or dont add
- `colors` - colors takes a array of three colors. These colors are in order :`1st : 4g ; 2nd : 3g ; 3rd :2g`. Place them in this order or use default green yellow red
- `showConnection` - pass `false` if you dont want to show current connection type 2g,3g,4g
