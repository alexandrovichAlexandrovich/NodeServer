var file = {
    'A':'a',
    'B':['b','c','d'],
    'C':{
        'a':'1',
        'b':'2'
    }
}.stringify();

exports.get = function(){
    return file;
}