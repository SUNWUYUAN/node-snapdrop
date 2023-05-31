String.prototype.hashCode = function () {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        //hash |= 0; //转换为32位整数
        hash &= 0x7FFFFFFF; //转换为正整数
    }
    return hash;
};

Math.seededRandom = function (max, min) {
    max = max || 1;
    min = min || 0;
    Math.seed = (Math.seed * 9301 + 49297) % 233280;
    var rnd = Math.seed / 233280.0;
    return Math.floor(min + rnd * (max - min));
};

function getName(seed) {
    var familyNames = new Array(
'初代''赛文''杰克''艾斯''泰罗''之父''雷欧'
'阿斯特拉''乔尼亚斯''爱迪''史考特''查克'
'贝斯''葛雷''帕瓦特''哉阿斯''迪迦''戴拿''盖亚'
'阿古茹''纳伊斯''高斯''杰斯提斯''雷杰多''奈克斯特'
'奈克赛斯''诺亚''奈欧斯''赛文21''麦克斯''杰诺'
'梦比优斯''希卡利''赛罗''赛迦''银河''维克特利'
'捷德''欧布''罗索''布鲁''格丽乔'''
    );
    var midNames = new Array(
       ''
    );
    var givenNames = new Array(
         '奥特曼','奥特曼','奥特曼','奥特曼','奥特曼','奥特曼','奥特曼','奥特曼','奥特曼',
        '奥特曼','奥特曼','奥特曼','奥特曼','奥特曼','奥特曼',
        '奥特曼','奥特曼','奥特曼','奥特曼','奥特曼',
        '奥特曼','奥特曼','奥特曼','奥特曼','奥特曼',''
    );
    Math.seed = seed.hashCode();
    var familyName = familyNames[Math.seededRandom(100, 0)];
    var midName = midNames[Math.seededRandom(8, 0)];
    var givenName = givenNames[Math.seededRandom(8, 0)];
    var fullName = familyName + midName + givenName;
    if (fullName && fullName.length < 2) fullName = '悟小元';

    return fullName;
}

exports.getName = getName;
