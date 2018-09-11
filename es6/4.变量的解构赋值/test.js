let str = '/a/b/../../c/d/../../e/f'

while (str.match(/\/.\/\.\.\//)) {

    str = str.replace(/\/.\/\.\.\//,'/')
    console.log(str);

}
