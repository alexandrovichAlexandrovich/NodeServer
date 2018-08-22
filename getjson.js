var file = {
    'A':'a',
    'B':['b','c','d'],
    'C':{
        'a':'1',
        'b':'2'
    }
};

exports.get = function(){
    return JSON.stringify(file);
};

