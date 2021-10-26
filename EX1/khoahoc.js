function khoahoc(ten,hocphi){
    this.ten=ten;
    this.hocphi=hocphi;
}
khoahoc.prototype.mota = function(){
    console.log('Hello' + this.ten + ' '+ this.hocphi)
}
var nodejs = new khoahoc(' lap trinh node js ',800000);
nodejs.mota();