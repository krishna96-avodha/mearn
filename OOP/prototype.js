var language={
    baseName:"javascript",
    type:"interpreter",
    version:"ES10"
}
var framework={
    name:"express"

}
framework.__proto__=language
console.log(framework.version);
