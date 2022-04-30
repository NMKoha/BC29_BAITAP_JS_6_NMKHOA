/**
 * Bài tập 1
 */

function getEle(id) {
    return document.getElementById(id);
};

getEle("btnBaiTap1").onclick = function() {
    var tong = getEle("tong").value * 1;
    var so = 0;
    var count = 0;
    var result = "";
    while (so <= tong) {
        // bước nhảy
        so += count;
        result = "Số nguyên dương n nhỏ nhất để: 1 + 2 + ... + n > " + tong + " là: " + count;
        count++;
    };

    getEle("divInfo1").innerHTML = result;
};
// so = 0;re=0;count = 1;
// so = 1;re = 1;count = 2;
// so = 3;re = 2;count = 3;
// so=6;re=3;count=4


/**
 * Bài tập 2
 */
function tinhTong(x, n) {
    var tong = 0;
    var i = 1;
    while (i <= n) {
        tong += Math.pow(x, i);
        i++;
    }
    return tong;
};

getEle("btnBaiTap2").onclick = function() {
    var x = getEle("x").value * 1;
    var n = getEle("n").value * 1;
    var result1 = "Tổng S(n)= " + tinhTong(x, n);
    getEle("divInfo2").style.display = "inline";
    getEle("divInfo2").innerHTML = result1;

};

/**
 * Bài tập 3
 */
function tinhGiaiThua(a) {
    var giaiThua = 1;
    var j = 1;
    while (j <= a) {
        giaiThua = giaiThua * j;
        j++;
    }
    return giaiThua;
};
getEle("btnBaiTap3").onclick = function() {
    var soN = getEle("soN").value * 1;
    var giaiThua = tinhGiaiThua(soN)
    getEle("divInfo3").style.display = "inline";
    getEle("divInfo3").innerHTML = giaiThua;
};

/**
 * Bài tập 4
 */

getEle("btnBaiTap4").onclick = function() {
    var result2 = "";
    var i = 1;
    while (i <= 10) {
        if (i % 2 === 0) {
            result2 += '<div style="background-color:red;padding:5px;">Div chẵn ' + i + '</div>';
        } else {
            result2 += '<div style="background-color:blue;padding:5px;">Div lẻ ' + i + '</div>';
        }
        i++;
    };
    getEle("divInfo4").innerHTML = result2;
};